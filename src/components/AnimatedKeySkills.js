import * as React from 'react';
import * as ReactAnimation from 'react-animation';
import '../styles/AnimatedKeySkills.scss';

const { AnimateOnChange } = ReactAnimation;

const { useState, useEffect } = React;

const yearsExperience = () => {
    let startDate = new Date(2005, 4, 1);
    let currentDate = new Date();
    let yearsDiff = currentDate.getFullYear() - startDate.getFullYear();
    return yearsDiff;
};

const keySkills = {
    'Java': 'Something about Java',
    'Spring': 'Something about Spring',
    'Dropwizard': 'Something about Dropwizard',
    'React': 'Something about React',
    'Kafka': 'Something about Kafka',
    'Microservices': 'Something about Microservices',
    'RESTful API\'s': 'Something about RESTful API\'s',
    'Continuous Integration': 'Something about Continuous Integration',
    'Node.js': 'Something about Node.js',
    'Selenium': 'Something about Selenium',
    [yearsExperience() + 'Years Experience']: 'Something about Java'
};

const AnimatedKeySkills = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (current === Object.keys(keySkills).length - 1) {
                setCurrent(0);
            } else {
                setCurrent(current + 1);
            }
        }, 5000);
        return () => {
            clearInterval(interval);
        };
    });

    return (
        <section className="mast">
            <h1>
                <AnimateOnChange
                    animationOut="bounceOut"
                    animationIn="bounceIn"
                    durationOut="500">
                    <header className="mast__header">
                        <h1 className="mast__title js-spanize">
                            {Object.entries(keySkills)[current][0]}
                        </h1>
                        <hr className="sep"/>
                        <p className="mast__text js-spanize">
                            {Object.entries(keySkills)[current][1]}
                        </p>
                    </header>
                </AnimateOnChange>
            </h1>
        </section>
    );
};

export default AnimatedKeySkills;
