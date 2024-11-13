import React from "react";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
 
  const expensesJsx=props.items.map((expenses)=>{
    return <ExpenseItem title={expenses.title} price={expenses.price} date={expenses.date}/>
  })

  return (
    <div className="Expenses">
      {expensesJsx.length?expensesJsx:<p>No Expenses Found</p>}
     
    </div>
  );
}

export default Expenses;
