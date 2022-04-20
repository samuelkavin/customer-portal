import React from 'react';
import FooterLink from './FooterLink';
import './Footer.css';

const Footer = ({ footers }) => {
    return (
        <footer>
            <div>
                <div className="link-container">
                    {footers.map((footer, i) => {
                        return <FooterLink key={i} footers={footer} />;
                    })}
                </div>
            </div>
            <div className="footer-copyright">© 2020 Copyright @ Zurich</div>
        </footer>
    );
};

export default Footer;
