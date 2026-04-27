import { createFileRoute } from "@tanstack/react-router";
import AeroSection from "../components/AeroSection";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      {/* Hero Introduction */}
      <section className="mb-16 text-center">
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Formula 1 cars are engineering marvels that harness aerodynamic
          principles to achieve incredible performance. Understanding the
          science behind downforce, drag, and wing design reveals how these
          machines defy physics at speeds exceeding 200 mph.
        </p>
        <p className="text-sm text-muted-foreground mt-4 italic">
          Click any topic below to explore in depth →
        </p>
      </section>

      {/* Aerodynamics Sections */}
      <div className="space-y-20">
        <AeroSection
          title="Downforce"
          imageSrc="/assets/generated/f1-downforce-diagram.dim_800x600.png"
          imageAlt="F1 Downforce Diagram"
          imagePosition="left"
          to="/downforce"
        >
          <p className="text-foreground/90 leading-relaxed mb-4">
            Downforce is the aerodynamic force that pushes an F1 car down onto
            the track, dramatically increasing grip and cornering speeds.
            Generated primarily by the front and rear wings, floor, and
            diffuser, downforce allows drivers to take corners at speeds that
            would otherwise be impossible.
          </p>
          <p className="text-foreground/90 leading-relaxed">
            Modern F1 cars can generate up to 5 times their own weight in
            downforce at high speeds. The challenge is balancing maximum
            downforce with minimal drag to optimize both cornering and
            straight-line speed.
          </p>
        </AeroSection>

        <AeroSection
          title="Drag"
          imageSrc="/assets/generated/f1-drag-airflow.dim_800x600.png"
          imageAlt="F1 Drag and Airflow Diagram"
          imagePosition="right"
          to="/drag"
        >
          <p className="text-foreground/90 leading-relaxed mb-4">
            Aerodynamic drag is the resistance force that opposes an F1 car's
            motion through the air. While downforce is essential for cornering,
            it comes at the cost of increased drag, which reduces top speed and
            acceleration.
          </p>
          <p className="text-foreground/90 leading-relaxed">
            Engineers use sophisticated CFD and wind tunnel testing to minimize
            drag while maintaining necessary downforce. The DRS system allows
            drivers to reduce drag on straights, providing a significant speed
            advantage for overtaking.
          </p>
        </AeroSection>

        <AeroSection
          title="Wings"
          imageSrc="/assets/generated/f1-wings-diagram.dim_800x600.png"
          imageAlt="F1 Front and Rear Wings Diagram"
          imagePosition="left"
          to="/wings"
        >
          <p className="text-foreground/90 leading-relaxed mb-4">
            The front and rear wings are the most visible aerodynamic elements
            on an F1 car, each serving distinct but complementary purposes. The
            front wing generates downforce for the front axle and conditions
            airflow for the rest of the car.
          </p>
          <p className="text-foreground/90 leading-relaxed">
            Teams adjust wing angles throughout a race weekend to suit different
            track characteristics — high downforce for Monaco's tight corners,
            low drag for Monza's long straights.
          </p>
        </AeroSection>
      </div>
    </div>
  );
}
