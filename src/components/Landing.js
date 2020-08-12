import React from 'react';
import Header from './Header';

const Landing = () => (
    <div className="hero">

        <Header />
    
        <div className="hero-body">
            <h1 className='hero-content'><span className='fade-in'>Further developing </span><br/><span className='neon'>innovative</span><br/><span className='fade-in'> medical technologies</span></h1>
        </div>

        <div className='arrowDown'>
            <span className="caron">&#9661;</span>
        </div>
        
    </div>
)

export default Landing;