import React from 'react';
import Logo from '../../../Logo';

import s from './Header.module.scss'

const Header = () => {

  return (
    <>
    <header className={`${s.header} ${s.container}`}>
     <Logo/>
      </header>
    </>  
  );
}
export default Header;