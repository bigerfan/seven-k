import React from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

export const CategoryChart = () => {

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    const categoryData = [
        { name: "Pants", value: 30 },
        { name: "Coats", value: 20 },
        { name: "Shoes", value: 25 },
        { name: "Jackets", value: 25 }
    ];

    return (
        <ResponsiveContainer width="100%" height={250}>
            <PieChart>
                <Pie data={categoryData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                    {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>)
}
