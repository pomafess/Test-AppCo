import { React, useEffect } from 'react';
import {useDispatch, shallowEqual, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { getBlocks } from "../../../../redux/table/operations";
import {getTableList} from "../../../../redux/table/selectors";

import s from './Table.module.scss'

const Table = () => {
        const dispatch = useDispatch()
        useEffect(() => {
        dispatch(getBlocks(1, 50))
        }, [dispatch]);
    
    const users = useSelector(getTableList, shallowEqual);

    return ( 
      <div className={s.container}>
        <h2 className={s.tableTitle}>Users Statistics</h2>
        <table className="table table-striped">
          <thead className={s.headRow}>
          <tr  className={s.tr}>
            <th className={s.th}>Id</th>
            <th className={s.th}>First name</th>
            <th className={s.th}>Last Name</th>
            <th className={s.th}>Email</th>
            <th className={s.th}>Gender</th>
            <th className={s.th}>IP Address</th>
            <th className={s.th}>Total clicks</th>
            <th className={s.th}>Total page views</th>
          </tr>
          </thead>
          <tbody className={s.tableBody}>
                    {users && users.map(({ id, first_name, last_name, email, gender, ip_address, total_clicks, total_page_views}) => (
                      <tr key={uuidv4()} className={s.userRow}>
             <td className={s.td}><Link className={s.tdLink} to={`/users/${id}`}> {id}</Link></td>
              <td className={s.td}><Link className={s.tdLink} to={`/users/${id}`}>{first_name}</Link></td>
              <td className={s.td}><Link className={s.tdLink} to={`/users/${id}`}>{last_name}</Link></td>
              <td className={s.td}><Link className={s.tdLink} to={`/users/${id}`}>{email}</Link></td>
              <td className={s.td}><Link className={s.tdLink} to={`/users/${id}`}>{gender}</Link></td>
              <td className={s.td}><Link className={s.tdLink} to={`/users/${id}`}>{ip_address}</Link></td>
              <td className={s.td}><Link className={s.tdLink} to={`/users/${id}`}>{total_clicks}</Link></td>
              <td className={s.td}><Link className={s.tdLink} to={`/users/${id}`}>{total_page_views}</Link></td>
            </tr>
          ))}
          </tbody>
        </table>
        </div>
        
    )
}

Table.defaultProps = {
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
    ip_address: '',
    total_clicks: null,
    total_page_views: null
}

Table.propTypes = {
    id: PropTypes.number,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    gender: PropTypes.string,
    ip_address: PropTypes.string,
    total_clicks: PropTypes.number,
    total_page_views: PropTypes.number
}

export default Table;