import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import styles from "../../../styles/portfolioItem.module.css"

const PortfolioItem = (props) => {
    const { title, img, liveUrl, keyword } = props.item


    return <div className={styles.portfolio_item}>
        <div className='bg-transparent'>
            <h6>
                {title}
            </h6>
            {
                keyword.map((item, index) => (
                    <span className={styles.portfolio_keyword} key={index}>
                        {item}

                    </span>
                ))
            }
        </div>


        <div className={styles.portfolio_img}>

            <Image alt="loding img" src={liveUrl} width="380" height="250" />

        </div>



        <div className={styles.portfolio_live}>

            <button className="primary_btn bg-transparent">

                <Link href="{img}">Launch</Link>
            </button>


        </div>

    </div>
}

export default PortfolioItem