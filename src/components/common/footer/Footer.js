import React from 'react';
import FooterLink from './FooterLink';
import './Footer.css';

const Footer = ({ footers }) => {
    return (
        <footer className="page-footer font-small blue pt-4">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    {footers.map((footer, i) => {
                        return <FooterLink key={i} footers={footer} />;
                    })}
                </div>
            </div>
            <div className="footer-copyright text-center py-3">© 2020 Copyright @ Zurich</div>
        </footer>
    );
};

export default Footer;
