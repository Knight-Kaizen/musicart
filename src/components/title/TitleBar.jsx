import React from 'react'
import styles from './TitleBar.module.css'
export default function TitleBar() {
  return (
    <div className={styles.main}>
      <img className={styles.logo} src="../../images/logo.png" alt="logo-img" />
        <span className={styles.name}>Musicart</span>
        <span className={styles.breadcrum}>Breadcrum/BreadCrum</span>
    </div>
  )
}
