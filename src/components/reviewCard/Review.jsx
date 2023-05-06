import React from 'react'
import styles from './Review.module.css'
export default function Review() {
  return (
    <div className={styles.main}>
      <img src="../../images/sony 720N.png" alt="mage-1" className={styles.image1}/>
      <span className={styles.text1}>Sony WH-CH720N</span>
      <span className={styles.text2}>Clour : Black</span>
      <span className={styles.text2}>In Stock</span>
    </div>
  )
}
