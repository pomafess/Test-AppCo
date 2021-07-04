import React from 'react';

import Logo from '../../../../shared/components/Logo';

import s from './UserFooter.module.scss'


const UserFooter = () => {
    return (
        <div className={s.bkg}>
        <div className={s.container}>
        <footer className={s.footer}>
                <div className={s.flexbox}>
                    <Logo className={s.logo}/>
                    <p className={s.text}>All rights reserved by ThemeTags</p>
                    <p className={s.text}>Copyrights &copy; 2019.</p>
                </div>
            </footer>
        </div>
        </div>
    )
};

export default UserFooter;