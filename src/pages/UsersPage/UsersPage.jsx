import React, { useState, useEffect } from 'react';

import Pagination from '../../client/Pagination';
import Navigation from '../../client/Navigation';
import Header from '../../client/Header/components/Header'
import Footer from "../../client/Footer/components/Footer";
import Table from '../../client/Table/components/Table'

import s from './UsersPage.module.scss'
const UsersPage = () => {
  
  return (
    <>
    <Header />
    <div className={s.container}>
      <section className={s.users}>
      <Navigation/>
      <Table/>
      <Pagination className={s.pagination}/>
      </section>
      </div>
      <Footer />
      </>
  )
}

export default UsersPage
