import React from 'react'
import styles from './Products.module.css'
import ProductCard from '../productCard/ProductCard'
export default function Products() {
  return (
    <div className={styles.main}>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
    </div>
  )
}
