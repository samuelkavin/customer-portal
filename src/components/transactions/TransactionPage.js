import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { selectTransactions, getTransactionsData } from './TransactionSlice';

function TransactionPage() {
	const users = useSelector(selectTransactions);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTransactionsData());
	}, [dispatch]);

	return (
		<>
			<div>transactionPage</div>
			<ul>
				{users.map(user => {
					return <li key={user.id}>{user.first_name}</li>;
				})}
			</ul>
		</>
	);
}

// TransactionPage.propTypes = {
// 	users: PropTypes.array.isRequired,
// };


export default TransactionPage;
