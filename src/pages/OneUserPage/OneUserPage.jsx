import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import Header from '../../client/Header/components/Header';
import UserFooter from '../../client/Footer/components/UserFooter'
import { getStatistics, getBlocks } from '../../redux/table/operations';
import {getTableList} from "../../redux/table/selectors";
import Navigation from '../../client/Navigation';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import s from './OneUserPage.module.scss'

const OneUserPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBlocks(1, 1000))
  }, [dispatch]);
  
  useEffect(() => {
  dispatch(getStatistics(id))
  }, [dispatch]);

  const users = useSelector(getTableList, shallowEqual);

  const statics = useSelector(state => state.users.statistic, shallowEqual);

  let newArray = users.filter(user => id.includes(user.id))

  newArray = newArray.splice(newArray.length - 1,1);
  
  const title = newArray.map(user => <span key={uuidv4} >{user.first_name}<span>{user.last_name}</span></span> )
  return (
    <>
      <Header/>
    <section className={s.container}>
    <Navigation text={title}/>
    <h2 className={s.name}>{title}</h2> 
    <h3 className={s.stats}>Clicks</h3>
      <LineChart
      width={1200}
      height={300}
      data={statics}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="clicks"
        stroke="#3A80BA"
        activeDot={{ r: 8 }}
      />
    </LineChart>
    <h3 className={s.stats}>Views</h3>
    <LineChart
      width={1200}
      height={300}
      data={statics}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="page_views"
        stroke="#3A80BA"
        activeDot={{ r: 8 }}
      />
    </LineChart>
      </section>
      <UserFooter/>
      </>
  )
}
export default OneUserPage