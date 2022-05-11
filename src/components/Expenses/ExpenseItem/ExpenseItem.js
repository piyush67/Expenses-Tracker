// import { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../../UI/Card';
const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);
  const title = props.title;
  const amount = props.amount;
  // const clickHandler = () => {
  //   setTitle('Updated!!!');
  //   console.log(title);
  // };
  return (
    <ul>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>${amount}</div>
        </div>
      </Card>
    </ul>
  );
};

export default ExpenseItem;
