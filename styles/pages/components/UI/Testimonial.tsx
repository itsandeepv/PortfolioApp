import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img2 from "../../../public/Images/m13.jpg"
import SectionSub from './SectionSub'
import Slider from "react-slick"
import img3 from "../../../public/Images/m11.jpg"
import img4 from "../../../public/Images/m12.jpg"
import img1 from "../../../public/Images/m14.jpg"
import styles from "../../../styles/teatimonial.module.css"



const Testimonial = () => {


    const settings = {
        dots: false,
        speed: 1000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        autoplay: true
    }


    return <section id="testimonial">
        <Container>
            <Row>



                <Col lg="6" md="6" className="p-5 d-flex justify-content-center">
                    <div className={styles.testimonial_demo}>
                        <Image src={img2} alt="londing img" width="400" height="400" />

                    </div>
                </Col>


                <Col lg="6" md="6">

                    <SectionSub subtitle="Testimonial" />
                    <h4 className="my-4">What my client says</h4>

                    <Slider {...settings}>
                        <div className={styles.testimonial_item}>
                            <div className={styles.testimonial_client}>



                                <Image src={img2} alt="slider" width="50" height="50" />


                                <div>
                                    <h6>Pradeep Kumar</h6>
                                    <h6>Software Engineer</h6>
                                </div>

                            </div>
                            <p>
                                Loremn this practical next.js project tutorial, I going to teach you, step-by-step, how to create a fully next.js responsive portfolio website fro
                                oremn this practical next.js project tutorial, Im going to teach you, step-by-step, how to create a fully next.js responsive portfolio website fro




                            </p>


                        </div>





                        <div className={styles.testimonial_item}>
                            <div className={styles.testimonial_client}>



                                <Image src={img4} alt="slider" width="50" height="50" />


                                <div>
                                    <h6>Vikash Kumar</h6>
                                    <h6>App Devloper</h6>
                                </div>

                            </div>
                            <p>
                                Loremn this practical next.js project tutorial, going to teach you, step-by-step, how to create a fully next.js responsive portfolio website fro
                                oremn this practical next.js project tutorial,  going to teach you, step-by-step, how to create a fully next.js responsive portfolio website fro

                            </p>


                        </div>
                        <div className={styles.testimonial_item}>
                            <div className={styles.testimonial_client}>



                                <Image src={img1} alt="slider" width="50" height="50" />


                                <div>
                                    <h6>Golli verma </h6>
                                    <h6>Web Developer</h6>
                                </div>
                            </div>
                            <p>
                                Loremn this practical next.js project tutorial, Im going to teach you, step-by-step, how to create a fully next.js responsive portfolio website fro
                                oremn this practical next.js project tutorial, Im going to teach you, step-by-step, how to create a fully next.js responsive portfolio website fro
                            </p>


                        </div>
                        <div className={styles.testimonial_item}>
                            <div className={styles.testimonial_client}>



                                <Image src={img3} alt="slider" width="50" height="50" />


                                <div>
                                    <h6>Vikram singh</h6>
                                    <h6>Finencial Accountant</h6>
                                </div>

                            </div>
                            <p>
                                Loremn this practical next.js project tutorial, Im going to teach you, step-by-step, how to create a fully next.js responsive portfolio website fro
                                oremn this practical next.js project tutorial, Im going to teach you, step-by-step, how to create a fully next.js responsive portfolio website fro




                            </p>


                        </div>
                        <div className={styles.testimonial_item}>
                            <div className={styles.testimonial_client}>



                                <Image src={img4}

                                    className="rounded-2"

                                    alt="slider" width="50" height="50" />

                                <div>
                                    <h6>Naresh Kumar</h6>
                                    <h6>Menagment Exicutive</h6>
                                </div>

                            </div>
                            <p>
                                Loremn this practical next.js project tutorial,going to teach you, step-by-step, how to create a fully next.js responsive portfolio website fro
                                oremn this practical next.js project tutorial,going to teach you, step-by-step, how to create a fully next.js responsive portfolio website fro
                            </p>


                        </div>


                    </Slider>




                </Col>




            </Row>


        </Container>




    </section>
}

export default Testimonial