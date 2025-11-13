import { Card } from "@/components/ui/card";
import architectureDiagram from "@/assets/architecture-diagram.png";

export const ArchitectureSection = () => {
  return (
    <section id="architecture" className="min-h-screen py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="mx-auto px-4 w-full">
        <div className="max-w-full mx-auto">
          {/* Architecture Diagram */}
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-center mb-4">Proposed Architecture</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              High-level architecture showing data flow and system integration
            </p>
            <div className="w-full flex justify-center">
              <div style={{ width: '90%' }}>
                <img
                  src={architectureDiagram}
                  alt="Adobe Experience Platform Architecture Diagram"
                  className="w-full h-auto shadow-lg rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
