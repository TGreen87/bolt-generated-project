# Architecture Documentation

## Component Structure
- `OrgChart`: Main visualization component
- `OrgNode`: Individual employee node
- `Sidebar`: Employee details panel

## Data Flow
1. Employee data stored in `employeeData.ts`
2. Transformed into tree structure by `transformData.ts`
3. Rendered by React components
4. State managed by React hooks

## Type System
- `Employee`: Core employee data type
- `TreeNode`: Hierarchical structure type
- `Props` interfaces for each component

## Styling
- Tailwind CSS for utility classes
- Component-specific styles in globals.css
- Responsive design breakpoints

## Future Extensions
- Authentication system
- Data persistence
- API integration
- Advanced search features
