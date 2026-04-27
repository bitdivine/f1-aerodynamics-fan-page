import { createFileRoute } from "@tanstack/react-router";
import TopicDetail from "../components/TopicDetail";

export const Route = createFileRoute("/drag")({
  component: DragPage,
});

function DragPage() {
  return (
    <TopicDetail
      title="Drag"
      imageSrc="/assets/generated/f1-drag-airflow.dim_800x600.png"
      imageAlt="F1 Drag and Airflow Diagram"
    >
      <p>
        Aerodynamic drag is the resistive force that opposes an F1 car's forward
        motion through the air. It is the unavoidable cost of generating
        downforce: wings that push the car down also push back against forward
        movement. Understanding and minimising drag is one of the most critical
        challenges in F1 aerodynamic design.
      </p>
      <p>
        Drag arises from two main sources. <strong>Pressure drag</strong> is
        created by the difference in air pressure between the front and rear of
        the car — high pressure at the front stagnation point, low pressure in
        the turbulent wake behind the car. <strong>Friction drag</strong> comes
        from the viscosity of air flowing over the car's surfaces. In F1,
        pressure drag dominates and is primarily determined by the car's
        cross-sectional area and shape.
      </p>
      <p>
        Teams combat drag through meticulous shaping of every surface. The car's
        bodywork features carefully sculpted sidepods, smooth underfloors, and
        tightly packaged rear ends to minimise the turbulent wake. Bargeboards
        and vanes redirect airflow around high-drag areas like the wheels, which
        alone account for a significant portion of total drag due to their
        exposed, rotating nature.
      </p>
      <p>
        The Drag Reduction System (DRS), introduced in 2011, gives drivers a
        regulated way to temporarily reduce drag during races. When activated in
        designated DRS zones on straights, the upper flap of the rear wing opens
        by up to 50mm, reducing drag by around 10–15 drag counts and adding
        roughly 10–12 km/h of top speed — enough to set up or defend an
        overtake.
      </p>
      <p>
        Computational Fluid Dynamics (CFD) and wind tunnel testing are the
        primary tools for drag optimisation. Teams run thousands of CFD
        simulations per week, analysing airflow visualisations to identify
        separation points, vortex structures, and wake profiles. Every
        aerodynamic update submitted through the season must demonstrate a net
        gain in the downforce-to-drag ratio.
      </p>
    </TopicDetail>
  );
}
