import * as React from 'react';
import * as ReactAnimation from 'react-animation';
import '../Home.scss';

const { AnimateOnChange } = ReactAnimation;

const { useState, useEffect } = React;

const yearsExperience = () => {
    let startDate = new Date(2005, 4, 1);
    let currentDate = new Date();
    let yearsDiff = currentDate.getFullYear() - startDate.getFullYear();
    return yearsDiff;
};

const keySkills = [
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
];

const AnimatedKeySkills = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (current === keySkills.length - 1) {
                setCurrent(0);
            } else {
                setCurrent(current + 1);
            }
        }, 3000);
        return () => {
            clearInterval(interval);
        };
    });

    return (
        <div>
            <h1>
                <AnimateOnChange
                    animationOut="bounceOut"
                    animationIn="bounceIn"
                    durationOut="500"
                >
                    {keySkills[current]}
                </AnimateOnChange>
            </h1>
        </div>
    );
};

export default AnimatedKeySkills;
