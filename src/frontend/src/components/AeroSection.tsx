import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

interface AeroSectionProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: "left" | "right";
  children: React.ReactNode;
  to?: string;
}

export default function AeroSection({
  title,
  imageSrc,
  imageAlt,
  imagePosition,
  children,
  to,
}: AeroSectionProps) {
  const card = (
    <Card
      className={`overflow-hidden border-2 transition-all duration-300 ${to ? "hover:border-destructive hover:shadow-xl hover:shadow-destructive/10" : "border-border"} bg-card`}
    >
      <CardContent className="p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground pb-3 border-b-2 border-destructive inline-block">
            {title}
          </h2>
          {to && (
            <span className="flex items-center gap-1 text-sm font-medium text-destructive opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Explore <ArrowRight className="w-4 h-4" />
            </span>
          )}
        </div>

        <div
          className={`grid md:grid-cols-2 gap-8 items-start ${imagePosition === "right" ? "md:grid-flow-dense" : ""}`}
        >
          {/* Text Content */}
          <div
            className={`space-y-4 ${imagePosition === "right" ? "md:col-start-1" : ""}`}
          >
            {children}
          </div>

          {/* Image */}
          <div className={imagePosition === "right" ? "md:col-start-2" : ""}>
            <div className="overflow-hidden rounded-lg border border-border shadow-md">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  if (to) {
    return (
      <section className="scroll-mt-20 group">
        <Link
          to={to}
          className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-destructive rounded-lg"
        >
          {card}
        </Link>
      </section>
    );
  }

  return <section className="scroll-mt-20">{card}</section>;
}
