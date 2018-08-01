import React from 'react';
import Logo from './Logo';

const ContactPage = () => (
    <div>
        <div className="large-hero">
            <div className="large-hero__text-content">
                <header className="section-header">
                    <Logo />
                    <button className="button">Log In Now</button>
                </header>
            </div>
        </div>
    </div>
);

export default ContactPage;