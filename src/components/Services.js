import React from 'react';
import LazyLoad from 'react-lazyload';

const Services = () => {

const imgUrl = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
const divStyle = {
    backgroundImage: 'url(' + imgUrl + ')'
    }

return (

<LazyLoad offset={400}>

    <div className='services' style={divStyle}>
        <div className="container">
            <div className="row">

                <LazyLoad offset={-100} height={300}>
                    <div className="services-card four columns animated fadeInLeft">
                        <h4 className="services-title">Our services</h4>
                        <p className="services-info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime delectus harum incidunt enim fugiat facilis itaque, labore dolor tempora voluptate in minus esse et consequatur, eum commodi impedit mollitia iusto.</p>
                    </div>
                </LazyLoad>

                <LazyLoad offset={-275} debounce={true} throttle={500}>
                    <div className="services-card four columns animated fadeInDown">
                        <div className="item">
                            <h2 className='services-card-title'>Projects</h2>
                            <p className='services-subtitle'>item subtitle</p>
                        </div>
                    </div>
                </LazyLoad>

                <LazyLoad offset={-300} debounce={true} throttle={500}>
                    <div className="services-card four columns animated fadeInDown">
                        <div className="item">
                            <h2 className='services-card-title'>Marketing</h2>
                            <p className='services-subtitle'>item subtitle</p>
                        </div>
                    </div> 
                </LazyLoad>  

                <LazyLoad offset={-325} debounce={true} throttle={500}>
                    <div className="services-card four columns animated fadeInDown">
                        <div className="item">
                            <h2 className='services-card-title'>Media</h2>
                            <p className='services-subtitle'>item subtitle</p>
                        </div>
                    </div> 
                </LazyLoad>  

            </div>
        </div>
    </div>
</LazyLoad>
)
};

export default Services;