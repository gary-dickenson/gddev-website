import * as React from 'react'
import { useEffect, useState } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../styles/Skills.scss'
import { animated, useTransition } from 'react-spring'
import { isMobile } from 'react-device-detect'

const yearsExperience = () => {
  let startDate = new Date(2005, 4, 1)
  let currentDate = new Date()
  let yearsDiff = currentDate.getFullYear() - startDate.getFullYear()
  return yearsDiff
}

const keySkills = [
  { id: 1, title: [yearsExperience() + ' Years Experience'] },
  { id: 2, title: 'Java' },
  { id: 3, title: 'Test Driven Development' },
  { id: 4, title: 'Spring Boot' },
  { id: 5, title: 'Microservices' },
  { id: 6, title: 'Self Taught' },
  { id: 7, title: 'Continuous Integration' },
  { id: 8, title: 'Docker' },
  { id: 9, title: "RESTful API's" },
  { id: 10, title: "Reactive Programming" },
  { id: 11, title: 'Automated Testing' },
  { id: 12, title: 'React' },
  { id: 13, title: 'Node.js' },
  { id: 14, title: 'Javascript' },
  { id: 15, title: 'Kafka' },
  { id: 16, title: 'Rust' },
  { id: 17, title: 'HashiCorp Consul' },
  { id: 18, title: 'HashiCorp Vault' },
  { id: 19, title: 'IOT' },
  { id: 20, title: 'OVH Cloud' }
]

export default () => {
  const [index, setIndex] = useState(0)
  const [isActive, setIsActive] = useState(true)

  const toggle = () => {
    setIsActive(!isActive)
  }

  useEffect(() => {
    let interval = null
    if (isActive) {
      interval = setInterval(() => {
        setIndex((index) =>
          index === Object.keys(keySkills).length - 1 ? 0 : index + 1
        )
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [isActive])

  const fadingTextPropsTransition = useTransition(
    keySkills[index],
    (item) => item.id,
    {
      from: { opacity: 0, width: '0%' },
      enter: { opacity: 1, width: '100%' },
      leave: { opacity: 1, width: '100%' },
      config: {
        duration: 1000,
        mass: 5,
        tension: 200,
        friction: 0,
        clamp: true
      }
    }
  )

  return fadingTextPropsTransition.map(({ item, props, key }) => (
    <animated.div
      className={`skills-container ${!isMobile ? 'can-pause' : ''} `}
      key={'main_' + key}
      style={{ ...props }}
      onMouseEnter={!isMobile ? toggle : null}
      onMouseLeave={!isMobile ? toggle : null}
    >
      <span className="skill-title">{item.title}</span>
      <hr />
    </animated.div>
  ))
}
