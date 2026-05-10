import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';
import axios from 'axios';

function ConsumptionChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch from Flask backend every 60 seconds
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:5000/history');
        setData(res.data);
      } catch (err) {
        console.log("Backend not running yet — using dummy data");
        // Dummy data for testing without backend
        setData([
          { time: '9:00', power: 240 },
          { time: '10:00', power: 320 },
          { time: '11:00', power: 180 },
          { time: '12:00', power: 90 },
          { time: '1:00', power: 420 },
          { time: '2:00', power: 310 },
        ]);
      }
    };
    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h3>Live Power Consumption</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis unit=" W" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="power" stroke="#2563eb" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ConsumptionChart;