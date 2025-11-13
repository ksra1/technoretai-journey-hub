import { Card } from "@/components/ui/card";

export const ExecutiveSummary = () => {
  const metrics = [
    { value: "$750M", label: "Annual Revenue", sublabel: "Mid-market specialty electronics retailer" },
    { value: "85", label: "Physical Stores", sublabel: "Nationwide US presence" },
    { value: "40%", label: "E-commerce Share", sublabel: "Rapidly growing digital channel" },
    { value: "5mo", label: "Campaign Cycle", sublabel: "Current speed-to-market" },
  ];

  const challenges = [
    {
      title: "Fragmented Customer Experience",
      color: "bg-gradient-to-br from-red-50 via-white to-red-100 border-l-4 border-red-400",
      textColor: "text-gray-900",
      iconColor: "text-red-600",
      bgIcon: "",
      points: [
        "Generic website experiences for all visitors",
        "No cross-channel recognition (online customers unknown in-store)",
        "Duplicate communications across channels",
      ],
      impact: "Impact: $6-9M conversion loss, 15-20% higher churn",
      icon: "🔗",
    },
    {
      title: "Slow Marketing/Speed-to-Market",
      color: "bg-gradient-to-br from-red-100 via-white to-red-150 border-l-4 border-red-500",
      textColor: "text-gray-900",
      iconColor: "text-red-700",
      bgIcon: "",
      points: [
        "3 to 5 month campaign cycles",
        "IT bottlenecks for content changes",
        "Minimal content reuse across channels",
      ],
      impact: "Impact: $15-25M annual revenue loss, $8M wasted creative budget",
      icon: "⏱️",
    },
    {
      title: "Lack of Customer Intelligence",
      color: "bg-gradient-to-br from-red-150 via-white to-red-200 border-l-4 border-red-500",
      textColor: "text-gray-900",
      iconColor: "text-red-700",
      bgIcon: "",
      points: [
        "No consolidated customer view across systems",
        "Decisions based on incomplete data",
        "Inconsistent ROI measurement",
      ],
      impact: "Impact: $12M wasted marketing spend, 25% preventable churn",
      icon: "📊",
    },
    {
      title: "Organizational Silos",
      color: "bg-gradient-to-br from-red-200 via-white to-red-250 border-l-4 border-red-600",
      textColor: "text-gray-900",
      iconColor: "text-red-800",
      bgIcon: "",
      points: [
        "Disconnected teams and systems",
        "Data locked in separate platforms",
        "Reactive IT support model",
      ],
      impact: "Impact: 35% longer project timelines, innovation stagnation",
      icon: "🏢",
    },
  ];

  return (
    <section id="summary" className="min-h-screen py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Executive Summary</h2>
          
          <div className="bg-card border-2 border-primary/20 rounded-lg p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{metric.value}</div>
                  <div className="text-lg font-semibold mb-1">{metric.label}</div>
                  <div className="text-sm text-muted-foreground">{metric.sublabel}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {challenges.map((challenge, index) => (
              <Card key={index} className={`${challenge.color} ${challenge.textColor} p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl flex-shrink-0">
                    {challenge.icon}
                  </div>
                  <h3 className="text-xl font-bold leading-tight">{challenge.title}</h3>
                </div>
                <ul className="space-y-2 mb-6">
                  {challenge.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className={`${challenge.iconColor} mt-1 font-bold`}>→</span>
                      <span className="text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-sm font-bold mt-6 pt-4 border-t border-gray-300">
                  <span className={challenge.iconColor}>{challenge.impact}</span>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center py-8">
            <p className="text-2xl font-bold text-foreground">
              These challenges unlock a $100M+ revenue opportunity.
            </p>
          </div>

          {/* Unified Profile Diagram */}
          <div className="mb-16 p-8">
            <h3 className="text-2xl font-bold mb-4 text-center">Key Challenge: Unified Customer Profile</h3>
            
            <div className="flex flex-col lg:flex-row gap-12 items-center justify-center px-4">
              {/* Right side - Profile Card (now centered) */}
              <div className="w-full lg:w-96">
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-8 border border-slate-200 dark:border-slate-700">
                  {/* Centered Heading */}
                  <div className="text-center mb-8 pb-6 border-b border-slate-200 dark:border-slate-700">
                    <span className="text-4xl mb-3 block">👤</span>
                    <h4 className="text-2xl font-bold text-slate-900 dark:text-white">Unified profile</h4>
                  </div>

                  {/* Profile Section */}
                  <div className="flex items-center gap-4 mb-8">
                    <img 
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3ClinearGradient id='redGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ef4444;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23991b1b;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='50' cy='50' r='50' fill='url(%23redGrad)'/%3E%3Ccircle cx='50' cy='32' r='15' fill='%23ffffff'/%3E%3Cpath d='M 30 55 Q 30 70 50 80 Q 70 70 70 55' fill='%23ffffff'/%3E%3C/svg%3E"
                      alt="John"
                      className="w-16 h-16 rounded-full flex-shrink-0 shadow-md"
                    />
                    <h5 className="text-2xl font-bold text-slate-900 dark:text-white">John Doe</h5>
                  </div>

                  {/* Two Column Layout */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {/* Email */}
                    <div>
                      <p className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Email</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 break-words">john.doe@gmail.com</p>
                    </div>
                    {/* Accessed support */}
                    <div>
                      <p className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Accessed support</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">06/07/24</p>
                    </div>
                  </div>

                  {/* Full width fields */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Phone</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">+1 (555) 987-6543</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Login ID</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-mono">johndoe</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-0.5">ECID</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">(Experience Cloud ID - Adobe)</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-mono break-all">8029969881209...</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-0.5">UUID</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">(Universal Unique ID - Internal)</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-mono break-all">550e8400-e29b-41d4-a716....</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">CRM ID</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-mono">60013ABC</p>
                    </div>
                  </div>

                  {/* Social icons */}
                  <div className="flex justify-center gap-4 pt-6 border-t border-slate-200 dark:border-slate-700">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%234285F4'%3E%3Ccircle cx='12' cy='12' r='12'/%3E%3C/svg%3E" alt="Google" className="w-8 h-8" />
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%230084F3'%3E%3Ccircle cx='12' cy='12' r='12'/%3E%3C/svg%3E" alt="Meta" className="w-8 h-8" />
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23000000'%3E%3Ccircle cx='12' cy='12' r='12'/%3E%3C/svg%3E" alt="TikTok" className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-slate-600 dark:text-slate-400 text-sm mt-8">
              Multiple data sources unified into a single customer profile for personalization
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
