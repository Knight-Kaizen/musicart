import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import styles from './Products.module.css'
import ProductCard from '../productCard/ProductCard'
import { UserContext } from '../../App'
export default function Products() {

  const {filters} = useContext(UserContext);
  const [displayProducts, setDisplayProducts] = useState([]);

//-----------------------Helper functions---------

const loadProducts = async()=>{
  try{
    console.log('In load products ', filters);
    if(!filters){
      //get all products
      const res = await axios.get('http://localhost:8001/products/view');
      console.log('In load products', res.data);
      
      console.log(typeof(res.data));
      let productCards = [];
      for(let i = 0; i < res.data.length; i++){
        productCards.push(<ProductCard
          product = {res.data[i]}
        />)
     }
      console.log(productCards);
      setDisplayProducts(productCards);
    }
    else{

    }
  }
  catch(err){
    console.log('error in loading products', err);
  }
}
//------------------------------------------------
  useEffect(()=>{
    loadProducts();
  }, [filters])


  return (
    <div className={styles.main}>
      {displayProducts}
    </div>
  )
}
