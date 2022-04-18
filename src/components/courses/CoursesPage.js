import React from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';
import * as footerActions from '../../redux/actions/footerActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import CourseList from './CourseList';
import Height from './CardItem';
import Footer from './../common/footer/Footer';

class CoursesPage extends React.Component {
    componentDidMount() {
        const { courses, authors, footers, actions } = this.props;

        if (courses.length === 0) {
            actions.loadCourses().catch((error) => {
                alert('Loading courses failed' + error);
            });
        }

        if (authors.length === 0) {
            actions.loadAuthors().catch((error) => {
                alert('Loading authors failed' + error);
            });
        }

        if (footers.length === 0) {
            actions.loadFooters().catch((error) => {
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
                <CourseList courses={this.props.courses} />
                <Footer footers={this.props.footers} />

                {/* {this.props.courses.map((course, index) => {
                    return <Height key={index} course={course} />;
                })} */}
            </>
        );
    }
}

CoursesPage.propTypes = {
    authors: PropTypes.array.isRequired,
    courses: PropTypes.array.isRequired,
    footers: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        courses: state.courses.filter(
            (user) => user.first_name.startsWith('G') || user.last_name.startsWith('W'),
        ),
        authors: state.authors,
        footers: state.footers,
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
