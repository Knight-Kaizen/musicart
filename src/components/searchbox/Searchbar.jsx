import React, { useState } from 'react'
import styles from './Searchbar.module.css'
export default function Searchbar() {
  const [showSuggestions, setShowSuggestions] = useState(false);
  return (
    <div className={styles.main}>
      <div className={styles.top}>
      <div className={styles.box1}>
        <img src="../../images/searchIcon.png" alt="search" className={styles.icon}/>
      </div>
      <div className={styles.box2}>
        <textarea className={styles.input1}
        placeholder='Search Product'
        spellCheck = 'false'
        ></textarea>
      </div>
      </div>
      {showSuggestions && <div className={styles.bottom}>
        <p>S1</p>
        <p>S1</p>
        <p>S1</p>
        
        </div>}
      
    </div>
  )
}
