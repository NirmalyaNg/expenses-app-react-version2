import React, { useState } from 'react';
import './NewExpenseForm.css';

const NewExpenseForm = ({ onAddExpense, onCancel }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const expense = {
      title: title,
      amount: amount,
      date: new Date(date),
    };

    setTitle('');
    setAmount('');
    setDate('');

    onCancel();
    onAddExpense(expense);
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            value={amount}
            min="0"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
      <div>
        <button
          type="button"
          className="new-expense__actions"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className="new-expense__actions"
          type="submit"
          disabled={!(title.trim() && amount.trim() && date.trim())}
        >
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
