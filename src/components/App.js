import React, { Component } from 'react';
import Landing from './Landing';
import Stats from './Stats';
import Services from './Services';
import Footer from './Footer';

export default class App extends Component {
    render() {
        return (
            <div>
                <Landing />
                <Stats />      
                <Services />
                <Footer />
            </div>
        )
    }
};
