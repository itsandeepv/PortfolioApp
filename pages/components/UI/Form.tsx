import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img2 from "../../../public/Images/m13.jpg"
import SectionSub from './SectionSub'
import Slider from "react-slick"
import img3 from "../../../public/Images/m11.jpg"
import img4 from "../../../public/Images/m12.jpg"
import img1 from "../../../public/Images/m14.jpg"
import styles from "../../../styles/form.module.css"
import Link from 'next/link'



const Form = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setpass] = useState("")
  const [number, setnumber] = useState('')
  const [message, setmessage] = useState("")

  const [alldata, setAllData] = useState([])







  const data = { name, email, pass, number, message }








  function formHandle(e) {
    e.preventDefault();

    if (data.name === "") {

      document.querySelector("#error").innerHTML = "Please Enter Name First"
      alert("Please Enter Name")


    } else {
      document.querySelector("#error").innerHTML = ""

    }

    // if (isNaN(data.number)) {

    //   alert("Please Enter Valid Number")

    // }else{

    // }


    console.log(data);

    setAllData([...alldata, data])
    postdata()
  }


  const postdata = async () => {

    const url = "https://portfolio-6225a-default-rtdb.firebaseio.com/user.json"

    const post = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({data})

    }).then((res) => {
      console.log(res)

      if (res.status === 200) {
        alert("Thanks For Visit " + " " + data.name)
      } else {
        alert("error")
      }

    }).catch((error) => {
      alert(error)
    })


  }






  return <form className={styles.form_controls} method="POST" onSubmit={formHandle}>

    <div className={styles.form_group}>

      <input type="text" onChange={(e) => setName((e.target.value))} placeholder='Your Name' />
      <small className="text-danger my-1" id="error"></small>

    </div>




    <div className={styles.form_group}>

      <input type="email" onChange={(e) => setEmail((e.target.value))} placeholder='Your Email' />

    </div>

    <div className={styles.form_group}>

      <input type="password" placeholder='Password' onChange={(e) => setpass((e.target.value))} />

    </div>

    <div className={styles.form_group}>

      <input type="text" placeholder='Your Mobile Number' onChange={(e) => setnumber((e.target.value))} />

    </div>

    <div className={styles.form_group}>

      <textarea placeholder='Your Message' onChange={(e) => setmessage((e.target.value))}></textarea>

    </div>


    <button className="primary_btn" type='submit'>Send</button>
  </form>
}

export default Form