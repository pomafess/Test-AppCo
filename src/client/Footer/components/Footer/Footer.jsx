import React from 'react';
import Logo from '../../../Logo';
import s from './Footer.module.scss'


const Footer = () => {
    return (
        <footer className={s.footer}>
            <Logo/>
        </footer>
    )
};

export default Footer;