import React from 'react'
import styles from './ProductCard.module.css'
export default function ProductCard() {
  return (
    <div className={styles.main}>
      <div className={styles.box1}>
        <img src="../../images/sony 720N.png" alt="image" className={styles.pic}/>
      </div>
      <div className={styles.box2}>
        <span>boAt Rockerz 551ANC</span>
        <span>Price - ₹ 3,000</span>
        <span><span>Blue</span> | <span>On-ear headphone</span></span>
      </div>
     
    </div>
  )
}
