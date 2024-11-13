import React from 'react'

function ExpenseDate({date}) {
    const day=new Date(date).getDay();
    const month=new Date(date).toLocaleString("en-IN",{month:"short"})
    const year=new Date(date).getFullYear();

  return (
    <div className='ExpenseDate'>
        <div className="Day">{day}</div>
        <div className="month">{month}</div>
        <div className="year">{year}</div>
    </div>
  )
}

export default ExpenseDate