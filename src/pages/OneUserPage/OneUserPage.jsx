import React from 'react';
import Chart from '../../client/LineChart'
// import {useEffect} from 'react';
// import { useDispatch, shallowEqual, useSelector} from 'react-redux';

import s from './OneUserPage.module.scss'
const OneUserPage = () => {
    
  return (
    <section className={s.user}>
      <Chart />
      </section>
  )
}

export default OneUserPage
