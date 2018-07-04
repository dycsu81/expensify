import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({id, dispatch, description, amount, createdAt}) => (
    <div>
        <p>{description}</p>
        <p>{amount} - {createdAt}</p>
        <button onClick={() => {
            dispatch(removeExpense({id}));
        }}>
        Remove</button>
    </div>
);

export default connect()(ExpenseListItem);