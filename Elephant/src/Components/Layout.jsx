import React from 'react'
import Header from './Pages/Header/Header.jsx'
import Footer from './Pages/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
      
    </>
  )
}

export default Layout
