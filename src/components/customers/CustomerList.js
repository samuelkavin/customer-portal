import React from 'react';
import PropTypes from 'prop-types';
import './CustomerList.css';

const CustomerList = ({ customers }) => (
    <div className="Container">
        <h4>Customers</h4>
        {customers.map((customer) => {
            return (
                <div key={customer.id} className="Card">
                    <div className="Avatar">
                        <img src={customer.avatar} alt={customer.id + `-avatar`} />
                    </div>
                    <div className="Details">
                        <p>
                            {customer.first_name} {customer.last_name}
                        </p>
                        <p className="Email">{customer.email}</p>
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
