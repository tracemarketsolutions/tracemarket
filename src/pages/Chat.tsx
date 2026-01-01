import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  ArrowLeft, 
  Send, 
  Paperclip, 
  Loader2,
  Bot,
  User,
  Leaf,
  Upload,
  X
} from "lucide-react";
import traceMarketLogo from "@/assets/tracemarket-logo.png";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: "1",
    role: "assistant",
    content: `Welcome to Trace.Market! 🌱

I'm here to help you create your Digital Product Passport. I'll guide you through collecting information about your product's supply chain, and then generate your LCA (Life-Cycle Assessment), EPD (Environmental Product Declaration), and finally your embeddable DPP.

**Let's start with the basics:**

What industry does your product belong to?
- 🍽️ Food & Beverage
- 👕 Fashion & Textiles
- 📱 Electronics
- 🏭 Manufacturing
- 💊 Pharmaceuticals
- 🏗️ Construction
- 📦 Other

Just type your answer or select from the options above!`,
    timestamp: new Date(),
  },
];

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() && !attachedFile) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: attachedFile ? `${input}\n\n📎 Attached: ${attachedFile.name}` : input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setAttachedFile(null);
    setIsLoading(true);

    // Simulate AI response (will be replaced with actual AI integration)
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: `Great choice! I've noted that you're in the **${input}** sector.

Now, let's get some details about your product:

**What is the name of your product?**

This will be the main identifier for your Digital Product Passport.`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAttachedFile(file);
    }
  };

  const industryOptions = [
    { emoji: "🍽️", label: "Food & Beverage" },
    { emoji: "👕", label: "Fashion & Textiles" },
    { emoji: "📱", label: "Electronics" },
    { emoji: "🏭", label: "Manufacturing" },
    { emoji: "💊", label: "Pharmaceuticals" },
    { emoji: "🏗️", label: "Construction" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
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
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.role === "assistant"
                      ? "bg-card border border-border/50"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  <div 
                    className={`text-sm whitespace-pre-wrap ${
                      message.role === "assistant" ? "prose prose-sm max-w-none" : ""
                    }`}
                    dangerouslySetInnerHTML={{ 
                      __html: message.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                    }}
                  />
                </div>
              </div>
            ))}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                  <Bot className="h-5 w-5 text-primary" />
                </div>
                <div className="bg-card border border-border/50 rounded-2xl px-4 py-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Thinking...</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        {/* Quick Options */}
        {messages.length === 1 && (
          <div className="px-4 sm:px-6 pb-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {industryOptions.map((option) => (
                <Button
                  key={option.label}
                  variant="outline"
                  size="sm"
                  className="gap-2"
                  onClick={() => {
                    setInput(option.label);
                    setTimeout(() => handleSend(), 100);
                  }}
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
          {/* Attached File Preview */}
          {attachedFile && (
            <div className="mb-3 flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 w-fit">
              <Paperclip className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-foreground">{attachedFile.name}</span>
              <button
                onClick={() => setAttachedFile(null)}
                className="p-1 hover:bg-secondary rounded"
              >
                <X className="h-3 w-3 text-muted-foreground" />
              </button>
            </div>
          )}

          <div className="flex items-end gap-3">
            {/* File Upload */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.xls,.xlsx,.csv"
              className="hidden"
            />
            <Button
              variant="outline"
              size="icon"
              className="shrink-0"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="h-4 w-4" />
            </Button>

            {/* Text Input */}
            <div className="flex-1 relative">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="pr-12"
                disabled={isLoading}
              />
            </div>

            {/* Send Button */}
            <Button
              onClick={handleSend}
              disabled={(!input.trim() && !attachedFile) || isLoading}
              className="shrink-0 bg-primary hover:bg-primary/90"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center mt-3">
            You can share text descriptions, upload PDFs, or import spreadsheets.
            <Link to="/auth" className="text-primary hover:underline ml-1">
              Sign in
            </Link>{" "}
            to save your progress.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chat;
