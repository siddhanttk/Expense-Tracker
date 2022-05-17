import { useState } from 'react/cjs/react.development';
import './ExpenseForm.css';
import './NewExpense.css'

function ExpenseForm(props) {
    const [enteredTitle, setTitle] = useState('');
    const [enteredAmount, setAmount] = useState('');
    const [enteredDate, setDate] = useState('');
    const textHandler = (event) => {
        setTitle(event.target.value)
    };
    const amountHandler = (event) =>{
        setAmount(event.target.value)
    };
    const dateHandler = (event) =>{
        setDate(()=>{
            return (new Date(event.target.value));
        })
    };
    const submitHandler = (event) =>{
        event.preventDefault();
        const expenses = {
            title: enteredTitle,
            date: new Date(enteredDate),
            amount: enteredAmount
        };
        
        props.onSaveExpense(expenses);
        setTitle('');
        setAmount('');
        setDate('');
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={textHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="1" step="1" value={enteredAmount} onChange={amountHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2021-12-31" value={enteredDate} onChange={dateHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
            <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;