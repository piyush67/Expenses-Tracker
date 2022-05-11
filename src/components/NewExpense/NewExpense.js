import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import { useState } from 'react';

import React from 'react';

const NewExpense = (props) => {
  const [openForm, toggleForm] = useState(false);
  const showExpenseForm = () => {
    toggleForm(!openForm);
  };
  const cancelAddExpense = () => {
    toggleForm(false);
  };
  const saveExpenseDataHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    props.addNewExpense(expenseData);
  };
  return (
    <div className='new-expense'>
      {!openForm && <button onClick={showExpenseForm}>Add New Expense</button>}
      {openForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          closeForm={cancelAddExpense}
        />
      )}
    </div>
  );
};

export default NewExpense;
