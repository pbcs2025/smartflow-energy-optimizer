import ConsumptionChart from './ConsumptionChart';
import RoomStatus from './RoomStatus';
import AlertPanel from './AlertPanel';

function Dashboard() {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '1100px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ color: '#1e40af' }}>⚡ SmartFlow Dashboard</h1>
      <p style={{ color: '#64748b' }}>AI-Powered Energy Optimization — Real-Time Monitor</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
        <div style={{ gridColumn: '1 / -1', background: '#fff', borderRadius: '12px', boxShadow: '0 1px 4px rgba(0,0,0,0.1)' }}>
          <ConsumptionChart />
        </div>
        <div style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 1px 4px rgba(0,0,0,0.1)' }}>
          <RoomStatus />
        </div>
        <div style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 1px 4px rgba(0,0,0,0.1)' }}>
          <AlertPanel />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;