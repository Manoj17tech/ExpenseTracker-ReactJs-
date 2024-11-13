import React from "react";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = ({title,price,date}) => {
  return (
    <div className="ExpenseItem">
      <ExpenseDate date={date}/>
      <div className="item">{title}</div>
      <div className="price">{price}</div>
    </div>
  );
};

export default ExpenseItem;
