import Header from './components/Header';
import AeroSection from './components/AeroSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          {/* Hero Introduction */}
          <section className="mb-16 text-center">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Formula 1 cars are engineering marvels that harness aerodynamic principles to achieve incredible performance. 
              Understanding the science behind downforce, drag, and wing design reveals how these machines defy physics at speeds exceeding 200 mph.
            </p>
          </section>

          {/* Aerodynamics Sections */}
          <div className="space-y-20">
            <AeroSection
              title="Downforce"
              imageSrc="/assets/generated/f1-downforce-diagram.dim_800x600.png"
              imageAlt="F1 Downforce Diagram"
              imagePosition="left"
            >
              <p className="text-foreground/90 leading-relaxed mb-4">
                Downforce is the aerodynamic force that pushes an F1 car down onto the track, dramatically increasing grip and cornering speeds. 
                Generated primarily by the front and rear wings, floor, and diffuser, downforce allows drivers to take corners at speeds that would 
                otherwise be impossible.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                Modern F1 cars can generate up to 5 times their own weight in downforce at high speeds. This means a car weighing 798kg can produce 
                nearly 4,000kg of downward pressure, effectively "gluing" it to the track. The challenge is balancing maximum downforce with minimal drag 
                to optimize both cornering and straight-line speed.
              </p>
            </AeroSection>

            <AeroSection
              title="Drag"
              imageSrc="/assets/generated/f1-drag-airflow.dim_800x600.png"
              imageAlt="F1 Drag and Airflow Diagram"
              imagePosition="right"
            >
              <p className="text-foreground/90 leading-relaxed mb-4">
                Aerodynamic drag is the resistance force that opposes an F1 car's motion through the air. While downforce is essential for cornering, 
                it comes at the cost of increased drag, which reduces top speed and acceleration. Teams must find the optimal balance between these 
                competing forces for each circuit.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                Engineers use sophisticated computational fluid dynamics (CFD) and wind tunnel testing to minimize drag while maintaining necessary 
                downforce. The DRS (Drag Reduction System) allows drivers to reduce drag on straights by adjusting the rear wing angle, providing 
                a significant speed advantage for overtaking. Managing airflow efficiently is crucial for both performance and fuel efficiency.
              </p>
            </AeroSection>

            <AeroSection
              title="Wings"
              imageSrc="/assets/generated/f1-wings-diagram.dim_800x600.png"
              imageAlt="F1 Front and Rear Wings Diagram"
              imagePosition="left"
            >
              <p className="text-foreground/90 leading-relaxed mb-4">
                The front and rear wings are the most visible aerodynamic elements on an F1 car, each serving distinct but complementary purposes. 
                The front wing generates downforce for the front axle and conditions airflow for the rest of the car, while the rear wing provides 
                massive downforce for the rear axle and creates drag for braking stability.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                Front wings feature multiple elements and endplates that direct airflow around the wheels and under the car. Rear wings use adjustable 
                flaps and are designed to work in harmony with the diffuser to maximize downforce. Teams adjust wing angles throughout a race weekend 
                to suit different track characteristics—high downforce for Monaco's tight corners, low drag for Monza's long straights.
              </p>
            </AeroSection>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
