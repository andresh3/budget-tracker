import './Home.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from 'react-calendar';

const Home = () => {
    const navigate = useNavigate();
    const [budgets, setBudgets] = useState(["Primary Budget"]);
    const [value, setValue] = useState(new Date());

    function onChange(nextValue) {
        setValue(nextValue);
      }

    const handleSelect = (event) => {
        const selectedValue = event.target.value;

        if (selectedValue === "Create New Budget") {
            const newBudget = prompt("Enter a name for your new budget:");
            if (newBudget && !budgets.includes(newBudget)) {
                setBudgets([...budgets, newBudget]);
            }
        }
    };

    return (
        <div className='container'>
            <select onChange={handleSelect} className="dropdown">
                {budgets.map((budget, index) => (
                    <option key={index} value={budget}>{budget}</option>
                ))}
                <option value="Create New Budget">Create New Budget</option>
            </select>
        <div className="calendar-box">
            <Calendar onChange={onChange} value={value} className="calendar"/>
        </div>
        </div>
    );
};

export default Home;
