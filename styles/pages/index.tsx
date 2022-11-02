

import { AppBar, MenuItem, MenuList } from '@mui/material';
import Link from 'next/link';
import React, { Fragment } from 'react'
import About from './components/UI/About';
import Contact from './components/UI/Contact';
import Hero from './components/UI/Hero';
import Portfolio from './components/UI/Portfolio';
import Service from './components/UI/Service';
import Testimonial from './components/UI/Testimonial';



function index() {
  return <Fragment>
  <Hero/>
  <Service/>

<About/>

<Portfolio />
<Testimonial />

<Contact/>

  </Fragment>
}

export default index;
