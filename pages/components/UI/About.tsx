import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ServiceItem from './ServiceItem'
import styles from "../../../styles/about.module.css"
import SectionSub from './SectionSub'
import Image from 'next/image'

import img1 from "../../../public/Images/m12.jpg"
import img2 from "../../../public/Images/m13.jpg"
import img3 from "../../../public/Images/m14.jpg"
import img4 from "../../../public/Images/m11.jpg"
import Link from 'next/link'


const About = () => {
    return <section id="about">
        <Container>


            <Row>
                <Col lg="6"  className={styles.about_title}>
                    <SectionSub subtitle="About Me" />
                    <h3 className='mb-0 mt-4'>I Am Here</h3>
                    <h3 className=' mt-4'>to help your next project</h3>
                    <p>

                        Lorem ipaLoremn this practical next.js project tutorial, Im going to teach you, step-by-step, how to create a fully next.js responsive portfolio website fro

                        Loremn this practical next.js project tutorial, Im going to teach you, step-by-step, how to create a fully next.js responsive portfolio website fro



                    </p>


                    <div className={`d-flex align-item-center gap-5, ${styles.about_icon}`}>
                        <div>
                            <h6 className='d-flex align-item-center gap-3 fw-normal mt-3' >

                                <span>
                                    <i className="ri-checkbox-circle-line"></i>

                                </span>
                                Problem Solution
                            </h6 >



                            <h6 className='d-flex align-item-center gap-3 fw-normal ml-1 mt-3'>

                                <span>
                                    <i className="ri-checkbox-circle-line"></i>

                                </span>
                                Seacrch A lot   </h6>

                        </div>
                        <div>
                            <h6 className='d-flex align-item-center gap-3 fw-normal ml-1 mt-3' >

                                <span>
                                    <i className="ri-checkbox-circle-line"></i>

                                </span>
                                Creative Idea
                            </h6 >



                            <h6 className='d-flex align-item-center gap-3 fw-normal ml-1 mt-3'>

                                <span>
                                    <i className="ri-checkbox-circle-line"></i>

                                </span>
                                Heigh Quality

                            </h6>
                        </div>


                    </div>


                    <div className={`${styles.about_btn_box} mt-5`}>
                        <button className='primary_btn'><Link href="portfolio">
                            My Portfolio
                        </Link></button>

                        <button className='secondary_btn'><Link href="http://www.linkedin.com/in/sandeep-verma-7860b1248">
                            Downlond CV    </Link></button>




                    </div>



                </Col>

                <Col lg="6" className="d-flex justify-content-center align-item-center my-3">

                    <div className={` ${styles.about_imgGallery} d-flex gap-4 justify-content-end`}>
                        <div className='d-flex flex-column mb-3'>
                            <div className={`${styles.about_img} ${styles.about_imgbox}`}>
                                <Image src={img1} alt="londing img" />

                            </div>


                            <div className={`${styles.about_img} ${styles.about_imgbox}`}>
                                <Image src={img2} alt="londing img" />

                            </div>

                        </div>
                    
                    
                        <div className='d-flex flex-column mb-3'>
                            <div className={`${styles.about_img} ${styles.about_imgbox}`}>
                                <Image src={img3} alt="londing img" />

                            </div>


                            <div className={`${styles.about_img} ${styles.about_imgbox}`}>
                                <Image src={img4} alt="londing img" />

                            </div>

                        </div>
                    
                    
                    
                    
                    </div>


                </Col>

            </Row>
        </Container>



    </section>
}

export default About
