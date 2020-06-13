import React, { Component } from 'react';
import Home from './components/Home';
import './styles/App.scss';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
    render () {
        return (
            <div id="app">
                <Header/>
                <main>
                    <Home/>
                </main>
                <Footer/>
            </div>);
    }
}

export default App;
