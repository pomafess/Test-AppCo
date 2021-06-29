import { React, useState, useEffect } from 'react';
import {useDispatch, shallowEqual, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getBlocks } from "../../../../redux/table/operations";
import {getTableList} from "../../../../redux/table/selectors"

import s from './Table.module.scss'

const Table = () => {
        const dispatch = useDispatch()
        useEffect(() => {
        dispatch(getBlocks(1, 50))
        }, [dispatch]);
    
    const users = useSelector(getTableList, shallowEqual);
    const [user, setUser] = useState(null)
    const onRowSelect = row => (
    setUser(row)
    )
    console.log(user)
    
    
    return (
      <div className={s.container}>
        <h2 className={s.tableTitle}>Users Statistics</h2>
        <table className="table table-striped">
          <thead className={s.headRow}>
          <tr>
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
            <tr key={id} className={s.userRow} onClick={onRowSelect.bind(null, {id, first_name, last_name})}>
              <td className={s.td}>{id}</td>
              <td className={s.td}>{first_name}</td>
              <td className={s.td}>{last_name}</td>
              <td className={s.td}>{email}</td>
              <td className={s.td}>{gender}</td>
              <td className={s.td}>{ip_address}</td>
              <td className={s.td}>{total_clicks}</td>
              <td className={s.td}>{total_page_views}</td>
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