import { Link } from 'react-router-dom';

import s from './Logo.module.scss'

const Logo = () => {

  return (
    <>
     <Link to="/" className={s.logo}>AppCo</Link>
    </>
  );
}
export default Logo;