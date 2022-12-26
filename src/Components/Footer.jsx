import React from "react";
import "./footer.style.less";

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <h4>© INT ELECTRA {new Date().getFullYear()}</h4>
        </div>
    );
};

export default Footer;
