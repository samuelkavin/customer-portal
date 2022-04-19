import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';
import * as footerActions from '../../redux/actions/footerActions';
import CourseList from './CourseList';
import Footer from './../common/footer/Footer';
import Spinner from '../common/spinner/Spinner';

class CoursesPage extends React.Component {
	componentDidMount() {
		const { courses, authors, footers, actions } = this.props;

		if (courses.length === 0) {
			actions.loadCourses().catch(error => {
				alert('Loading courses failed' + error);
			});
		}

		if (authors.length === 0) {
			actions.loadAuthors().catch(error => {
				alert('Loading authors failed' + error);
			});
		}

		if (footers.length === 0) {
			actions.loadFooters().catch(error => {
				alert('Loading footers failed' + error);
			});
		}

		// console.log('footers', this.props);
	}

	render() {
		console.log('this.courses', this.props.courses);
		console.log('this.courses', this.props.footers);
		return (
			<>
				{this.props.loading ? (
					<Spinner />
				) : (
					<>
						<CourseList courses={this.props.courses} />
						<Footer footers={this.props.footers} />
					</>
				)}
			</>
		);
	}
}

CoursesPage.propTypes = {
	authors: PropTypes.array.isRequired,
	courses: PropTypes.array.isRequired,
	footers: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired,
	loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
	return {
		courses: state.courses.filter(user => user.first_name.startsWith('G') || user.last_name.startsWith('W')),
		authors: state.authors,
		footers: state.footers,
		loading: state.apiCallsInProgress > 0,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: {
			loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
			loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
			loadFooters: bindActionCreators(footerActions.loadFooters, dispatch),
		},
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
