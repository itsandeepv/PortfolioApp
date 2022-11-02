import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Tab } from 'react-bootstrap'
import SectionSub from './SectionSub'
import PortfolioItem from './PortfolioItem'
import styles from "../../../styles/portfolio.module.css"

import  portfolio  from '../Data/portfolio'
const Portfolio = () => {


    const [filter, setfilter] = useState("Mobile App");
    const [data, setData] = useState([])





    useEffect(() => {



 

        if (filter  === "Mobile App") {

            const res = portfolio.filter(item =>  item.category === filter)
           
            setData(res)

        }

 if (filter  === "Web Design") {
            
            const res = portfolio.filter((item) => item.category === filter)
           
            setData(res)

            
        }
        
        console.log(data);



    },[filter])




    const active = `${styles.tab_btn_active}`

    return <section id='portfolio'>

        <Container>
            <Row>

                <Col lg="6" md="6" className="mb-5">
                    <SectionSub subtitle="My Portfolio" />
                    <h4>Some of my distinguished works</h4>

                </Col>

                <Col lg="6" md="6">
                    <div className="text-end">
                        <button 
                        className={` ${
                            
                    filter === "Mobile App" ? active : "text-light"                        
                        } secondary_btn  `}
                        onClick={()=> setfilter("Mobile App")}
                        
                        >Mobile App</button>
                       
                        <button
                        
                        onClick={()=> setfilter("Web Design")}

                        className={` ${
                            filter === "Web Design" ? active : "text-light"                        
                        } secondary_btn  `}>Web Design</button>


                    </div>
                </Col>
                {
                    data.map((item, index) => (
                        <Col lg="4" md="4" key={item.id}>
                            <PortfolioItem item={item} />
                        </Col>
                    ))
                }



            </Row>

        </Container>
    </section>
}

export default Portfolio