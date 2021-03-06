import React from 'react';

const Footer = () => (
    <div className="footer">
        <div className="container">
            <div className="row">
                <h3 className='brandLogo-footer four columns'>FRD <span className='brandTitle'>Accel</span></h3>   
                <div className='four columns'>
                    <li className='footer-list'>135 Cannon Street Suite 101L</li>
                    <li className='footer-list'>Charleston, SC 29425</li>                 
                    <button className='footer-button'><a className="footer-button-email" target="_blank" rel="noopener noreferrer" href="mailto: exlubesk@musc.edu">Email us</a></button> 
                </div>
                <span className='copyright four columns'>&copy; 2020 FRD Accel, LLC <br></br>All Rights Reserved</span>   
            </div>
        </div>
    </div>
);

export default Footer;