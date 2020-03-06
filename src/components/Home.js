import * as React from 'react'
import * as ReactAnimation from 'react-animation'
import '../Home.scss'
const { AnimateOnChange, HideUntilLoaded } = ReactAnimation

const { useState, useEffect } = React

const Output = () => {
  const words = [
    'Java',
    'Spring',
    'Dropwizard',
    'React',
    'Kafka',
    'Microservices',
    'RESTful API\'s',
    'Continuous Integration',
    'Node.js',
    'Selenium',
    'RESTful API\'s',
    yearsExperience() + ' Years Experience'
    ]

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (current === words.length - 1) {
        setCurrent(0)
      } else {
        setCurrent(current + 1)
      }
    }, 3000);
    return (() => {
      clearInterval(interval)
    })
  })

  return (
    <div>
      <h1><AnimateOnChange animationOut="bounceOut" animationIn="bounceIn" durationOut="500">{words[current]}</AnimateOnChange></h1>
    </div>
  )
}

const yearsExperience = () => {
  let startDate = new Date(2005,4,1)
  let currentDate = new Date()
  let yearsDiff =  currentDate.getFullYear() - startDate.getFullYear()
  return yearsDiff
}

const email = 'info@gddevltd.co.uk'
const telephone = '07809 261 617'

const Home = () => {
  return (
    <div>
      <h1>GD Dev Ltd</h1>
      <h2>IT Consultancy</h2>
      <Output/>
      <ul>
        <li><a href={'tel: ' + telephone}>{telephone}</a></li>
        <li><a href={'mailto: ' + email}>{email}</a></li>
      </ul>
      </div>
  )
}

export default Home