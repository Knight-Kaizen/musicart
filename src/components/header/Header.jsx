import React from 'react'
import styles from './Header.module.css'
export default function Header() {
    function handleClick(page){
        console.log('go to ', page);
    }
  return (
    <div className={styles.main}>
        <div className={styles.left}>
        <img src="../../images/phone.png" alt="icon"  className={styles.icon1}/>
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
        <span onClick={() => handleClick('signup')}  className={styles.route}>Signup</span>  
        </div>
        
        
            
    </div>
  )
}
