import React, { Component } from 'react'
import Home from './components/Home'
import './styles/App.scss'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
  render () {
    return (
      <main>
        <header>
          <Header/>
        </header>
        <section className="content-container">
          <Home/>
        </section>
        <footer className="footer-container">
          <Footer/>
        </footer>
      </main>)
  }
}

export default App
