import { Employee, TreeNode } from './types';
import { memoize } from 'lodash';

export const validateEmployees = (employees: Employee[]): boolean => {
  const employeeIds = new Set(employees.map(e => e.id));
  
  // Check for invalid manager references
  const hasInvalidManagerIds = employees.some(
    e => e.managerId !== null && !employeeIds.has(e.managerId)
  );
  
  if (hasInvalidManagerIds) {
    console.error('Invalid manager IDs detected in employee data');
    return false;
  }

  // Check for circular references
  const visited = new Set<number>();
  const visiting = new Set<number>();

  const hasCycle = (employeeId: number): boolean => {
    if (visiting.has(employeeId)) return true;
    if (visited.has(employeeId)) return false;

    const employee = employees.find(e => e.id === employeeId);
    if (!employee) return false;

    visiting.add(employeeId);

    if (employee.managerId && hasCycle(employee.managerId)) {
      return true;
    }

    visiting.delete(employeeId);
    visited.add(employeeId);
    return false;
  };

  return !employees.some(e => hasCycle(e.id));
};

export const transformToTree = memoize((employees: Employee[]): TreeNode[] => {
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
    const employee = employeeMap.get(employeeId)!;
    const children = childrenMap.get(employeeId) || [];

    return {
      id: employeeId.toString(),
      value: {
        name: employee.name,
        position: employee.position,
        employeeId: employee.id
      },
      children: children.map(buildNode)
    };
  };

  return employees
    .filter(e => e.managerId === null)
    .map(e => buildNode(e.id));
});
