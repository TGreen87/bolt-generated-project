'use client';

import { Employee } from '@/types/org-chart';

interface SidebarProps {
  employee: Employee;
  onClose: () => void;
}

export function Sidebar({ employee, onClose }: SidebarProps) {
  return (
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      onClick={onClose}
    >
      <div
        className="fixed inset-y-0 right-0 w-96 bg-white shadow-xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold text-gray-900">
              Employee Details
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Close panel</span>
              ×
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-4">
              <img
                src={employee.photoUrl}
                alt={employee.name}
                className="w-32 h-32 rounded-full mx-auto object-cover"
              />
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900">
                  {employee.name}
                </h3>
                <p className="text-gray-500">{employee.position}</p>
              </div>

              <div className="border-t pt-4">
                <dl className="space-y-2">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Department</dt>
                    <dd className="mt-1 text-sm text-gray-900">{employee.department}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Email</dt>
                    <dd className="mt-1 text-sm text-gray-900">{employee.email}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Phone</dt>
                    <dd className="mt-1 text-sm text-gray-900">{employee.phone}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
