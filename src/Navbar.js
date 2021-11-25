import React from 'react';

const Navbar = () => {
    return (  
        <div className="header">
            <div className="static-links">
                <ul>
                    <li>Service</li>
                    <li>Nous contacter</li>
                    <li>A propos</li>
                </ul>
            </div>
            <a href="/" className="logo-link">
                <img src="https://im.static-thomann.de/pics//images/logos/thomann-cyan-black.svg" alt="" className="logo" />
            </a>
        </div>
    );
}
 
export default Navbar;
