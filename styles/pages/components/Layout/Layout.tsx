import React, { Fragment } from 'react'
import Footer from '../footer/Footer'
import Header from "../Header/Header"

const Layout =(props)=> {
  return  <> 

  
<Header/>
 {props.children}

 <Footer/>
    </>
  
}

export default Layout
