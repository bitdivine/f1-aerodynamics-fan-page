import { Wind } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-primary via-destructive to-primary border-b-4 border-destructive shadow-lg">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center gap-3">
          <Wind
            className="w-10 h-10 text-primary-foreground"
            strokeWidth={2.5}
          />
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground tracking-tight">
            F1 Aerodynamics Explained
          </h1>
        </div>
        <p className="text-center text-primary-foreground/90 mt-3 text-sm md:text-base font-medium tracking-wide">
          The Science of Speed
        </p>
      </div>
    </header>
  );
}
