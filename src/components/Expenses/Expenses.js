import Card from '../Card/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import './Expenses.css';
import { useState } from 'react';
import ExpenseList from '../ExpenseList/ExpenseList';
import ExpensesChart from '../ExpensesChart/ExpensesChart';

const Expenses = ({ items }) => {
  const [filterYear, setFilterYear] = useState('2021');

  const yearChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = items.filter(
    (item) => item.date.getFullYear() === parseInt(filterYear)
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onYearChange={yearChangeHandler}
          selectedYear={filterYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
