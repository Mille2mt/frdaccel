import React from 'react';

const Services = () => (
    <div className='services'>
        <div className="container">
            <div className="row">
                <div className="services-card four columns">
                    <h4 className="services-title">Our services</h4>
                    <p className="services-info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime delectus harum incidunt enim fugiat facilis itaque, labore dolor tempora voluptate in minus esse et consequatur, eum commodi impedit mollitia iusto.</p>
                </div>
                <div className="services-card four columns">
                    <div className="item">
                        <h2 className='services-card-title'>Projects</h2>
                        <p className='services-subtitle'>item subtitle</p>
                    </div>
                    <div className="item">
                        <h2 className='services-card-title'>Media</h2>
                        <p className='services-subtitle'>item subtitle</p>
                    </div>
                </div>
                <div className="services-card four columns">
                    <div className="item">
                        <h2 className='services-card-title'>Marketing</h2>
                        <p className='services-subtitle'>item subtitle</p>
                    </div>
                    <div className="item">
                        <h2 className='services-card-title'>Consulting</h2>
                        <p className='services-subtitle'>item subtitle</p>
                    </div>  
                </div>   
            </div>
        </div>
    </div>
);

export default Services;