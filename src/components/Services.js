import React from 'react';
import LazyLoad from 'react-lazyload';

const Services = () => (
    <LazyLoad offset={800} once>

    <div className='services'>
        <div className="container">
            <div className="row">

                <LazyLoad offset={-100}>
                    <div className="services-card four columns  animate__animated animate__fadeInLeft">
                        <h4 className="services-title">Our services</h4>
                        <p className="services-info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime delectus harum incidunt enim fugiat facilis itaque, labore dolor tempora voluptate in minus esse et consequatur, eum commodi impedit mollitia iusto.</p>
                    </div>
                </LazyLoad>

                <LazyLoad offset={-250}>
                    <div className="services-card four columns animate__animated animate__fadeInDown">
                        <div className="item">
                            <h2 className='services-card-title'>Projects</h2>
                            <p className='services-subtitle'>item subtitle</p>
                        </div>
                        <div className="item">
                            <h2 className='services-card-title'>Media</h2>
                            <p className='services-subtitle'>item subtitle</p>
                        </div>
                    </div>
                </LazyLoad>

                <LazyLoad offset={-350} throttle={500}>
                    <div className="services-card four columns animate__animated animate__fadeInDown">
                        <div className="item">
                            <h2 className='services-card-title'>Marketing</h2>
                            <p className='services-subtitle'>item subtitle</p>
                        </div>
                    </div> 
                </LazyLoad>  

            </div>
        </div>
    </div>
    </LazyLoad>
);

export default Services;