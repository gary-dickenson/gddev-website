import * as React from 'react';
import '../Home.scss';
import AnimatedKeySkills from './AnimatedKeySkills';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Header/>
            <AnimatedKeySkills/>
            <Footer/>
        </div>
    );
};

export default Home;
