import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should render correct ExpensesSummary on single expense', () => {
	const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={245} />);
	expect(wrapper).toMatchSnapshot();
});

test('should render correct ExpensesSummary on multiple expenses', () => {
	const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={2452332} />);
	expect(wrapper).toMatchSnapshot();
});