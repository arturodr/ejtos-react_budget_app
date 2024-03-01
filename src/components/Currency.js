import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { currency } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);

    const handleCurrencyChange = (event) => {
        setNewCurrency(event.target.value);
    }
    return (
        <div className='alert alert-warning'>
            <select className="form-select mb-3 bg-success text-white" id="inputGroupSelect04" onChange={(event) => handleCurrencyChange(event.target.value)} defaultValue="$">
                <option value="$" name="dollar">$ Dollar</option>
                <option value="£" name="pound">£ Pound</option>
                <option value="€" name="euro">€ Euro</option>
                <option value="₹" name="ruppee">₹ Ruppee</option>
            </select>
        </div>
    );
};
export default Currency;