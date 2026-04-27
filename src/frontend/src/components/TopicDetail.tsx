import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

interface TopicDetailProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  children: React.ReactNode;
}

export default function TopicDetail({
  title,
  imageSrc,
  imageAlt,
  children,
}: TopicDetailProps) {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Back + Title */}
      <div className="mb-8">
        <Button
          asChild
          variant="ghost"
          className="mb-6 -ml-2 text-muted-foreground hover:text-foreground"
          data-ocid="back-home-btn"
        >
          <Link to="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </Button>

        <h2 className="text-4xl md:text-5xl font-bold text-foreground pb-4 border-b-4 border-destructive inline-block">
          {title}
        </h2>
      </div>

      {/* Full-width Diagram */}
      <div className="mb-12 rounded-xl overflow-hidden border-2 border-border shadow-xl">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Expanded Description */}
      <div className="prose-like space-y-5 text-foreground/90 leading-relaxed text-base md:text-lg">
        {children}
      </div>

      {/* Bottom back link */}
      <div className="mt-16 pt-8 border-t border-border">
        <Button
          asChild
          variant="outline"
          className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground transition-colors"
        >
          <Link to="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Topics
          </Link>
        </Button>
      </div>
    </div>
  );
}
