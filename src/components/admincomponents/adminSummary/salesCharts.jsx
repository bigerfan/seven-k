import React from 'react'
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';

export const SalesCharts = () => {

    const salesData = [
        { name: "Jan", sales: 4000 },
        { name: "Feb", sales: 3000 },
        { name: "Mar", sales: 5000 },
        { name: "Apr", sales: 7000 },
        { name: "May", sales: 6000 },
        { name: "Jun", sales: 8000 }
      ];

    return (
        <ResponsiveContainer width="100%" height={250}>
            <LineChart data={salesData}>
                <Line type="monotone" dataKey="sales" stroke="#0088FE" strokeWidth={3} />
                <Tooltip />
            </LineChart>
        </ResponsiveContainer>)
}
