import React from 'react'
import styles from "../../../styles/subtitle.module.css"



const SectionSub = (props) => {
  return <>
  <h5 className={styles.section_sub}>
    {
        props.subtitle
    }
  </h5>
  </>
}

export default SectionSub
