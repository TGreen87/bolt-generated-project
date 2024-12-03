'use client';

import { Employee } from '@/types/org-chart';

interface OrgNodeProps {
  employee: Employee;
  onSelect: (employee: Employee) => void;
}

export function OrgNode({ employee, onSelect }: OrgNodeProps) {
  return (
    <button
      onClick={() => onSelect(employee)}
      className="org-node group"
      aria-label={`View details for ${employee.name}`}
    >
      <div className="org-node-header">
        <h3 className="font-medium text-sm">{employee.position}</h3>
      </div>
      <div className="org-node-content">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src={employee.photoUrl}
              alt=""
              className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-md"
            />
          </div>
          <div className="text-left">
            <h4 className="font-semibold text-gray-900">{employee.name}</h4>
            <p className="text-sm text-gray-600">{employee.department}</p>
          </div>
        </div>
      </div>
    </button>
  );
}
