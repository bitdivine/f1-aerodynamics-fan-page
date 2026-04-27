import { createFileRoute } from "@tanstack/react-router";
import TopicDetail from "../components/TopicDetail";

export const Route = createFileRoute("/downforce")({
  component: DownforcePage,
});

function DownforcePage() {
  return (
    <TopicDetail
      title="Downforce"
      imageSrc="/assets/generated/f1-downforce-diagram.dim_800x600.png"
      imageAlt="F1 Downforce Diagram"
    >
      <p>
        Downforce is the aerodynamic force that acts perpendicular to the
        direction of travel, pushing an F1 car downward onto the track surface.
        Unlike conventional lift that aircraft use to fly, F1 cars use inverted
        wing profiles to generate this negative lift — keeping the car glued to
        the tarmac at extreme speeds.
      </p>
      <p>
        The primary sources of downforce on a modern F1 car are the front wing,
        rear wing, the underbody floor, and the diffuser. Each element works in
        concert to build and channel high-pressure air above the car while
        creating low pressure beneath it. The greater the pressure differential,
        the more downforce is produced.
      </p>
      <p>
        At speeds of around 200 mph (320 km/h), a contemporary F1 car can
        generate downforce roughly equal to 5 times its own weight —
        approximately 3,500–4,000 kg of downward pressure on a car that weighs
        just 798 kg. This is why F1 cars can corner at lateral G-forces
        exceeding 5g; the tyres are pushed so hard into the surface that the
        friction force becomes enormous.
      </p>
      <p>
        The 2022 technical regulations introduced ground effect aerodynamics,
        bringing back the underbody tunnels last seen in the early 1980s. These
        tunnels accelerate airflow beneath the car, generating huge amounts of
        downforce with less aerodynamic drag than traditional wing-based
        solutions — a fundamentally more efficient approach.
      </p>
      <p>
        The downforce-drag trade-off is central to F1 car setup. At Monaco,
        teams run maximum downforce for tight, slow corners. At Monza — the
        "Temple of Speed" — teams strip downforce to the absolute minimum to
        maximize straight-line velocity. Getting this balance right can mean the
        difference between pole position and mid-grid.
      </p>
    </TopicDetail>
  );
}
