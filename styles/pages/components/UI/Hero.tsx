

import React from 'react'
import SectionSub from './SectionSub'
import styles from '../../../styles/hero.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import heroImg from '../../../public/Images/m11.jpg'
import { Button } from '@mui/material'

const Hero = () => {
  return <section className={styles.hero}>
<Container>
  <Row >
    <Col lg="6" md="6">
      <div className={styles.hero_content}>
   <SectionSub  subtitle="Hello "/>
   <h2 className='my-3'> I am Sandeep Verma </h2>
   <h5 className='mb-4'>FRONT-END DEVELOPER</h5>
   <p>
   Loremn this practical next.js project tutorial, Im going to teach you, step-by-step, how to create  a fully next.js responsive portfolio website  fro
    

   </p>
   <div className="my-4">
    <button className='primary_btn'><Link href="contact">
    Hire Me
    </Link></button>

    <button className='secondary_btn'><Link href="skill">
Downlond CV    </Link></button>


   </div>
      </div>
    </Col>


    <Col lg="6" md="6" className='d-flex
    justify-content-center'>
      <div className={styles.hero_img}>
        <Image alt='loading' src={heroImg} width="400" height="400"/>
      
    <Link href="http://www.linkedin.com/in/sandeep-verma-7860b1248">
      
        <div className={styles.hero_skill}>
<h6>Skills</h6>
<span > <i className='ri-bar-chart-line'></i>  </span>
<span > <i className='ri-bar-chart-line'></i>  </span>
<span > <i className='ri-bar-chart-line'></i>  </span>
<span > <i className='ri-bar-chart-line'></i>  </span>
<span > <i className='ri-bar-chart-line'></i>  </span>
<span > <i className='ri-bar-chart-line'></i>  </span>

      </div>

      </Link>

      <div className={styles.hero_experince}> 
<span>  <i className="ri-lightbulb-flash-line"></i> </span>
<div className='bg-transparent'>
  <h6>Experience</h6>
  <h5>1 Year</h5>
</div>
      </div>
      
      </div>
    </Col>

  </Row>
</Container>


  </section>
}

export default Hero
