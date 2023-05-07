import React, { useEffect, useState } from 'react'
import styles from './Header.module.css'
import useWindowResize from '../../hooks/useWindowResize';
import Searchbar from '../searchbox/Searchbar';

export default function Header() {

  const [mobileView, setMobileView] = useState();
  const { width } = useWindowResize();

  useEffect(()=>{
    console.log('changing', width);
    if(width >= 600)
    setMobileView(false);
    else
    setMobileView(true);
  }, [width])
  function handleClick(page) {
    console.log('go to ', page);
  }






  return (
    <>
    {!mobileView && <div className={styles.main}>
    <div className={styles.left}>
      <img src="../../images/phone.png" alt="icon" className={styles.icon1} />
      <span >912121131313</span>
    </div>
    <div className={styles.mid}>
      <span >Get 50% off on selected items</span>
      <span className={styles.bar}>|</span>
      <span >Shop Now</span>
    </div>
    <div className={styles.right}>
      <span onClick={() => handleClick('login')} className={styles.route} >Login</span>
      <span className={styles.bar}>|</span>
      <span onClick={() => handleClick('signup')} className={styles.route}>Signup</span>
    </div>
  </div>}
    {
      mobileView && 
      <div className={styles.mbox1}>
        <Searchbar/>
      </div>
    }
    </>

  )
}
