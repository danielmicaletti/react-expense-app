import React from 'react';
import moment from 'moment';
import expenses from '../tests/fixtures/expenses';

const getExpenseTotal = (expenses) => {
	return expenses.reduce((tot, expense) => tot + expense.amount, 0);
};

export default getExpenseTotal;