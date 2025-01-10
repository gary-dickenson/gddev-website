import { Component } from 'react'

const HeaderComponent = React.lazy(() => import('./Header'))
const FooterComponent = React.lazy(() => import('./Footer'))

class Layout extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <main id="containers" className="containers">
          {this.props.children}
        </main>
        <FooterComponent />
      </div>
    )
  }
}

export default Layout
