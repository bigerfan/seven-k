import React from 'react'

export const SummaryCard = ({ title, value, icon }) => (
    <div className="bg-white p-4 shadow-md rounded-lg flex items-center space-x-4">
        <div className="text-3xl text-gray-700">{icon}</div>
        <div>
            <p className="text-gray-500">{title}</p>
            <p className="text-xl font-semibold">{value}</p>
        </div>
    </div>
);