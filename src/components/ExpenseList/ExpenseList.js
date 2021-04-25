import React from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './ExpenseList.css';

const ExpenseList = ({ items }) => {
  if (items.length === 0) {
    return <p className="expenseList__fallout">No Expenses Found.</p>;
  }

  let expensesContent = items.map((item) => (
    <ExpenseItem
      key={item.id}
      title={item.title}
      amount={item.amount}
      date={item.date}
    />
  ));

  return <div>{expensesContent}</div>;
};

export default ExpenseList;
