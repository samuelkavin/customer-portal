import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as customerAction from '../../redux/actions/customerActions';
import * as footerActions from '../../redux/actions/footerActions';
import CustomerList from './CustomerList';
import Footer from '../common/footer/Footer';
import Spinner from '../common/spinner/Spinner';

class CustomerPage extends React.Component {
	componentDidMount() {
		const { customers, footers, actions } = this.props;

		if (customers.length === 0) {
			actions.loadCustomer().catch(error => {
				alert('Loading customers failed' + error);
			});
		}

		if (footers.length === 0) {
			actions.loadFooters().catch(error => {
				alert('Loading footers failed' + error);
			});
		}
	}

	render() {
		return (
			<>
				{this.props.loading ? (
					<Spinner />
				) : (
					<>
						<CustomerList customers={this.props.customers} />
						<Footer footers={this.props.footers} />
					</>
				)}
			</>
		);
	}
}

CustomerPage.propTypes = {
	customers: PropTypes.array.isRequired,
	footers: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired,
	loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
	return {
		customers: state.customers.filter(user => user.first_name.startsWith('G') || user.last_name.startsWith('W')),
		footers: state.footers,
		loading: state.apiCallsInProgress > 0,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: {
			loadCustomer: bindActionCreators(customerAction.loadCustomer, dispatch),
			loadFooters: bindActionCreators(footerActions.loadFooters, dispatch),
		},
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerPage);
