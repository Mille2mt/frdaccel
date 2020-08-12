import React from 'react';
import LazyLoad from 'react-lazyload';
import 'animate.css';

const Stats = () => (
        <div className="stats">
            <div className="container">
                <h1 className='title neonDark'>Fast tracking your ideas!</h1>         
                
                <div className="stats-content">    

                    <LazyLoad offset={-100} height={250}> 
                        <div className="cardOne card four columns animate__animated animate__fadeInTopLeft">                            
                            <h2 className="number ">3</h2>
                            <p className="subtitle">Projects fast-tracked</p>                    
                        </div>  
                    </LazyLoad>

                    <LazyLoad offset={-250} height={250}>
                        <div className="cardTwo card four columns animate__animated animate__fadeInTopLeft">
                            <h2 className="number ">12</h2>
                            <p className="subtitle">Advisors</p>
                        </div>
                    </LazyLoad>

                    <LazyLoad offset={-400} height={250}>
                        <div className="cardThree card four columns animate__animated animate__fadeInTopLeft">
                            <h2 className="number ">$873,193+</h2>
                            <p className="subtitle">Revenue produced</p>
                        </div>
                    </LazyLoad>

                </div>
            </div>
        </div>
)

export default Stats;