import React from 'react'
import Navbar from "./navbar/Navbar";
import Theme from './themes/Theme'
import { Outlet } from 'react-router';
const AppLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Theme/>
    </>
  )
}

export default AppLayout