import React from 'react';
import { Link } from 'react-router-dom';
import phone from './phone.png';
import Button from '../../shared/components/Button'
import Logo from '../../shared/components/Logo'
import s from './Hero.module.scss';


const Hero = () => {
  return (
    <div className={s.container}>
       <header className={s.header}>
          <div className={s.wrapp}>
            <div  className={s.headerLogo}><Logo>AppCo</Logo></div>
            <h1 className={s.headerTitle}>
            <span className={s.span}>Brainstorming </span>for desired perfect
             Usability
            </h1>
            <p className={s.description}>
            Our design projects are fresh and simple and will benefit your
            business greatly. Learn more about our work!
            </p>
        <Link to="/users">
          <Button className={s.button}>Views Stats</Button>
        </Link>
      </div>
      <div className={s.iphone}>
        <img className={s.iphone} alt="iphone" src={phone} width="400" />
      </div>
      </header>
      </div>
  );
};
   

export default Hero;