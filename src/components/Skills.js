import * as React from 'react'
import { useEffect, useState } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../styles/Skills.scss'
import { animated, useTransition } from 'react-spring'

const yearsExperience = () => {
  let startDate = new Date(2005, 4, 1)
  let currentDate = new Date()
  let yearsDiff = currentDate.getFullYear() - startDate.getFullYear()
  return yearsDiff
}

const keySkills = [
  {
    id: 1,
    title: 'Java',
    detail:
      'Something about Java Something about Java Java Something about Java Java Something about ' +
      'Java Java Something about Java Java Something about Java Java Something about Java Java ' +
      'Something about Java Java Something about Java Java Something about Java Java Something about ' +
      'Java Java Something about Java Java Something about Java Java Something about Java Java ' +
      'Java Java Something about Java Java Something about Java Java Something about Java Java ' +
      'Something about Java Java Something about Java Java Something about Java Java Something about ' +
      'Java Java Something about Java Java Something about Java Java Something about Java Java ' +
      'Something about Java Java Something about Java'
  },
  {
    id: 2,
    title: 'Spring',
    detail:
      'Something about SpringSomething about SpringSomething about SpringSomething about SpringSomething'
  },
  {
    id: 3,
    title: 'Dropwizard',
    detail:
      'Something about DropwizardSomething about DropwizardSomething about DropwizardSomething'
  },
  {
    id: 4,
    title: 'React',
    detail:
      'Something about ReactSomething about ReactSomething about ReactSomething about ReactSomething'
  },
  { id: 5, title: 'Kafka', detail: 'Something about Kafka' },
  { id: 6, title: 'Microservices', detail: 'Something about Microservices' },
  { id: 7, title: "RESTful API's", detail: "Something about RESTful API's" },
  {
    id: 8,
    title: 'Continuous Integration',
    detail: 'Something about Continuous Integration'
  },
  { id: 9, title: 'Node.js', detail: 'Something about Node.js' },
  { id: 10, title: 'Selenium', detail: 'Something about Selenium' },
  {
    id: 11,
    title: [yearsExperience() + ' Years Experience'],
    detail: 'Something about Experience'
  }
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
      from: { opacity: 0, width: '0vw' },
      enter: { opacity: 1, width: '40vw' },
      leave: { opacity: 1, width: '40vw' },
      config: {
        duration: 750,
        mass: 5,
        tension: 200,
        friction: 0,
        clamp: true
      }
    }
  )

  return fadingTextPropsTransition.map(({ item, props, key }) => (
    <animated.div
      className="animated-area"
      key={'main_' + key}
      style={{ ...props }}
      onMouseEnter={toggle}
      onMouseLeave={toggle}
    >
      <p className="skill-title">{item.title}</p>
      <hr className="sep" />
      {/*<p className="skill-detail">{item.detail}</p>*/}
    </animated.div>
  ))
}
