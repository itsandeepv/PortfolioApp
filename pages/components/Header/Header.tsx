import React ,{useRef, useEffect} from 'react'
import styles from './header.module.css'
import { Container } from 'react-bootstrap'
import { display } from '@mui/system'
import Link from 'next/link'





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





const Header = () => {

const headerRef = useRef(null)

const menuRef = useRef(null)


const headerFunc =()=>{
  if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
    headerRef.current.classList.add(`${styles.header_shrink}`)
  } else{
    headerRef.current.classList.remove(`${styles.header_shrink}`)

  }
}




useEffect(()=>{
 window.addEventListener("scroll" , headerFunc)


 return ()=> window.removeEventListener("scroll", headerFunc)
},[])


const toggleMenu = ()=> menuRef.current.classList.toggle(`${styles.menu_active}`)



  return <header className={styles.header}  ref={headerRef} >  
    <Container className={styles.container}>
      <div className={styles.nav_wrapper}>
        <div className={styles.logo}>
          <h1>
           <span>San</span>deep 
          
          </h1>
        </div>



        {/* nav menu here */}

        <div className={styles.navigation} ref={menuRef} onClick={toggleMenu}>

          <div className={styles.nav_menu}>




            {
              NAV_LINK.map((item, index) =>
                <Link key={index} href={item.path} >{item.display}</Link>
              )
            }


            <div className={styles.nav_right}>
 <p className='d-flex align-item-center gap-3 mb-0'>
  <i className="ri-phone-line"/> +919466440136
 </p>


            </div>
          </div>

        </div>

   <span  className={styles.mobile_menu}>

     <i className="ri-menu-line" onClick={toggleMenu}></i>
   </span>


      </div>

    </Container>
  </header>

}

export default Header
