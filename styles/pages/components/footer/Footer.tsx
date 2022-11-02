import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './footer.module.css'










const NAV_LINK = [
  {
    path: "/",
    display: "Home"
  },



  {
    path: "#about",
    display: "About"
  },

  {
    path: "#services",
    display: "Services"
  },

  {
    path: "#contact",
    display: "Contact"
  },

  {
    path: "#portfolio",
    display: "Portfolio"
  },

]









const Footer = () => {


  const date = new Date();
  const year =date.getFullYear();




  return (

    <section>
      <Container>
        <Row className="my-5">
          {/* this is the footer top section */}
          <Col lg="6" className={styles.footer_menu}>
            <div className={styles.nav_menu}>




              {
                NAV_LINK.map((item, index) =>
                  <Link key={index} href={item.path} >{item.display}</Link>
                )
              }


            </div>

          </Col>

          <Col lg="6">
            <div className={styles.footer_creator}>

              <h6>Created By Sandeep Verma</h6>
            </div>
          </Col>
          <Col lg="12">
            {/* this is the footer buttom section */}
            <div className={styles.footer_copyright}>
              <p> &copy: CopyRight {year} - developed By Sandeep Verma
              All Right reserved.{""}
              </p>
            </div>



          </Col>

        </Row>
      </Container>


    </section>
  )
}

export default Footer
