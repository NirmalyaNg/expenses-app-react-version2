import React, { useState } from 'react';
import NewExpenseForm from '../NewExpenseForm/NewExpenseForm';
import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {
  const [addExpense, setAddExpense] = useState(false);

  const openAddExpenseHandler = () => {
    setAddExpense(true);
  };

  const cancelAddExpenseHandler = () => {
    setAddExpense(false);
  };

  return (
    <div className="new-expense">
      {!addExpense && (
        <button onClick={openAddExpenseHandler}>Add New Expense</button>
      )}
      {addExpense && (
        <NewExpenseForm
          onAddExpense={onAddExpense}
          onCancel={cancelAddExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
