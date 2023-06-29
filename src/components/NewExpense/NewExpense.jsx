import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'


const NewExpense = () => {

    const saveExpenseDataHandler = () => {
        const expenseData = {
            ...expenseData,
            id:Math.random().toString()
        }
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense;