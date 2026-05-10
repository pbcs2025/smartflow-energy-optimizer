function AlertPanel() {
  const alerts = [
    { time: '10:47 AM', room: 'Lab1', message: 'Fan ON — room unoccupied for 15 min' },
    { time: '1:05 PM', room: 'Class3', message: 'Light ON — room empty during lunch break' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h3>⚠️ Live Alerts</h3>
      {alerts.map((a, i) => (
        <div key={i} style={{
          background: '#fef2f2', border: '1px solid #fca5a5',
          borderRadius: '8px', padding: '10px', marginBottom: '8px'
        }}>
          <strong>{a.time} — {a.room}</strong>
          <p style={{ margin: '4px 0 0', color: '#dc2626' }}>{a.message}</p>
        </div>
      ))}
    </div>
  );
}

export default AlertPanel;