import React from 'react'
import { Link } from 'react-router-dom';

import s from './Navigation.module.scss'

const Navigation = () => {
    return (
      <div>
        <nav className={s.nav}>
        <ul className={s.navList}>
          <li className={s.liItem}>
            <Link
              to='/'
              className={s.liItemLink}
             >
              Main page &gt;
            </Link>
          </li>
          <li className={s.liItem}>
            <Link
              to='/users'
              className={s.liItemActive}
            >Users statistics
            </Link>
          </li>
        </ul>
      </nav>
      </div>
    )
}

export default Navigation