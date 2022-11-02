import React from 'react'

import SectionSub from './SectionSub'
import styles from '../../../styles/skill.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import img1 from "../../../public/Images/m11.jpg"






const Skill = () => {
    return <section id='skill' className={styles.skill_container}>
        <Container>
            <Row>
                <Col lg="6" md="6">
                    <div className={styles.skill_site}>
                        <SectionSub subtitle="My Skills" />
                        <h3>My Skill Site Is</h3>
                        <div className={styles.skill_item}>
                            <div>
                                <span><b>Career Objective :</b></span> <br />
                                <p className='py-3'>
                                    To work within an organization offering a dynamic professional environment which will help me to achieve the goals
                                    of the organization and simultaneously enhance my skills and knowledge.

                                </p>

                            </div>

                            <div >
                                <span><b>Work Experience :</b></span> <br />
                                <p className="py-3">

                                    ● GroInfo Tech, Sirsa (Feb-2020 – Feb-2021 )
                                </p>
                            </div>

                            <div >
                                <span><b>Skills :</b></span> <br />
                                <p className="py-3">
                                    ● HTML,CSS. <br />
                                    ● JAVASCRIPT. <br />
                                    ● REACTJS ,NEXTJS . <br />
                                    ● EXPRESS.JS ,MONGODB . <br />
                                    ● BOOTSTRAP METERIAL UI. <br />


                                    ● Microsoft Office, Microsoft Excel, Microsoft Publisher, Adobe Photoshop, Graphic
                                    Designer ETC.
                                </p>
                            </div>
                            <div >
                                <span><b>To Visit My LinkedIn Profile</b></span> <br />
                                <p className="py-3">

                                <button className='primary_btn my-2'> <Link  href="http://www.linkedin.com/in/sandeep-verma-7860b1248">Visit</Link> </button>  <br />
                                </p>
                            </div>





                        </div>
                    </div>
                </Col>
                <Col lg="6" md="6">

<div className="p-1">

                    <div className={styles.skill_img}>

                        <Image src={img1} alt="londing img" height="350" width="250" />

                    </div>
                    <div className={styles.skill_project} >
                                <span><b>Recently Build Websites</b></span> <br />
                                <p className="py-3">
                                   <button className='primary_btn my-2'> <Link  href="https://rssact.in/">SPORTS WEB </Link> </button>  <br />
                                   <button className='primary_btn my-2'> <Link  href="#">GAME WEB </Link> </button>  <br />
                                   <button className='primary_btn my-2'> <Link  href="https://dynamic-circle.computerevolution.in/">DYNAMIC-CIRCLE WEB </Link> </button>  <br />
                                                                   </p>
                            </div>




                            </div>
                </Col>
<Col>

<div className="d-flex justify-content-center">
                  
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



</div>

</Col>
            </Row>

        </Container>

    </section>
}

export default Skill