import React from 'react'
import styles from './CartItem.module.css'
export default function CartItem() {

  return (
    <div className={styles.main}>
      <div className={styles.box1}>
        <img src="../../images/sony 720N.png" alt="img-1" className={styles.image1}/>
      </div>
      <div className={styles.box2}>
        <span className={`${styles.text} ${styles.text1}`}>SONY WH-CH720N </span>
        <span className={`${styles.text} ${styles.text2}`}>Colour - Black</span>
        <span className={`${styles.text} ${styles.text2}`}>In stock</span>
      </div>
      <div className={styles.box3}>
        <span className={`${styles.text} ${styles.text1}`}>Price</span>
        <span className={`${styles.text}`}>₹3500</span>
         </div>
      <div className={styles.box4}>
        <span className={`${styles.text} ${styles.text1}`}>Quantity</span>
        <select className={styles.options}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
      </div>
      <div className={styles.box5}>
        <span className={`${styles.text} ${styles.text1}`}>Total</span>
        <span className={`${styles.text} `}>₹3500</span>
      </div>
    
    </div>
  )
}
