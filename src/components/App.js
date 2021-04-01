import React from 'react'
import { Route } from 'react-router'
import '../styles/App.scss'
import Layout from './Layout'
import About from './About'
import Home from './Home'
import { BrowserRouter, Switch } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}
