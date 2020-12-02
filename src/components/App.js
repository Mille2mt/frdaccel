import React, { Component } from 'react';
import Landing from './Landing';
import Stats from './Stats';
// import Services from './Services'; removed for the time being
import Footer from './Footer';

export default class App extends Component {
    render() {
        return (
            <div>
                <Landing />
                <Stats />      
                
                <Footer />
            </div>
        )
    }
};
