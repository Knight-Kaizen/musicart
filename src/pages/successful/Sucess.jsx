import React from 'react'
import styles from './Sucess.module.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import TitleBar from '../../components/title/TitleBar'
export default function Sucess() {
  return (
    <div className={styles.main}>
      <Header/>
      <TitleBar/>
      <section className={styles.box1}>
        <div className={styles.box2}>
            <img src="../../images/confetti 1.png" alt="image-1" className={styles.image1} />
            <span className={styles.text1}>Order is placed successfully!</span>
            <span className={styles.text2}>You  will be receiving a confirmation email with order details</span>
            <span className={styles.text3}>Go back to Home page</span>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
