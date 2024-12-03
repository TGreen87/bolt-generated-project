import { OrgChart } from './components/OrgChart/OrgChart';
import { employeeData } from './data/employeeData';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Organization Chart</h1>
        <div className="bg-white rounded-lg shadow-lg p-4" style={{ height: '800px' }}>
          <OrgChart
            employees={employeeData}
            onNodeClick={(employee) => console.log('Clicked:', employee)}
            theme="light"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
