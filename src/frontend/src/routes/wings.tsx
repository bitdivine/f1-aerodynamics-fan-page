import { createFileRoute } from "@tanstack/react-router";
import TopicDetail from "../components/TopicDetail";

export const Route = createFileRoute("/wings")({
  component: WingsPage,
});

function WingsPage() {
  return (
    <TopicDetail
      title="Wings"
      imageSrc="/assets/generated/f1-wings-diagram.dim_800x600.png"
      imageAlt="F1 Front and Rear Wings Diagram"
    >
      <p>
        Wings are the most iconic aerodynamic elements on a Formula 1 car —
        highly visible, aggressively styled, and absolutely critical to
        performance. Both the front and rear wings work as inverted aerofoils:
        their curved profiles generate low pressure above and high pressure
        below, producing the downforce that defines F1 handling.
      </p>
      <p>
        The <strong>front wing</strong> is the first point of contact with
        undisturbed air, making it the most sensitive aerodynamic component. It
        generates roughly 25–30% of the car's total downforce while
        simultaneously conditioning the airflow for every other aerodynamic
        element downstream. Multi-element front wings feature several flaps
        stacked at precise angles, with endplates that sculpt airflow around the
        front tyres — one of the single largest sources of turbulence and drag
        on the car.
      </p>
      <p>
        The <strong>rear wing</strong> is the dominant downforce generator,
        typically producing 35–40% of the car's total downforce. It sits high
        above the car to access clean, undisturbed air and consists of a main
        plane and an adjustable upper flap. The upper flap's angle is set by
        engineers before the race for the required downforce level and doubles
        as the DRS flap, which opens on straights to reduce drag.
      </p>
      <p>
        Wing design has evolved dramatically through F1 history. The earliest
        wings in the late 1960s were simple flat plates. By the 1980s and 1990s,
        aerodynamicists were exploiting complex multi-element designs. The 2022
        regulations simplified front wing geometry and introduced large,
        simplified rear wings to reduce the turbulent wake and enable closer
        racing.
      </p>
      <p>
        Teams develop their wings continuously across a season, submitting
        updates at almost every race. A single aerodynamic upgrade can be worth
        several tenths of a second per lap. Wing stiffness, the prevention of
        flexing under load, and manufacturing precision at the sub-millimetre
        level are as important as the design itself — tiny differences in
        profile can have outsized effects at 200+ mph.
      </p>
    </TopicDetail>
  );
}
