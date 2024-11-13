
import { useState } from "react";

function ExpenseForm(props) {

  const [enteredTitle,setEnteredTitle]=useState("");
  const [enteredPrice,setEnteredPrice]=useState("");
  const [enteredDate,setEnteredDate]=useState("");

const titleHandler = (event)=>{
  // console.log(event.target.value);
   setEnteredTitle(event.target.value)
};

const priceHandler = (event)=>{
    // console.log(event);
    setEnteredPrice(event.target.value);
};

const dateHandler =(event)=>{
    // console.log(event);
    setEnteredDate(event.target.value)

};

const submitHandler=(event)=>{
  event.preventDefault();  // It Prevents the Browser from Refreshing

  let expenseData = {
    title: enteredTitle,
    price:enteredPrice,
    date: new Date(enteredDate),
  };
  // console.log(expenseData);
//   props.onSaveExpenseData()
props.onSaveExpenseData(expenseData);

  setEnteredTitle("");
  setEnteredDate("");
  setEnteredPrice("");

};

  return (
    <div className='ExpenseForm'>
        <form onSubmit={submitHandler}>
            <label >Name</label>
            <input type="text" onChange={titleHandler} value={enteredTitle}/>

            <label>Price</label>
            <input type="number" onChange={priceHandler} value={enteredPrice}/>

            <label>Date:</label>
            <input type="date" onChange={dateHandler} value={enteredDate}/>
            <button>Add Expense</button>
        </form>
    </div>
  )
}

export default ExpenseForm