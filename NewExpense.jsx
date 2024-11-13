import React from 'react'
import ExpenseForm from './ExpenseForm'

function NewExpense(props) {
    const saveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData
        };
        // console.log(expenseData);
        props.onAddExpense(expenseData)
        
    }
  return (
    <div className='NewExpense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  )
}

export default NewExpense