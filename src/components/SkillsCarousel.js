import * as React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../styles/SkillsCarousel.scss'
import { Carousel } from 'react-responsive-carousel'

const yearsExperience = () => {
  let startDate = new Date(2005, 4, 1)
  let currentDate = new Date()
  let yearsDiff = currentDate.getFullYear() - startDate.getFullYear()
  return yearsDiff
}

const keySkills = {
  'Java': 'Something about Java Something about Java Java Something about Java Java Something about ' +
    'Java Java Something about Java Java Something about Java Java Something about Java Java ' +
    'Something about Java Java Something about Java Java Something about Java Java Something about ' +
    'Java Java Something about Java Java Something about Java Java Something about Java Java ' +
    'Something about Java Java Something about Java',
  'Spring': 'Something about Spring',
  'Dropwizard': 'Something about Dropwizard',
  'React': 'Something about React',
  'Kafka': 'Something about Kafka',
  'Microservices': 'Something about Microservices',
  'RESTful API\'s': 'Something about RESTful API\'s',
  'Continuous Integration': 'Something about Continuous Integration',
  'Node.js': 'Something about Node.js',
  'Selenium': 'Something about Selenium',
  [yearsExperience() + ' Years Experience']: 'Something about Experience'
}

export default () => {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      {Object.entries(keySkills).map((value, index) => {
        return (<div>
          <div className="skill-header">
            <h1 key={index} className="skill-title">{value[0]}</h1>
          </div>
          <div>
            <hr className="sep"/>
          </div>
          <div><p key={index} className="skill-detail">{value[1]}</p>
          </div>
        </div>)
      })}
    </Carousel>
  )
}
