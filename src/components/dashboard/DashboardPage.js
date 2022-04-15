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

  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // alert(this.state.course.title);
    this.props.dispatch(courseActions.createCourse(this.state.course));
    // this.props.actions.createCourse(this.state.course);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>course</h2>
        <h3>Add course</h3>
        <input type="text" onChange={this.handleChange} value={this.state.course.title} />

        <input type="submit" value="Save" />
      </form>
    );
  }
}

DashboardPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

export default connect(mapStateToProps)(DashboardPage);
// export default connect(mapStateToProps, mapDispatchToProps) (DashboardPage);
