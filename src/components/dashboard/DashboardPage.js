import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
// import * as userActions from '../../redux2/actions/userAction';
import * as courseActions from '../../redux/actions/courseActions';

class DashboardPage extends React.Component {
  state = {
    course: {
      title: '',
    },
  };

  componentDidMount() {
    const { actions } = this.props;
    console.log('this.props', this.props);
    actions.loadCourses().catch((error) => {
      console.log('loading failed');
    });
  }

  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // alert(this.state.course.title);
    this.props.actions.createCourse(this.state.course);
    // this.props.actions.createCourse(this.state.course);
  };

  render() {
    return (
      <>
        {this.props.courses.map((course) => (
          <div key={course.first_name}>{course.first_name}</div>
        ))}
      </>
      // <form onSubmit={this.handleSubmit}>
      //   <h2>course</h2>
      //   <h3>Add course</h3>
      //   <input type="text" onChange={this.handleChange} value={this.state.course.title} />

      //   <input type="submit" value="Save" />
      //   {this.props.courses.map((course) => (
      //     <div key={course.title}>{course.title}</div>
      //   ))}
      // </form>
    );
  }
}

DashboardPage.propTypes = {
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
// export default connect(mapStateToProps, mapDispatchToProps) (DashboardPage);
