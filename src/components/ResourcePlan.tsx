import { Card } from "@/components/ui/card";

export const ResourcePlan = () => {
  const resources = [
    {
      role: "Program Manager",
      count: 1,
      responsibilities: "Project oversight, timeline management, executive reporting, risk management",
      reportingTo: "Client Executive Sponsor",
      commitment: "Full-time (All phases)",
    },
    {
      role: "Solution Architect",
      count: 1,
      responsibilities: "Overall architecture design, integration strategy, technical leadership, platform configuration",
      reportingTo: "Program Manager",
      commitment: "Full-time (All Phases)",
    },
    {
      role: "Change Management Lead",
      count: 1,
      responsibilities: "Governance setup, training programs, stakeholder communication, organizational alignment",
      reportingTo: "Program Manager",
      commitment: "Full-time (All Phases)",
    },
    {
      role: "Data Architects",
      count: 1,
      responsibilities: "Data modeling, schema design, data governance policies, merge rules, compliance framework",
      reportingTo: "Solution Architect",
      commitment: "Full-time (Phases 1-3)",
    },
    {
      role: "Data Engineers",
      count: 2,
      responsibilities: "Configure data sources, create datasets, API configuration, data ingestion pipelines, Monitoring Services",
      reportingTo: "Solution Architect",
      commitment: "Full-time (Phases 2-4)",
    },
    {
      role: "Data Pipeline Engineer",
      count: 1,
      responsibilities: "Real-time data orchestration, streaming configuration, event streaming setup, data flow automation",
      reportingTo: "Solution Architect",
      commitment: "Full-time (Phases 2-3)",
    },
    {
      role: "AEM Developers",
      count: 2,
      responsibilities: "AEM website development, personalization rules, template creation, content delivery optimization",
      reportingTo: "Solution Architect",
      commitment: "Full-time (Phases 3-4)",
    },
    {
      role: "Journey Optimizer & Target Engineer",
      count: 1,
      responsibilities: "AJO campaign orchestration, email/SMS/push/in-app setup, journey builder configuration, Target A/B testing, personalization rules, analytics integration",
      reportingTo: "Solution Architect",
      commitment: "Full-time (Phases 2-4)",
    },
    {
      role: "Frontend Developers",
      count: 2,
      responsibilities: "Web application development, SDK integration, performance optimization, responsive design",
      reportingTo: "Solution Architect",
      commitment: "Full-time (Phases 3-4)",
    },
    {
      role: "Data Analysts & Marketers",
      count: 2,
      responsibilities: "Manage customer profiles, create audiences, campaign management, develop use cases, analytics",
      reportingTo: "Program Manager",
      commitment: "Full-time (Phases 2-4)",
    },
    {
      role: "Data Stewards",
      count: 1,
      responsibilities: "Data quality management, policy validation, governance compliance, data lifecycle management",
      reportingTo: "Solution Architect",
      commitment: "Part-time (All Phases)",
    },
    {
      role: "QA/Testing Engineer",
      count: 1,
      responsibilities: "End-to-end testing, user acceptance testing, quality assurance, performance validation",
      reportingTo: "Solution Architect",
      commitment: "Full-time (Phases 3-4)",
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
      children: ["Solution Architect", "Change Management Lead", "Data Analysts & Marketers (2)"]
    },
    {
      role: "Solution Architect",
      level: 2,
      children: ["Data Architects (1)", "Data Engineers (2)", "Data Pipeline Engineer", "AEM Developers (2)", "Journey Optimizer & Target Engineer", "Frontend Developers (2)", "Data Stewards", "QA/Testing Engineer"]
    },
    {
      role: "Change Management Lead",
      level: 2,
      children: []
    },
    {
      role: "Data Analysts & Marketers (2)",
      level: 2,
      children: []
    },
    {
      role: "Data Architects (1)",
      level: 3,
      children: []
    },
    {
      role: "Data Engineers (2)",
      level: 3,
      children: []
    },
    {
      role: "Data Pipeline Engineer",
      level: 3,
      children: []
    },
    {
      role: "AEM Developers (2)",
      level: 3,
      children: []
    },
    {
      role: "Journey Optimizer & Target Engineer",
      level: 3,
      children: []
    },
    {
      role: "Frontend Developers (2)",
      level: 3,
      children: []
    },
    {
      role: "Data Stewards",
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
              <Card className="p-8 bg-gradient-to-br from-red-50 via-white to-red-50 border-2 border-red-200 shadow-lg mt-12">
                <h4 className="font-bold text-xl mb-2 text-red-800">Resources by Phase</h4>
                <p className="text-sm text-red-600 mb-6">Resource allocation across 4-phase implementation timeline. Note: With parallel execution of tasks, Phases 1-3 total 6 months (Jan 13 - Jul 14, 2026)</p>

                <div className="space-y-4">
                  {/* Legend */}
                  <div className="flex gap-6 mb-8 text-sm bg-white rounded-lg p-4 border border-red-150">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-red-400 rounded"></div>
                      <span className="font-semibold text-red-800">Full-time</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-red-200 rounded"></div>
                      <span className="font-semibold text-red-800">Part-time</span>
                    </div>
                  </div>

                  {/* Phase labels */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-48"></div>
                    <div className="flex-1 flex justify-between text-xs font-bold text-red-800 bg-white rounded-lg p-3 border border-red-150">
                      <span>Phase 1</span>
                      <span>Phase 2</span>
                      <span>Phase 3</span>
                      <span>Phase 4</span>
                    </div>
                  </div>

                  {/* Gantt Chart */}
                  <div className="space-y-3 bg-white rounded-lg p-6 border border-red-150">
                    {/* Program Manager */}
                    <div className="flex items-center gap-2">
                      <div className="w-48 text-sm font-semibold text-slate-900">Program Manager (1)</div>
                      <div className="flex-1 relative h-8 bg-gray-100 rounded">
                        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-red-400 to-red-300 rounded flex items-center justify-center text-xs font-bold text-white">All Phases</div>
                      </div>
                    </div>

                    {/* Solution Architect */}
                    <div className="flex items-center gap-2">
                      <div className="w-48 text-sm font-semibold text-slate-900">Solution Architect (1)</div>
                      <div className="flex-1 relative h-8 bg-gray-100 rounded">
                        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-red-400 to-red-300 rounded flex items-center justify-center text-xs font-bold text-white">All Phases</div>
                      </div>
                    </div>

                    {/* Change Management Lead */}
                    <div className="flex items-center gap-2">
                      <div className="w-48 text-sm font-semibold text-slate-900">Change Mgmt Lead (1)</div>
                      <div className="flex-1 relative h-8 bg-gray-100 rounded">
                        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-red-400 to-red-300 rounded flex items-center justify-center text-xs font-bold text-white">All Phases</div>
                      </div>
                    </div>

                    {/* Data Analysts */}
                    <div className="flex items-center gap-2">
                      <div className="w-48 text-sm font-semibold text-slate-900">Data Analysts (2)</div>
                      <div className="flex-1 relative h-8 bg-gray-100 rounded">
                        <div className="absolute top-0 left-[25%] h-full w-[75%] bg-gradient-to-r from-red-400 to-red-300 rounded flex items-center justify-center text-xs font-bold text-white">Phases 2-4</div>
                      </div>
                    </div>

                    {/* Data Architects */}
                    <div className="flex items-center gap-2">
                      <div className="w-48 text-sm font-semibold text-slate-900">Data Architects (1)</div>
                      <div className="flex-1 relative h-8 bg-gray-100 rounded">
                        <div className="absolute top-0 left-[25%] h-full w-[50%] bg-gradient-to-r from-red-400 to-red-300 rounded flex items-center justify-center text-xs font-bold text-white">Phases 2-3</div>
                      </div>
                    </div>

                    {/* Data Engineers */}
                    <div className="flex items-center gap-2">
                      <div className="w-48 text-sm font-semibold text-slate-900">Data Engineers (2)</div>
                      <div className="flex-1 relative h-8 bg-gray-100 rounded">
                        <div className="absolute top-0 left-[25%] h-full w-[75%] bg-gradient-to-r from-red-400 to-red-300 rounded flex items-center justify-center text-xs font-bold text-white">Phases 2-4</div>
                      </div>
                    </div>

                    {/* Data Pipeline Engineer */}
                    <div className="flex items-center gap-2">
                      <div className="w-48 text-sm font-semibold text-slate-900">Data Pipeline Eng (1)</div>
                      <div className="flex-1 relative h-8 bg-gray-100 rounded">
                        <div className="absolute top-0 left-[25%] h-full w-[50%] bg-gradient-to-r from-red-400 to-red-300 rounded flex items-center justify-center text-xs font-bold text-white">Phases 2-3</div>
                      </div>
                    </div>

                    {/* AEM Developers */}
                    <div className="flex items-center gap-2">
                      <div className="w-48 text-sm font-semibold text-slate-900">AEM Developers (2)</div>
                      <div className="flex-1 relative h-8 bg-gray-100 rounded">
                        <div className="absolute top-0 left-[50%] h-full w-[50%] bg-gradient-to-r from-red-400 to-red-300 rounded flex items-center justify-center text-xs font-bold text-white">Phases 3-4</div>
                      </div>
                    </div>

                    {/* Journey Optimizer & Target */}
                    <div className="flex items-center gap-2">
                      <div className="w-48 text-sm font-semibold text-slate-900">AJO & Target Eng (1)</div>
                      <div className="flex-1 relative h-8 bg-gray-100 rounded">
                        <div className="absolute top-0 left-[25%] h-full w-[75%] bg-gradient-to-r from-red-400 to-red-300 rounded flex items-center justify-center text-xs font-bold text-white">Phases 2-4</div>
                      </div>
                    </div>

                    {/* Frontend Developers */}
                    <div className="flex items-center gap-2">
                      <div className="w-48 text-sm font-semibold text-slate-900">Frontend Developers (2)</div>
                      <div className="flex-1 relative h-8 bg-gray-100 rounded">
                        <div className="absolute top-0 left-[50%] h-full w-[50%] bg-gradient-to-r from-red-400 to-red-300 rounded flex items-center justify-center text-xs font-bold text-white">Phases 3-4</div>
                      </div>
                    </div>

                    {/* Data Stewards */}
                    <div className="flex items-center gap-2">
                      <div className="w-48 text-sm font-semibold text-slate-900">Data Stewards (1)</div>
                      <div className="flex-1 relative h-8 bg-gray-100 rounded">
                        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-red-200 to-red-100 rounded flex items-center justify-center text-xs font-bold text-red-800">All Phases (PT)</div>
                      </div>
                    </div>

                    {/* QA/Testing */}
                    <div className="flex items-center gap-2">
                      <div className="w-48 text-sm font-semibold text-slate-900">QA/Testing Eng (1)</div>
                      <div className="flex-1 relative h-8 bg-gray-100 rounded">
                        <div className="absolute top-0 left-[50%] h-full w-[50%] bg-gradient-to-r from-red-400 to-red-300 rounded flex items-center justify-center text-xs font-bold text-white">Phases 3-4</div>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="grid grid-cols-4 gap-3 mt-6">
                    <div className="text-center p-4 bg-white rounded border-2 border-red-200 shadow-md">
                      <p className="text-sm font-semibold text-red-800 mb-1">Phase 1</p>
                      <p className="text-3xl font-bold text-red-500">4</p>
                      <p className="text-xs text-red-600 mt-2">19 days</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded border-2 border-red-200 shadow-md">
                      <p className="text-sm font-semibold text-red-800 mb-1">Phase 2</p>
                      <p className="text-3xl font-bold text-red-500">12</p>
                      <p className="text-xs text-red-600 mt-2">18 days</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded border-2 border-red-200 shadow-md">
                      <p className="text-sm font-semibold text-red-800 mb-1">Phase 3</p>
                      <p className="text-3xl font-bold text-red-500">14</p>
                      <p className="text-xs text-red-600 mt-2">170 days</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded border-2 border-red-200 shadow-md">
                      <p className="text-sm font-semibold text-red-800 mb-1">Phase 4</p>
                      <p className="text-3xl font-bold text-red-500">11</p>
                      <p className="text-xs text-red-600 mt-2">60 days</p>
                    </div>
                  </div>

                  {/* Clarification Note */}
                  <div className="mt-6 p-4 bg-red-50 rounded border border-red-200">
                    <p className="text-sm text-red-700">
                      <span className="font-semibold">Timeline Note:</span> With parallel task execution across multiple workstreams, Phases 1-3 span approximately 6 months (Jan 13 - Jul 14, 2026), while Phase 4 is 3 months (Jul 27 - Sep 24, 2026).
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
