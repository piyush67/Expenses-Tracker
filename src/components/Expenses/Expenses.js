import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList/ExpensesList';
import ExpensesChart from './ExpensesChart';
const Expenses = (props) => {
  const expenses = props.expenses;
  const [filteredYear, setFilteredYear] = useState('2021');
  const filterExpensesHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onFilterExpensess={filterExpensesHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
        {/* <ExpenseItem expense={expenses[0]} /> */}
        {/* <ExpenseItem expense={expenses[1]} /> */}
        {/* <ExpenseItem expense={expenses[2]} /> */}
        {/* <ExpenseItem expense={expenses[3]} /> */}
      </Card>
    </>
  );
};

export default Expenses;
