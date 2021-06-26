import React from 'react'
import { ReactComponent as Foto1 } from './foto1.svg';
import { ReactComponent as Foto2 } from './foto2.svg';
import { ReactComponent as Foto3 } from './foto3.svg';
import s from './AboutUs.module.scss';

const AboutUs = () => {
    return (
        <div className={s.container}>
            <section className={s.about}>
                <h2 className={s.title}>Why small business owners love AppCo?</h2>
                <p className={s.text}>Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                <ul className={s.list}>
                    <li className={s.item}>
                        <Foto1/>
                        <h3>Clean Design</h3>
                        <p>Increase sales by showing true dynamics of your website.</p>
                    </li>
                    <li className={s.item}>
                        <Foto2/>
                        <h3>Secure Data</h3>
                        <p>Build your online store’s trust using Social Proof & Urgency.</p>
                    </li>
                    <li className={s.item}>
                        <Foto3/>
                        <h3>Retina Ready</h3>
                        <p>Realize importance of social proof in customer’s purchase decision.</p>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default AboutUs;