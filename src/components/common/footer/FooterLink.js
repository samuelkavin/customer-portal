import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const FooterLink = ({ footers }) => {
    return (
        <>
            <div>
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
