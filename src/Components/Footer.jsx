import React from "react";

function Footer() {
    return (
        <footer className="footer">
            {new Date().toLocaleTimeString()}
            <p>We are currently open from 10am to 4pm</p>
        </footer>
    );
}

export default Footer;
