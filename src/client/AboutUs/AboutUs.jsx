import React from 'react'
import { ReactComponent as Foto1 } from './foto1.svg';
import { ReactComponent as Foto2 } from './foto2.svg';
import { ReactComponent as Foto3 } from './foto3.svg';
import s from './AboutUs.module.scss';

const AboutUs = () => {
    return (
        <div className={s.container}>
            <section className={s.about}>
                <h2 className={s.title}>Why <span className={s.span}>small business owners <br/> love</span> AppCo?</h2>
                <p className={s.text}>Our design projects are fresh and simple and will benefit your business<br/>  greatly. Learn more about our work!</p>
                <ul className={s.list}>
                    <li className={s.item}>
                        <Foto1 className={s.img}/>
                        <h3 className={s.cardTitle}>Clean Design</h3>
                        <p className={s.cardText}>Increase sales by showing true dynamics of your website.</p>
                    </li>
                    <li className={s.item}>
                        <Foto2 className={s.img}/>
                        <h3 className={s.cardTitle}>Secure Data</h3>
                        <p className={s.cardText}>Build your online store’s trust using Social Proof & Urgency.</p>
                    </li>
                    <li className={s.item}>
                        <Foto3 className={s.img}/>
                        <h3 className={s.cardTitle}>Retina Ready</h3>
                        <p className={s.cardText}>Realize importance of social proof in customer’s purchase decision.</p>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default AboutUs;