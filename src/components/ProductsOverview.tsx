import { Card } from "@/components/ui/card";

export const ProductsOverview = () => {
  const productCategories = [
    {
      category: "Content",
      color: "bg-gradient-to-r from-red-600 to-red-700",
      textColor: "#DC2626",
      gradientFrom: "#DC2626",
      gradientTo: "#B91C1C",
      products: [
        {
          name: "AEM",
          purpose: "Manages/delivers digital content and assets for web and mobile. Use for centralized brand asset and content management/delivery.",
          connects: "Website Access, Target, CDP",
          how: "Offers RESTful Content Delivery APIs for websites/apps; integrates with Target for real-time personalized experience delivery.",
          why: "Centralizes content and assets so they can be personalized and delivered consistently across channels and AMP solutions.",
        },
      ],
    },
    {
      category: "Data Insights & Audiences",
      color: "bg-gradient-to-r from-red-500 to-red-600",
      textColor: "#EF4444",
      gradientFrom: "#EF4444",
      gradientTo: "#DC2626",
      products: [
        {
          name: "Adobe Analytics",
          purpose: "Collects and analyzes site/app user behavioral data. Use for user behavior insights and campaign/channel performance.",
          connects: "CJA, CDP, BI/Dashboard Tools (ex: Tableau, Qlik Sense)",
          how: "Collects event data through tags and SDKs; provides feeds and APIs to send data into CJA and enrich CDP profiles.",
          why: "Measures, analyzes digital touchpoints to inform personalization, optimize campaigns, and provide journey attribution.",
        },
        {
          name: "CJA",
          purpose: "Delivers real-time, cross-channel customer journey analytics and reporting. Use for unified journey KPIs.",
          connects: "Adobe Analytics, CDP, BI/Dashboard Tools (ex: Tableau, Qlik Sense)",
          how: "Pulls event, behavioral, and profile data from Analytics and CDP APIs; aggregates them to support dashboards and journey analysis tools.",
          why: "Provides holistic insights by unifying disparate channel and behavioral data for informed executive and operational decisions.",
        },
        {
          name: "CDP",
          purpose: "Centralizes and unifies customer/event data. Use for building profiles and segments powering personalization and analytics.",
          connects: "AJO, AEM, Target, Adobe Analytics, CJA, Campaign",
          how: "Uses RESTful and streaming APIs to ingest real-time and batch data from sources, and exposes unified segments/profiles to downstream tools via APIs and data sync.",
          why: "Enables unified customer data foundation ensuring all downstream tools have consistent, updated segments and profiles.",
        },
      ],
    },
    {
      category: "Customer Journeys",
      color: "bg-gradient-to-r from-red-700 to-red-800",
      textColor: "#B91C1C",
      gradientFrom: "#B91C1C",
      gradientTo: "#7F1D1D",
      products: [
        {
          name: "Target",
          purpose: "Personalizes and optimizes web/app experiences via A/B and multivariate tests. Use for digital experience optimization.",
          connects: "Website Access, AEM, CDP, AJO",
          how: "Uses client SDKs and REST APIs to retrieve user segments and personalization context, applies content provided by AEM, and integrates journey triggers from AJO.",
          why: "Enables highly personalized, real-time onsite experiences to improve engagement and conversion.",
        },
        {
          name: "Campaign",
          purpose: "Manages batch, scheduled, multi-channel campaigns including offline. Use for high-volume batch emails, campaigns, and legacy workflows.",
          connects: "AJO, CDP, Email/SMS/Push, CRM, POS, Service",
          how: "Integrates with CDP for batch segments; triggered by AJO for transactional messages; uses messaging APIs to send via channels; syncs with CRM and POS.",
          why: "Handles large batch/legacy campaign requirements and offline channel messaging where AJO may not scale or provide legacy support.",
        },
        {
          name: "AJO",
          purpose: "Orchestrates real-time, event-driven, omni-channel personalized journeys. Use for most digital campaigns except large bulk email batches.",
          connects: "CDP, Campaign, Target, Email/SMS/Push, CRM, POS, Service, Marketing Automation",
          how: "Uses APIs to fetch audience segments, trigger transactional/real-time messages, and deliver content to channels via SDKs and endpoints; triggers Campaign via APIs for bulk sends.",
          why: "Provides scalable, fast journey orchestration and personalization; leverages Campaign for large-scale batch/offline sends.",
        },
      ],
    },
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="px-4 md:px-8 lg:px-12 mb-16">
        <h2 className="text-4xl font-bold text-center mb-4">Adobe Experience Cloud Products</h2>
        <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto">
          Integrated solutions working together for content management, data insights, and intelligent customer journeys
        </p>
      </div>

      {/* All categories and products */}
      <div className="px-4 overflow-x-auto">
        <div style={{ 
          display: 'flex',
          gap: '1.5rem',
          justifyContent: 'center',
          flexWrap: 'nowrap',
          minWidth: 'min-content'
        }}>
          {productCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} style={{ 
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              flex: '0 0 auto'
            }}>
              {/* Category Header */}
              <div className={`${category.color} py-3 px-6 rounded-lg shadow-md text-center`}>
                <h3 className="text-base font-bold text-white">{category.category}</h3>
              </div>
              
              {/* Products for this category */}
              <div style={{ 
                display: 'flex',
                flexDirection: 'row',
                gap: '1rem'
              }}>
                {category.products.map((product, productIndex) => (
                  <div
                    key={productIndex}
                    className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4"
                    style={{ 
                      borderLeftColor: category.textColor, 
                      width: '250px',
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '1rem',
                      background: `linear-gradient(135deg, ${category.gradientFrom}08 0%, ${category.gradientTo}04 100%)`
                    }}
                  >
                    {/* Product name */}
                    <h4 className="font-bold text-lg mb-3" style={{ color: category.textColor, height: '28px' }}>
                      {product.name}
                    </h4>

                    {/* Purpose - Fixed height */}
                    <div style={{ height: '150px', marginBottom: '1.125rem', display: 'flex', flexDirection: 'column' }}>
                      <p className="font-semibold text-slate-700 mb-1 text-sm">Purpose:</p>
                      <p className="text-slate-600 text-sm leading-snug flex-1">{product.purpose}</p>
                    </div>

                    {/* Connects To - Fixed height */}
                    <div style={{ height: '140px', marginBottom: '0.125rem', display: 'flex', flexDirection: 'column' }}>
                      <p className="font-semibold text-slate-700 mb-1 text-sm">Connects To:</p>
                      <p className="text-slate-600 text-sm leading-snug flex-1">{product.connects}</p>
                    </div>

                    {/* How - Fixed height */}
                    <div style={{ height: '160px', marginBottom: '0.75rem', display: 'flex', flexDirection: 'column' }}>
                      <p className="font-semibold text-slate-700 mb-1 text-sm">How:</p>
                      <p className="text-slate-600 text-sm leading-snug flex-1">{product.how}</p>
                    </div>

                    {/* Why - Fixed height */}
                    <div style={{ height: '160px', display: 'flex', flexDirection: 'column' }}>
                      <p className="font-semibold text-slate-700 mb-1 text-sm">Why:</p>
                      <p className="text-slate-600 text-sm leading-snug flex-1">{product.why}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
