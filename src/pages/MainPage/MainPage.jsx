import React from 'react';
import Hero from '../../client/Hero';
import AboutUs from '../../client/AboutUs';
import Footer from '../../client/Footer/components/Footer'
import s from './MainPage.module.scss'

const MainPage = () => {

    return (
        <section className={s.main}>
            <Hero />
            <AboutUs />
            <Footer />
        </section>
    )
}

export default MainPage;
