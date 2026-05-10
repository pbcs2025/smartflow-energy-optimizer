function RoomStatus() {
  // Dummy room data — will come from API later
  const rooms = [
    { id: 'Lab1', occupied: false, fan: true, light: true, ac: false },
    { id: 'Class3', occupied: true, fan: true, light: true, ac: true },
    { id: 'Staff_Room', occupied: false, fan: false, light: true, ac: false },
  ];

  const badge = (isOn) => ({
    padding: '4px 10px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: 'bold',
    background: isOn ? '#dcfce7' : '#f1f5f9',
    color: isOn ? '#16a34a' : '#94a3b8',
    marginRight: '6px'
  });

  return (
    <div style={{ padding: '20px' }}>
      <h3>Room Status</h3>
      {rooms.map(room => (
        <div key={room.id} style={{ 
          border: '1px solid #e2e8f0', borderRadius: '8px', 
          padding: '12px', marginBottom: '10px',
          background: !room.occupied ? '#fff7ed' : '#fff'
        }}>
          <strong>{room.id}</strong>
          <span style={{ marginLeft: '10px', color: room.occupied ? 'green' : 'red' }}>
            {room.occupied ? '🟢 Occupied' : '🔴 Empty'}
          </span>
          <div style={{ marginTop: '8px' }}>
            <span style={badge(room.fan)}>Fan {room.fan ? 'ON' : 'OFF'}</span>
            <span style={badge(room.light)}>Light {room.light ? 'ON' : 'OFF'}</span>
            <span style={badge(room.ac)}>AC {room.ac ? 'ON' : 'OFF'}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RoomStatus;