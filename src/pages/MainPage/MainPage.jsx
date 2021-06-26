import React from 'react';
import Hero from '../../client/Hero';
import AboutUs from '../../client/AboutUs';
import s from './MainPage.module.scss'

const MainPage = () => {
 

    return (
        <section className={s.main}>
            <Hero />
            <AboutUs />
        </section>

    )

    
}

export default MainPage;
