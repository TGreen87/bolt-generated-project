import { OrgChart } from '@/components/OrgChart/OrgChart';
import { employeeData } from '@/data/employeeData';

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="max-w-3xl">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Company Structure
          </h2>
          <p className="text-gray-600">
            Interactive organization chart showing the complete company hierarchy.
          </p>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-6">
        <OrgChart data={employeeData} />
      </div>
    </div>
  );
}
