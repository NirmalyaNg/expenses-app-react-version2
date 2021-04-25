import { useState, useEffect } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      const newExpenses = [
        {
          ...expense,
          id: Math.random().toString(),
        },
        ...prevExpenses,
      ];

      // Before setting state store the expenses as a string in local storage
      localStorage.setItem('expenses', JSON.stringify(newExpenses));
      return newExpenses;
    });
  };

  // Get the expenses from localstorage once the component loads
  useEffect(() => {
    let fetchedExpenses = JSON.parse(localStorage.getItem('expenses'));
    if (fetchedExpenses) {
      fetchedExpenses = fetchedExpenses.map((exp) => ({
        ...exp,
        date: new Date(exp.date),
      }));

      setExpenses(fetchedExpenses);
    }
  }, []);

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
