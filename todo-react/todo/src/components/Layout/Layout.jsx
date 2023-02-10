import React from 'react'
import Header from './Header';
import Navigation from './Navigation';

import s from './Layout.module.scss';

import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <Header />
      <div className={s.container}>
        <Navigation />
        <div className={s.outlet}><Outlet /></div>
      </div>
    </>
  )
}

export default Layout