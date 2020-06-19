import React, { Component } from 'react';
import './styles/App.scss';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
    render () {
        return (
            <div className="main-container">
                <Header/>
                <main className="content-container">
                    <Home/>
                </main>
                <Footer/>
            </div>);
    }
}

export default App;
