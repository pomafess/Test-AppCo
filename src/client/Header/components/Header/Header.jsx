import React from 'react';
import Logo from '../../../../shared/components/Logo';

import s from './Header.module.scss'

const Header = () => {

  return (
    <>
      <header className={s.header}>
        <div className={s.container}>
          <Logo />
          </div>
      </header>
    </>  
  );
}
export default Header;