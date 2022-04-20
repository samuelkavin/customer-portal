import React from 'react';
import PropTypes from 'prop-types';
import './CustomerList.css';

const CustomerList = ({ courses }) => (
    <div className="Container">
        <h4>Customers</h4>
        {courses.map((course) => {
            return (
                <div key={course.id} className="Card">
                    <div className="Avatar">
                        <img src={course.avatar} alt={course.id + `-avatar`} />
                    </div>
                    <div className="Details">
                        <p>
                            {course.first_name} {course.last_name}
                        </p>
                        <p className="Email">{course.email}</p>
                    </div>
                </div>
            );
        })}
    </div>
);

CustomerList.propTypes = {
    courses: PropTypes.array.isRequired,
};

export default CustomerList;