import { Card } from "@/components/ui/card";

export const ResourcePlan = () => {
  const resources = [
    {
      role: "Solution Architect",
      count: 1,
      responsibilities: "Overall architecture design, integration strategy, technical leadership",
      reportingTo: "Program Manager",
      commitment: "Full-time (All Phases)",
    },
    {
      role: "Technical Consultants",
      count: 3,
      responsibilities: "CDP/AJO/AEM implementation, SDK deployment, platform configuration",
      reportingTo: "Solution Architect",
      commitment: "Full-time (Phases 2-4)",
    },
    {
      role: "Data Engineers",
      count: 2,
      responsibilities: "Data ingestion, profile unification, API integrations, data governance",
      reportingTo: "Solution Architect",
      commitment: "Full-time (Phases 2-4)",
    },
    {
      role: "Frontend Developers",
      count: 2,
      responsibilities: "AEM template development, Target personalization, SDK integration",
      reportingTo: "Solution Architect",
      commitment: "Full-time (Phases 3-4)",
    },
    {
      role: "Change Management Lead",
      count: 1,
      responsibilities: "Governance setup, training programs, stakeholder communication",
      reportingTo: "Program Manager",
      commitment: "Part-time (All Phases)",
    },
    {
      role: "QA/Testing Engineer",
      count: 1,
      responsibilities: "End-to-end testing, user acceptance testing, quality assurance",
      reportingTo: "Solution Architect",
      commitment: "Full-time (Phases 3-4)",
    },
    {
      role: "Program Manager",
      count: 1,
      responsibilities: "Project oversight, timeline management, executive reporting, risk management",
      reportingTo: "Client Executive Sponsor",
      commitment: "Full-time (All phases)",
    },
  ];

  const reportingStructure = [
    {
      role: "Client Executive Sponsor (CMO/CIO)",
      level: 0,
      children: ["Program Manager"]
    },
    {
      role: "Program Manager",
      level: 1,
      children: ["Solution Architect", "Change Management Lead"]
    },
    {
      role: "Solution Architect",
      level: 2,
      children: ["Technical Consultants (3)", "Data Engineers (2)", "Frontend Developers (2)", "QA/Testing Engineer"]
    },
    {
      role: "Change Management Lead",
      level: 2,
      children: []
    },
    {
      role: "Technical Consultants (3)",
      level: 3,
      children: []
    },
    {
      role: "Data Engineers (2)",
      level: 3,
      children: []
    },
    {
      role: "Frontend Developers (2)",
      level: 3,
      children: []
    },
    {
      role: "QA/Testing Engineer",
      level: 3,
      children: []
    },
  ];

  return (
    <section id="resources" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Resource Plan</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Team structure and resource allocation for successful implementation
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Resource Requirements</h3>
              <div className="space-y-4">
                {resources.map((resource, index) => (
                  <Card key={index} className="p-5 shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="text-lg font-bold text-primary">{resource.role}</h4>
                        <p className="text-sm text-muted-foreground">Count: {resource.count}</p>
                      </div>
                      <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {resource.commitment}
                      </span>
                    </div>
                    <p className="text-sm text-foreground mb-2">{resource.responsibilities}</p>
                    <p className="text-xs text-muted-foreground">
                      <span className="font-semibold">Reports to:</span> {resource.reportingTo}
                    </p>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Reporting Structure</h3>
              <Card className="p-8 shadow-lg">
                <div className="flex flex-col items-center gap-8">
                  {/* Level 1: Executive Sponsor */}
                  <div className="border-2 border-red-500 rounded-lg px-8 py-4 bg-red-50 text-center w-72">
                    <p className="font-bold text-base">Client Executive Sponsor</p>
                    <p className="text-xs text-muted-foreground">(CMO/CIO)</p>
                  </div>
                  
                  {/* Connector */}
                  <div className="w-1 h-8 bg-red-500" />

                  {/* Level 2: Program Manager */}
                  <div className="border-2 border-red-400 rounded-lg px-8 py-4 bg-red-50/80 text-center w-72">
                    <p className="font-bold text-base">Program Manager</p>
                  </div>

                  {/* Connector */}
                  <div className="w-1 h-8 bg-red-400" />

                  {/* Level 3: Solution Architect & Change Mgmt - with horizontal connector */}
                  <div className="relative w-full flex justify-center items-start gap-24">
                    {/* Horizontal line and vertical drops */}
                    <div className="absolute top-0 left-1/4 right-1/4 h-1 bg-red-300" />
                    <div className="absolute top-0 left-1/4 w-1 h-8 bg-red-300" />
                    <div className="absolute top-0 right-1/4 w-1 h-8 bg-red-300" />

                    <div className="border-2 border-red-300 rounded-lg px-6 py-3 bg-red-50/60 text-center w-56">
                      <p className="font-semibold text-sm">Solution Architect</p>
                    </div>
                    <div className="border-2 border-red-300 rounded-lg px-6 py-3 bg-red-50/60 text-center w-56">
                      <p className="font-semibold text-sm">Change Mgmt Lead</p>
                    </div>
                  </div>

                  {/* Connector from Solution Architect */}
                  <div className="ml-0 w-1 h-8 bg-red-300" />

                  {/* Level 4: Implementation Team */}
                  <div className="space-y-2 border-l-2 border-red-300 pl-6">
                    <div className="border border-gray-300 rounded px-4 py-2 bg-gray-50 text-sm">Technical Consultants (3)</div>
                    <div className="border border-gray-300 rounded px-4 py-2 bg-gray-50 text-sm">Data Engineers (2)</div>
                    <div className="border border-gray-300 rounded px-4 py-2 bg-gray-50 text-sm">Frontend Developers (2)</div>
                    <div className="border border-gray-300 rounded px-4 py-2 bg-gray-50 text-sm">QA/Testing Engineer</div>
                  </div>
                </div>
              </Card>

              <Card className="mt-6 p-6 bg-primary/10 border-2 border-primary">
                <h4 className="font-bold text-xl mb-4 text-primary">Total Team Size</h4>
                <div className="grid grid-cols-1 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold text-primary">13</div>
                    <div className="text-sm text-foreground font-medium">Total Resources</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <Card className="p-6 bg-primary/5 border-primary/20">
            <h3 className="text-xl font-bold mb-4">Key Success Factors</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <div>
                  <h4 className="font-semibold mb-1">Executive Sponsorship</h4>
                  <p className="text-sm text-muted-foreground">
                    Active engagement from C-level sponsor for strategic decisions and resource allocation
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <div>
                  <h4 className="font-semibold mb-1">Cross-Functional Collaboration</h4>
                  <p className="text-sm text-muted-foreground">
                    Marketing, IT, and data teams working together with clear communication channels
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <div>
                  <h4 className="font-semibold mb-1">Agile Methodology</h4>
                  <p className="text-sm text-muted-foreground">
                    Iterative approach with regular checkpoints and flexibility to adapt based on learnings
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
