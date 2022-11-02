import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img2 from "../../../public/Images/m13.jpg"
import Slider from "react-slick"
import img3 from "../../../public/Images/m11.jpg"
import img4 from "../../../public/Images/m12.jpg"
import img1 from "../../../public/Images/m14.jpg"
import styles from "../styles/contact.module.css"
import Link from 'next/link'
import Form from './components/UI/Form'
import SectionSub from './components/UI/SectionSub'
import Service from './components/UI/Service'



function Contact() {
    return <section id="contact" className={`{styles.contact} pt-0  `}>

        <Service />

        <Container>

            <Row className='pt-5'>
                <Col lg="6" md="6">
                    <SectionSub subtitle="Contact Us" />
                    <h3>Contact With ME</h3>
                    <p>Lorem ipsum is th emost coomen text use for the the lazy jumps over the llazy dog the sdog is very kter nak hte lazy dog quick lazy dog jumps over the lazy kutta.</p>

                    <ul className={styles.contact_info}>
                        <li className={styles.info_item}  >
                            <span> <i className="ri-map-pin-line"></i>   </span>
                            <p>
                                VPO Pabra(Hisar) -- Haryana
                            </p>


                        </li>
                        <li className={styles.info_item}>
                            <span> <i className="ri-mail-line"></i>   </span>
                            <p>
                                sandyprogit@gmail.com
                            </p>

                        </li>
                        <li className={styles.info_item}>
                            <span> <i className="ri-phone-line"></i>   </span>
                            <p>
                                +91 9466440136 <br />
                                +91 8059559914


                            </p>
                        </li>
                    </ul>

                    <div className={styles.contact_links}>
                        <a href="https://www.youtube.com/channel/UC4cFpeLos53SzUmghsWxAYg/" >
                            <i className="ri-youtube-line"></i>
                        </a>
                        <a href="https://github.com/SandeepPabraGit/" >
                            <i className="ri-github-line"></i>
                        </a>
                        <a href="http://www.facebook.com/axya.parjapati" >
                            <i className="ri-facebook-line"></i> </a>
                        <a href="http://www.linkedin.com/in/sandeep-verma-7860b1248" >
                            <i className="ri-linkedin-line"></i> </a>
                        <a href="http://www.instagram.com/sandeep_kalash/" >
                            <i className="ri-instagram-line"></i> </a>





                    </div>

                </Col>


                <Col lg="6" md="6">

                    <Form />

                </Col>
            </Row>
        </Container>



    </section>
}

export default Contact