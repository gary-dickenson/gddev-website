import React from 'react'
import '../styles/App.scss'
import Layout from './Layout'
import About from './About'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </Layout>
    </Router>
  )
}
