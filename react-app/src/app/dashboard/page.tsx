'use client'

import './Home.css';
import { useState } from "react";

export default function Home() {
    const [budgets, setBudgets] = useState(["Primary Budget"]);
    const [value, setValue] = useState(new Date());

    return (
        <div className='container'>
            <select className="dropdown">
                {budgets.map((budget, index) => (
                    <option key={index} value={budget}>{budget}</option>
                ))}
                <option value="Create New Budget">Create New Budget</option>
            </select>
        </div>
    )
};
