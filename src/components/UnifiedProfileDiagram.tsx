import { Card } from "@/components/ui/card";
import { Mail, Calendar } from "lucide-react";

interface DataSource {
  label: string;
}

interface ProfileData {
  name: string;
  email: string;
  accessedSupport: string;
  ecid: string;
  uuid: string;
  crmId: string;
  dataSources: DataSource[];
}

export const UnifiedProfileDiagram = () => {
  return (
    <div className="mb-16 p-8 bg-blue-50 dark:bg-blue-900 border-2 border-blue-500 rounded-lg">
      <h3 className="text-2xl font-bold text-center text-blue-900 dark:text-blue-100">
        Unified Customer Profile
      </h3>
      <p className="text-center mt-4 text-blue-800 dark:text-blue-200">
        This is the unified profile diagram component
      </p>
    </div>
  );
};
