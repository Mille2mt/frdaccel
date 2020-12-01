import React from 'react';
import LazyLoad from 'react-lazyload';
import 'animate.css';

const Stats = () => (
    <LazyLoad offset={300}>
        <div className="stats">
            <div className="container">
                <h1 className='title neonDark'>- Our Mission -</h1>         
                
                <div className="stats-content">    

                    <LazyLoad offset={-100} height={225}> 
                        <div className="cardOne card six columns animated fadeInLeft">                            
                            <h2 className="number ">sub-header placeholder</h2>
                            <p className="subtitle">Text 1</p>                    
                        </div>  
                    </LazyLoad>

                    <LazyLoad offset={-250} height={250}>
                        <div className="cardTwo card six columns animated fadeInLeft">
                            <h2 className="number ">sub-header placeholder</h2>
                            <p className="subtitle">Text 2</p>
                        </div>
                    </LazyLoad>
                    

                </div>
            </div>
        </div>
    </LazyLoad>
)

export default Stats;

// Optional card #3 - update column width to four if used
// <LazyLoad offset={-350} height={250}>
//     <div className="cardThree card four columns animated fadeInLeft">
//         <h2 className="number ">sub-header placeholder</h2>
//         <p className="subtitle">Text 3</p>
//     </div>
// </LazyLoad>