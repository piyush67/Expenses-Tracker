import React from 'react';
import { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // const [enteredData, setEnteredData] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });
  const titleChangeHandler = (e) => {
    // setEnteredData({
    //   ...enteredData,
    //   enteredTitle: e.target.value,
    // });
    // setEnteredData((prevState) => {
    //   return { ...prevState, enteredTitle: e.target.value };
    // });
    // console.log(enteredData);
    setEnteredTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    // setEnteredData({
    //   ...enteredData,
    //   enteredAmount: e.target.value,
    // });
    // console.log(enteredData);
    setEnteredAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    // setEnteredData({
    //   ...enteredData,
    //   enteredDate: e.target.value,
    // });
    // console.log(enteredData);
    setEnteredDate(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };
  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2022-01-01'
            max='2024-12-31'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__action'>
        <button type='button' onClick={props.closeForm}>
          Cancel
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
