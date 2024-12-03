'use client';

import { useState } from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import { OrgNode } from './OrgNode';
import { Sidebar } from '../Sidebar/Sidebar';
import { transformToTree } from '@/lib/transformData';
import { Employee } from '@/types/org-chart';

interface OrgChartProps {
  data: Employee[];
}

export function OrgChart({ data }: OrgChartProps) {
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const treeData = transformToTree(data);

  const handleSelect = (employee: Employee) => {
    setSelectedEmployee(employee);
  };

  const handleClose = () => {
    setSelectedEmployee(null);
  };

  const renderNode = (node: any) => {
    const employee = data.find(e => e.id === Number(node.id));
    if (!employee) return null;
    
    return (
      <OrgNode
        employee={employee}
        onSelect={handleSelect}
      />
    );
  };

  const renderTree = (nodes: any[]) => {
    return nodes.map(node => (
      <TreeNode key={node.id} label={renderNode(node)}>
        {node.children && renderTree(node.children)}
      </TreeNode>
    ));
  };

  return (
    <>
      <div className="overflow-x-auto min-h-[600px]">
        <div className="min-w-[1024px] px-4">
          <Tree
            lineWidth="2px"
            lineColor="#cbd5e1"
            lineBorderRadius="6px"
            label={renderNode(treeData[0])}
          >
            {treeData[0].children && renderTree(treeData[0].children)}
          </Tree>
        </div>
      </div>
      
      {selectedEmployee && (
        <Sidebar
          employee={selectedEmployee}
          onClose={handleClose}
        />
      )}
    </>
  );
}
