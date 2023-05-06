import React from 'react'
import styles from './Homepage.module.css'

import TitleBar from '../../components/title/TitleBar'
import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner'
import Searchbar from '../../components/searchbox/Searchbar'
import Filters from '../../components/filters/Filters'
import Products from '../../components/products/Products'
export default function Homepage() {
  return (
    <div className={styles.main}>
        <Header/>
        <TitleBar/>
        <Banner/>
        <Searchbar/>    
        <Filters/>
      <section className={styles.section5}>
        <Products/>
      </section>
      <footer className={styles.footer}>
        <span className={styles.text1}>Musicart | All rights reserved</span>
      </footer>
    </div>
  )
}
