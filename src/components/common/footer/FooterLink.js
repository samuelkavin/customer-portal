import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const FooterLink = ({ footers }) => {
    console.log('footers', footers);
    return (
        <>
            <div className="col-md-4 mb-md-0 mb-3">
                <h6>{footers.name}</h6>
                <ul className="list-unstyled">
                    {footers.values.map((nav) => {
                        return (
                            <li key={nav.name}>
                                <NavLink to="customers">{nav.name}</NavLink>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default FooterLink;
