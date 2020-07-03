import Header from './Header'
import Footer from './Footer'
import React, { Component } from 'react'

class Layout extends Component {
  render() {
    return (
      <div id="page-container" className="page-container">
        <Header />
        <main id="container" className="container">
          {this.props.children}
        </main>
        <Footer />
      </div>
    )
  }
}

export default Layout
