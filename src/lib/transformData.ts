import { Employee } from '@/types/org-chart';

interface TreeNode {
  id: string;
  children?: TreeNode[];
}

export function transformToTree(employees: Employee[]): TreeNode[] {
  const employeeMap = new Map(employees.map(e => [e.id, e]));
  const childrenMap = new Map<number, number[]>();

  // Build children map
  employees.forEach(employee => {
    if (employee.managerId !== null) {
      const children = childrenMap.get(employee.managerId) || [];
      children.push(employee.id);
      childrenMap.set(employee.managerId, children);
    }
  });

  const buildNode = (employeeId: number): TreeNode => {
    const children = childrenMap.get(employeeId) || [];
    return {
      id: employeeId.toString(),
      children: children.map(buildNode)
    };
  };

  return employees
    .filter(e => e.managerId === null)
    .map(e => buildNode(e.id));
}
