import { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { 
  ArrowLeft, 
  Send, 
  Loader2,
  Bot,
  User,
  Leaf,
  Upload,
  X,
  Image,
  FileText,
  Edit2,
  Check,
  RotateCcw,
  Sparkles
} from "lucide-react";
import traceMarketLogo from "@/assets/tracemarket-logo.png";

interface MessageContent {
  type: "text" | "image_url";
  text?: string;
  image_url?: { url: string };
}

interface FileAttachment {
  id: string;
  file: File;
  previewUrl?: string;
  base64?: string;
  type: "image" | "document";
}

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  contentParts?: MessageContent[];
  attachments?: FileAttachment[];
  timestamp: Date;
  isEditing?: boolean;
}

interface CollectedData {
  industry?: string;
  companyName?: string;
  productName?: string;
  productDescription?: string;
  ingredients?: Array<{
    name: string;
    percentage: number;
    origin_country?: string;
    transport_method?: string;
    distance_km?: number;
  }>;
  nutritionInfo?: Record<string, any>;
  certifications?: string[];
}

const INITIAL_MESSAGE = `Welcome to Trace.Market! 🌱

I'm your AI assistant for creating Digital Product Passports. I can read uploaded documents (PDFs, images) and extract all relevant product information automatically.

**How to get started:**

1. **Upload documents** - Product specs, ingredient lists, certificates
2. **Paste images** - Screenshots, labels, packaging photos
3. **Or just tell me** about your product

**Let's begin:** What industry does your product belong to?
- 🍽️ Food & Beverage
- 👕 Fashion & Textiles  
- 📱 Electronics
- 🏭 Manufacturing
- 💊 Pharmaceuticals
- 🏗️ Construction`;

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: INITIAL_MESSAGE,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [attachedFiles, setAttachedFiles] = useState<FileAttachment[]>([]);
  const [editingMessageId, setEditingMessageId] = useState<string | null>(null);
  const [editInput, setEditInput] = useState("");
  const [collectedData, setCollectedData] = useState<CollectedData>({});
  const [isDragging, setIsDragging] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Convert file to base64
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  // Handle paste events for images
  useEffect(() => {
    const handlePaste = async (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (!items) return;

      for (const item of items) {
        if (item.type.startsWith("image/")) {
          e.preventDefault();
          const file = item.getAsFile();
          if (file) {
            await addFileAttachment(file);
          }
        }
      }
    };

    document.addEventListener("paste", handlePaste);
    return () => document.removeEventListener("paste", handlePaste);
  }, []);

  const addFileAttachment = async (file: File) => {
    const isImage = file.type.startsWith("image/");
    const base64 = await fileToBase64(file);
    
    const attachment: FileAttachment = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      file,
      base64,
      previewUrl: isImage ? URL.createObjectURL(file) : undefined,
      type: isImage ? "image" : "document",
    };

    setAttachedFiles(prev => [...prev, attachment]);
  };

  const removeAttachment = (id: string) => {
    setAttachedFiles(prev => {
      const attachment = prev.find(a => a.id === id);
      if (attachment?.previewUrl) {
        URL.revokeObjectURL(attachment.previewUrl);
      }
      return prev.filter(a => a.id !== id);
    });
  };

  // Drag and drop handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    for (const file of files) {
      if (file.type.startsWith("image/") || 
          file.type === "application/pdf" ||
          file.type.includes("document") ||
          file.type.includes("spreadsheet")) {
        await addFileAttachment(file);
      }
    }
  };

  const buildMessageContent = (
    text: string, 
    files: FileAttachment[]
  ): MessageContent[] => {
    const parts: MessageContent[] = [];
    
    // Add text content
    if (text.trim()) {
      parts.push({ type: "text", text: text.trim() });
    }

    // Add file contents
    for (const file of files) {
      if (file.type === "image" && file.base64) {
        parts.push({
          type: "image_url",
          image_url: { url: file.base64 }
        });
      } else if (file.base64) {
        // For documents, we describe them in text and include as image if possible
        parts.push({
          type: "text",
          text: `[Uploaded document: ${file.file.name}]`
        });
        // If it's a PDF or document, try to send as image for vision processing
        if (file.base64.startsWith("data:image") || file.base64.startsWith("data:application/pdf")) {
          parts.push({
            type: "image_url",
            image_url: { url: file.base64 }
          });
        }
      }
    }

    return parts;
  };

  const streamChat = async (
    allMessages: Array<{ role: "user" | "assistant"; content: string | MessageContent[] }>
  ) => {
    const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/dpp-chat`;

    const resp = await fetch(CHAT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
      },
      body: JSON.stringify({ 
        messages: allMessages,
        collectedData 
      }),
    });

    if (!resp.ok) {
      const errorData = await resp.json().catch(() => ({}));
      throw new Error(errorData.error || `Request failed with status ${resp.status}`);
    }

    if (!resp.body) throw new Error("No response body");

    const reader = resp.body.getReader();
    const decoder = new TextDecoder();
    let textBuffer = "";
    let assistantContent = "";

    const assistantId = Date.now().toString();
    setMessages(prev => [...prev, {
      id: assistantId,
      role: "assistant",
      content: "",
      timestamp: new Date(),
    }]);

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      
      textBuffer += decoder.decode(value, { stream: true });

      let newlineIndex: number;
      while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
        let line = textBuffer.slice(0, newlineIndex);
        textBuffer = textBuffer.slice(newlineIndex + 1);

        if (line.endsWith("\r")) line = line.slice(0, -1);
        if (line.startsWith(":") || line.trim() === "") continue;
        if (!line.startsWith("data: ")) continue;

        const jsonStr = line.slice(6).trim();
        if (jsonStr === "[DONE]") break;

        try {
          const parsed = JSON.parse(jsonStr);
          const content = parsed.choices?.[0]?.delta?.content as string | undefined;
          if (content) {
            assistantContent += content;
            setMessages(prev => 
              prev.map(m => 
                m.id === assistantId 
                  ? { ...m, content: assistantContent }
                  : m
              )
            );
          }
        } catch {
          textBuffer = line + "\n" + textBuffer;
          break;
        }
      }
    }

    // Final flush
    if (textBuffer.trim()) {
      for (let raw of textBuffer.split("\n")) {
        if (!raw) continue;
        if (raw.endsWith("\r")) raw = raw.slice(0, -1);
        if (raw.startsWith(":") || raw.trim() === "") continue;
        if (!raw.startsWith("data: ")) continue;
        const jsonStr = raw.slice(6).trim();
        if (jsonStr === "[DONE]") continue;
        try {
          const parsed = JSON.parse(jsonStr);
          const content = parsed.choices?.[0]?.delta?.content as string | undefined;
          if (content) {
            assistantContent += content;
            setMessages(prev => 
              prev.map(m => 
                m.id === assistantId 
                  ? { ...m, content: assistantContent }
                  : m
              )
            );
          }
        } catch { /* ignore */ }
      }
    }

    // Try to extract collected data from response
    extractCollectedData(assistantContent);

    return assistantContent;
  };

  // Extract structured data from AI responses
  const extractCollectedData = (response: string) => {
    const updates: Partial<CollectedData> = {};

    // Simple pattern matching to extract data
    if (response.includes("**Industry:**") || response.includes("industry:")) {
      const match = response.match(/(?:\*\*)?Industry(?:\*\*)?:\s*([^\n*]+)/i);
      if (match) updates.industry = match[1].trim();
    }

    if (response.includes("**Company:**") || response.includes("company:")) {
      const match = response.match(/(?:\*\*)?Company(?:\*\*)?:\s*([^\n*]+)/i);
      if (match) updates.companyName = match[1].trim();
    }

    if (response.includes("**Product:**") || response.includes("product:")) {
      const match = response.match(/(?:\*\*)?Product(?:\*\*)?:\s*([^\n*]+)/i);
      if (match) updates.productName = match[1].trim();
    }

    if (Object.keys(updates).length > 0) {
      setCollectedData(prev => ({ ...prev, ...updates }));
    }
  };

  const handleSend = async () => {
    if ((!input.trim() && attachedFiles.length === 0) || isLoading) return;

    const contentParts = buildMessageContent(input, attachedFiles);
    
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input || `[${attachedFiles.length} file(s) uploaded]`,
      contentParts,
      attachments: [...attachedFiles],
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setAttachedFiles([]);
    setIsLoading(true);

    try {
      // Build conversation history
      const conversationHistory = [...messages, userMessage]
        .slice(1)
        .map(m => ({
          role: m.role,
          content: m.contentParts && m.contentParts.length > 0 
            ? m.contentParts 
            : m.content
        }));

      await streamChat(conversationHistory);
    } catch (error) {
      console.error("Chat error:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to get response",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditMessage = (messageId: string) => {
    const message = messages.find(m => m.id === messageId);
    if (message && message.role === "user") {
      setEditingMessageId(messageId);
      setEditInput(message.content);
    }
  };

  const handleSaveEdit = async () => {
    if (!editingMessageId || !editInput.trim()) return;

    const messageIndex = messages.findIndex(m => m.id === editingMessageId);
    if (messageIndex === -1) return;

    // Update the message and remove all subsequent messages
    const updatedMessages = messages.slice(0, messageIndex + 1).map(m =>
      m.id === editingMessageId 
        ? { ...m, content: editInput, contentParts: [{ type: "text" as const, text: editInput }] }
        : m
    );

    setMessages(updatedMessages);
    setEditingMessageId(null);
    setEditInput("");
    setIsLoading(true);

    try {
      const conversationHistory = updatedMessages
        .slice(1)
        .map(m => ({
          role: m.role,
          content: m.contentParts && m.contentParts.length > 0 
            ? m.contentParts 
            : m.content
        }));

      await streamChat(conversationHistory);
    } catch (error) {
      console.error("Chat error:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to get response",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelEdit = () => {
    setEditingMessageId(null);
    setEditInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    for (const file of files) {
      await addFileAttachment(file);
    }
    // Reset input to allow selecting same files again
    e.target.value = "";
  };

  const handleQuickOption = (label: string) => {
    setInput(label);
    setTimeout(() => {
      handleSend();
    }, 50);
  };

  const industryOptions = [
    { emoji: "🍽️", label: "Food & Beverage" },
    { emoji: "👕", label: "Fashion & Textiles" },
    { emoji: "📱", label: "Electronics" },
    { emoji: "🏭", label: "Manufacturing" },
    { emoji: "💊", label: "Pharmaceuticals" },
    { emoji: "🏗️", label: "Construction" },
  ];

  const showQuickOptions = messages.length === 1 && !isLoading;

  // Data collection progress
  const dataProgress = {
    industry: !!collectedData.industry,
    company: !!collectedData.companyName,
    product: !!collectedData.productName,
    ingredients: (collectedData.ingredients?.length || 0) > 0,
  };
  const progressPercent = Object.values(dataProgress).filter(Boolean).length / Object.keys(dataProgress).length * 100;

  return (
    <div 
      className="min-h-screen bg-background flex flex-col"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {/* Drop overlay */}
      {isDragging && (
        <div className="fixed inset-0 z-50 bg-primary/10 backdrop-blur-sm flex items-center justify-center pointer-events-none">
          <div className="bg-card border-2 border-dashed border-primary rounded-2xl p-12 text-center">
            <Upload className="h-16 w-16 text-primary mx-auto mb-4" />
            <p className="text-xl font-medium text-foreground">Drop files here</p>
            <p className="text-muted-foreground">PDFs, images, spreadsheets</p>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link 
              to="/" 
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              <ArrowLeft className="h-5 w-5 text-muted-foreground" />
            </Link>
            <img src={traceMarketLogo} alt="Trace.Market" className="h-7 w-auto" />
          </div>

          {/* Progress indicator */}
          {progressPercent > 0 && (
            <div className="hidden sm:flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                {Object.entries(dataProgress).map(([key, done]) => (
                  <div
                    key={key}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      done ? "bg-primary" : "bg-border"
                    }`}
                    title={key}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">
                {Math.round(progressPercent)}% complete
              </span>
            </div>
          )}

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Leaf className="h-4 w-4" />
              <span>Free Assessment</span>
            </div>
            <Link to="/auth">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full">
        <ScrollArea className="flex-1 p-4 sm:p-6">
          <div className="space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${
                  message.role === "user" ? "flex-row-reverse" : ""
                }`}
              >
                {/* Avatar */}
                <div
                  className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center ${
                    message.role === "assistant"
                      ? "bg-primary/10"
                      : "bg-secondary"
                  }`}
                >
                  {message.role === "assistant" ? (
                    <Bot className="h-5 w-5 text-primary" />
                  ) : (
                    <User className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>

                {/* Message Content */}
                <div className="flex flex-col gap-2 max-w-[80%]">
                  {/* Attachment previews for user messages */}
                  {message.role === "user" && message.attachments && message.attachments.length > 0 && (
                    <div className="flex flex-wrap gap-2 justify-end">
                      {message.attachments.map((att) => (
                        <div
                          key={att.id}
                          className="relative rounded-lg overflow-hidden border border-border bg-secondary/50"
                        >
                          {att.type === "image" && att.previewUrl ? (
                            <img
                              src={att.previewUrl}
                              alt="Attachment"
                              className="max-w-[200px] max-h-[150px] object-cover"
                            />
                          ) : (
                            <div className="flex items-center gap-2 px-3 py-2">
                              <FileText className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm text-foreground truncate max-w-[150px]">
                                {att.file.name}
                              </span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Message bubble */}
                  {editingMessageId === message.id ? (
                    <div className="flex flex-col gap-2">
                      <Textarea
                        value={editInput}
                        onChange={(e) => setEditInput(e.target.value)}
                        className="min-h-[80px]"
                        autoFocus
                      />
                      <div className="flex gap-2 justify-end">
                        <Button size="sm" variant="outline" onClick={handleCancelEdit}>
                          <X className="h-4 w-4 mr-1" />
                          Cancel
                        </Button>
                        <Button size="sm" onClick={handleSaveEdit}>
                          <RotateCcw className="h-4 w-4 mr-1" />
                          Resend
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div
                      className={`group relative rounded-2xl px-4 py-3 ${
                        message.role === "assistant"
                          ? "bg-card border border-border/50"
                          : "bg-primary text-primary-foreground"
                      }`}
                    >
                      <div 
                        className={`text-sm whitespace-pre-wrap ${
                          message.role === "assistant" ? "prose prose-sm max-w-none dark:prose-invert" : ""
                        }`}
                        dangerouslySetInnerHTML={{ 
                          __html: message.content
                            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                            .replace(/\*(.*?)\*/g, '<em>$1</em>')
                            .replace(/`([^`]+)`/g, '<code class="bg-secondary px-1 rounded">$1</code>')
                        }}
                      />
                      
                      {/* Edit button for user messages */}
                      {message.role === "user" && message.id !== "1" && !isLoading && (
                        <button
                          onClick={() => handleEditMessage(message.id)}
                          className="absolute -left-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-full hover:bg-secondary"
                          title="Edit and resend"
                        >
                          <Edit2 className="h-4 w-4 text-muted-foreground" />
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Loading Indicator */}
            {isLoading && messages[messages.length - 1]?.role === "user" && (
              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                  <Bot className="h-5 w-5 text-primary" />
                </div>
                <div className="bg-card border border-border/50 rounded-2xl px-4 py-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Analyzing...</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        {/* Quick Options */}
        {showQuickOptions && (
          <div className="px-4 sm:px-6 pb-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {industryOptions.map((option) => (
                <Button
                  key={option.label}
                  variant="outline"
                  size="sm"
                  className="gap-2"
                  onClick={() => handleQuickOption(option.label)}
                >
                  <span>{option.emoji}</span>
                  <span>{option.label}</span>
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="sticky bottom-0 bg-background border-t border-border/50 p-4 sm:p-6">
          {/* Attached Files Preview */}
          {attachedFiles.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-2">
              {attachedFiles.map((att) => (
                <div
                  key={att.id}
                  className="relative group rounded-lg overflow-hidden border border-border bg-secondary/50"
                >
                  {att.type === "image" && att.previewUrl ? (
                    <img
                      src={att.previewUrl}
                      alt="Preview"
                      className="w-16 h-16 object-cover"
                    />
                  ) : (
                    <div className="flex items-center gap-2 px-3 py-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-foreground truncate max-w-[100px]">
                        {att.file.name}
                      </span>
                    </div>
                  )}
                  <button
                    onClick={() => removeAttachment(att.id)}
                    className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="flex items-end gap-3">
            {/* File Upload */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.csv"
              multiple
              className="hidden"
            />
            <Button
              variant="outline"
              size="icon"
              className="shrink-0"
              onClick={() => fileInputRef.current?.click()}
              disabled={isLoading}
              title="Upload files (or paste/drop images)"
            >
              <Upload className="h-4 w-4" />
            </Button>

            {/* Text Input */}
            <div className="flex-1 relative">
              <Textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message or paste an image..."
                className="min-h-[44px] max-h-[200px] resize-none pr-12"
                disabled={isLoading}
                rows={1}
              />
            </div>

            {/* Send Button */}
            <Button
              onClick={handleSend}
              disabled={(!input.trim() && attachedFiles.length === 0) || isLoading}
              className="shrink-0 bg-primary hover:bg-primary/90"
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center mt-3">
            <span className="inline-flex items-center gap-1">
              <Image className="h-3 w-3" />
              Paste images directly
            </span>
            {" • "}
            <span className="inline-flex items-center gap-1">
              <Sparkles className="h-3 w-3" />
              AI reads uploaded documents
            </span>
            {" • "}
            <Link to="/auth" className="text-primary hover:underline">
              Sign in to save
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chat;
