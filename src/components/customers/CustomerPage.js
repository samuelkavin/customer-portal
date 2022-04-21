import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as courseActions from '../../redux/actions/courseActions';
import * as footerActions from '../../redux/actions/footerActions';
import CustomerList from './CustomerList';
import Footer from '../common/footer/Footer';
import Spinner from '../common/spinner/Spinner';

class CustomerPage extends React.Component {
	componentDidMount() {
		const { courses, footers, actions } = this.props;

		if (courses.length === 0) {
			actions.loadCourses().catch(error => {
				alert('Loading courses failed' + error);
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
						<CustomerList courses={this.props.courses} />
						<Footer footers={this.props.footers} />
					</>
				)}
			</>
		);
	}
}

CustomerPage.propTypes = {
	courses: PropTypes.array.isRequired,
	footers: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired,
	loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
	return {
		courses: state.courses.filter(user => user.first_name.startsWith('G') || user.last_name.startsWith('W')),
		footers: state.footers,
		loading: state.apiCallsInProgress > 0,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: {
			loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
			loadFooters: bindActionCreators(footerActions.loadFooters, dispatch),
		},
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerPage);
