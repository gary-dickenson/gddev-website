import Header from './Header'
import Footer from './Footer'
import React, { Component } from 'react'

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <main id="containers" className="containers">
          {this.props.children}
        </main>
        <Footer />
      </div>
    )
  }
}

export default Layout
