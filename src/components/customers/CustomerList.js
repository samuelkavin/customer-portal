import React from 'react';
import PropTypes from 'prop-types';
import './CustomerList.css';

const CustomerList = ({ customers }) => (
    <div className="container">
        <h4>Customers</h4>
        {customers.map((customer) => {
            return (
                <div key={customer.id} className="card">
                    <div className="avatar">
                        <img src={customer.avatar} alt={customer.id + `-avatar`} />
                    </div>
                    <div className="details">
                        <p>
                            {customer.first_name} {customer.last_name}
                        </p>
                        <p className="email">{customer.email}</p>
                    </div>
                </div>
            );
        })}
    </div>
);

CustomerList.propTypes = {
    customers: PropTypes.array.isRequired,
};

export default CustomerList;
