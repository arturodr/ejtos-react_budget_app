import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const totalExpenses = expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);
        const newValue = parseInt(event.target.value);
        console.log("test: " + newValue + " < "+ totalExpenses);

        if (newValue > 20000) {
            alert("The Budget can't be larger than " + {currency} + "20000");
            event.target.value = 20000;
        } else if (newValue < totalExpenses) {
            alert("The Budget can't be smaller than " + {currency} + totalExpenses);
            event.target.value = totalExpenses;
        }
        setNewBudget(event.target.value);
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;