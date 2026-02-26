import { Card, CardContent } from '@/components/ui/card';

interface AeroSectionProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
  children: React.ReactNode;
}

export default function AeroSection({ title, imageSrc, imageAlt, imagePosition, children }: AeroSectionProps) {
  return (
    <section className="scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 pb-3 border-b-2 border-destructive inline-block">
        {title}
      </h2>
      
      <div className={`grid md:grid-cols-2 gap-8 items-start mt-8 ${imagePosition === 'right' ? 'md:grid-flow-dense' : ''}`}>
        {/* Text Content */}
        <div className={`space-y-4 ${imagePosition === 'right' ? 'md:col-start-1' : ''}`}>
          {children}
        </div>

        {/* Image */}
        <div className={imagePosition === 'right' ? 'md:col-start-2' : ''}>
          <Card className="overflow-hidden border-2 border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0">
              <img 
                src={imageSrc} 
                alt={imageAlt}
                className="w-full h-auto object-cover"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
