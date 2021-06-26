import React from 'react';
import { Link } from 'react-router-dom';
import phone from './phone.png';
import Button from '../../shared/components/Button'
import s from './Hero.module.scss';


const Hero = () => {
    return (
    <>
    <div className={`${s.container} ${s.wrapper}`}>
        <div className={s.flexcont}>
            <h1 className={s.title}>Brainstorming for desired perfect Usability</h1>
            <p className={s.text}>Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
            <Link to="/users"><Button className={s.button}>Views Stats</Button></Link>
        </div>
        <div className={s.flexcont}>
            <img src={phone} alt="phone" className={s.image} />
        </div>
     </div>
    </>)
}

export default Hero;