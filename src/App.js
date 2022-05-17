import { useState } from 'react/cjs/react.development';
import './App.css';
import Expenses from './components/Expenses';
import NewExpense from './components/NexExpense/NewExpense';

const init_expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(init_expenses);
  const addExpense = (expenseData) => {
    console.log('App.js!');
    console.log(expenseData);
    setExpenses((prevExpenses) =>{
      return [expenseData,...prevExpenses];
    });
  }
  return (
    <div>
      <h3>Track Your Daily Expenses!</h3>
      <NewExpense onAddExpense={addExpense}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
