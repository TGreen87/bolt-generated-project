export interface Employee {
  id: number;
  name: string;
  position: string;
  managerId: number | null;
}

export interface OrgChartProps {
  employees: Employee[];
  onNodeClick?: (employee: Employee) => void;
  className?: string;
  theme?: 'light' | 'dark';
}

export interface TreeNode {
  id: string;
  value: {
    name: string;
    position: string;
    employeeId: number;
  };
  children?: TreeNode[];
}
