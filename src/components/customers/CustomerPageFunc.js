import React, { useEffect } from 'react';
import * as customerAction from '../../redux/actions/customerActions';
import * as footerActions from '../../redux/actions/footerActions';
import { useSelector, useDispatch } from 'react-redux';
import CustomerList from './CustomerList';
import Footer from '../common/footer/Footer';

function CustomerPage() {
	const dispatch = useDispatch();
	const customers = useSelector(state => {
		return state.customers.filter(user => user.first_name.startsWith('G') || user.last_name.startsWith('W'));
	});

	const footers = useSelector(state => state.footers);
	console.log('customers', customers);

	useEffect(() => {
		dispatch(customerAction.loadCustomer());
		dispatch(footerActions.loadFooters());
	}, [dispatch]);

	return (
		<>
			<>
				<CustomerList customers={customers} />
				<Footer footers={footers} />
			</>
		</>
	);
}

export default CustomerPage;
