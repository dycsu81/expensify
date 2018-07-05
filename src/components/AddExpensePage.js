import React from 'react';
import ExpenseFrom from './ExpenseForm';
import { addExpense } from '../actions/expenses';
import { connect } from 'react-redux';

const AddExpensePage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseFrom 
            onSubmit={(expense) => {
                props.dispatch(addExpense({...expense}));
                props.history.push('/');
            }}
        />
    </div>
);

export default connect()(AddExpensePage);