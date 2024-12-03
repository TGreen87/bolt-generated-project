import { motion, AnimatePresence } from 'framer-motion';
import { NodeProps } from '@/types/org-chart';

export const Node: React.FC<NodeProps> = ({ employee, onToggle, onNodeClick }) => {
  const hasChildren = employee.children && employee.children.length > 0;

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative"
    >
      <div
        className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4 m-2 cursor-pointer hover:shadow-xl transition-shadow"
        onClick={() => onNodeClick(employee)}
        role="button"
        tabIndex={0}
        aria-expanded={employee.isExpanded}
        onKeyPress={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onNodeClick(employee);
          }
        }}
      >
        {employee.imageUrl && (
          <img
            src={employee.imageUrl}
            alt={`${employee.name}'s profile`}
            className="w-16 h-16 rounded-full mb-2"
          />
        )}
        <h3 className="font-semibold text-lg">{employee.name}</h3>
        <p className="text-gray-600">{employee.title}</p>
        <p className="text-sm text-gray-500">{employee.department}</p>
        
        {hasChildren && (
          <button
            className="mt-2 text-blue-500 hover:text-blue-700"
            onClick={(e) => {
              e.stopPropagation();
              onToggle(employee.id);
            }}
            aria-label={`${employee.isExpanded ? 'Collapse' : 'Expand'} ${employee.name}'s team`}
          >
            {employee.isExpanded ? '▼' : '▶'}
          </button>
        )}
      </div>

      {hasChildren && employee.isExpanded && (
        <div className="relative mt-4">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-4 bg-gray-300" />
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            {employee.children.map((child) => (
              <Node
                key={child.id}
                employee={child}
                onToggle={onToggle}
                onNodeClick={onNodeClick}
              />
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};
