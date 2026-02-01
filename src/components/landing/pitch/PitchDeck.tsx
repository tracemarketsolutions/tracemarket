import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import all slides
import TitleSlide from "./slides/TitleSlide";
import BackgroundSlide from "./slides/BackgroundSlide";
import ProblemSlide from "./slides/ProblemSlide";
import RealizationSlide from "./slides/RealizationSlide";
import SolutionSlide from "./slides/SolutionSlide";
import ValueAddSlide from "./slides/ValueAddSlide";
import BusinessModelSlide from "./slides/BusinessModelSlide";
import ImpactSlide from "./slides/ImpactSlide";
import JourneySlide from "./slides/JourneySlide";
import QuestionsSlide from "./slides/QuestionsSlide";
import TeamSlide from "./slides/TeamSlide";
import FinancesSlide from "./slides/FinancesSlide";

const PitchDeck = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const totalSlides = 12;

  const scrollToDirection = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const slideWidth = container.scrollWidth / totalSlides;
    const scrollAmount = direction === "left" ? -slideWidth : slideWidth;
    
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
        <Button
          variant="outline"
          size="icon"
          onClick={() => scrollToDirection("left")}
          className="rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      </div>
      
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
        <Button
          variant="outline"
          size="icon"
          onClick={() => scrollToDirection("right")}
          className="rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 px-[5vw] scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <TitleSlide slideNumber={1} totalSlides={totalSlides} />
        <BackgroundSlide slideNumber={2} totalSlides={totalSlides} />
        <ProblemSlide slideNumber={3} totalSlides={totalSlides} />
        <RealizationSlide slideNumber={4} totalSlides={totalSlides} />
        <SolutionSlide slideNumber={5} totalSlides={totalSlides} />
        <ValueAddSlide slideNumber={6} totalSlides={totalSlides} />
        <BusinessModelSlide slideNumber={7} totalSlides={totalSlides} />
        <ImpactSlide slideNumber={8} totalSlides={totalSlides} />
        <JourneySlide slideNumber={9} totalSlides={totalSlides} />
        <QuestionsSlide slideNumber={10} totalSlides={totalSlides} />
        <TeamSlide slideNumber={11} totalSlides={totalSlides} />
        <FinancesSlide slideNumber={12} totalSlides={totalSlides} />
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        <p className="text-sm text-muted-foreground">
          Swipe or use arrows to navigate • {totalSlides} slides
        </p>
      </div>
    </div>
  );
};

export default PitchDeck;
