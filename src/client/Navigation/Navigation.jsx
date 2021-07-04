import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.scss'
const Navigation = ({text}) => {
    return (
      <div>
        <nav className={s.nav}>
        <ul className={s.navList}>
          <li className={s.liItem}>
            <NavLink
                exact
                to='/'
                activeClassName={s.active}
                className={s.liItemLink}
             >
              Main page &gt;
            </NavLink>
          </li>
          <li className={s.liItem}>
            <NavLink
                exact
                to='/users'
                activeClassName={s.active}
               className={s.liItemLink}
            >Users statistics &gt;
            </NavLink>
          </li>
          <li className={s.liItem}>
            <NavLink
                exact
                to='/users/:id'
                activeClassName={s.active}
              className={s.liItemLink}
            >{text}
            </NavLink>
          </li>
        </ul>
      </nav>
      </div>
    )
}
export default Navigation