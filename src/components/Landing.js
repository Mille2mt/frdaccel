import React from 'react';

const Landing = () => (
    <div className="hero">
        <div className="header fade-in">
            <h3 className='brandLogo'>FRD Accel</h3>
            <div className="menu">
                <a href="/" className="nav-link">Us</a>
                <a href="/" className="nav-link">About</a>
            </div>
        </div>
    
        <div className="hero-body">
            <h1 className='hero-content'><span className='fade-in'>Further developing </span><br/><span className='neon'>innovative</span><br/><span className='fade-in'> medical technologies</span></h1>
        </div>

        <div className='arrowDown'>
            <span className="caron">&#9661;</span>
        </div>
    </div>
)

export default Landing;