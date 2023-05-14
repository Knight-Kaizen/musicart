import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import styles from './Products.module.css'
import ProductCard from '../productCard/ProductCard'
import { UserContext } from '../../App'
export default function Products() {

  const { filters } = useContext(UserContext);
  const [displayProducts, setDisplayProducts] = useState([]);
  let fqueryString = '';
  //-----------------------Helper functions---------

  const loadQueryProducts = async () => {
    try {
      console.log('run query', fqueryString)
      console.log('filters', filters)
      const res = await axios.get(`https://musicart-backend.onrender.com/products/view${fqueryString}`);
      console.log('In load with query products', fqueryString, res.data);
      let productCards = [];
      for (let i = 0; i < res.data.length; i++) {
        productCards.push(<ProductCard
          product={res.data[i]}
        />)
      }
      // console.log(productCards);
      setDisplayProducts(productCards);
    }
    catch (err) {
      console.log('Error in query', err);
    }
  }
  const loadProducts = async () => {
    try {

      const currFilter = filters;
      let queryString = '?';
      currFilter.forEach((item) => {
        let itemKey = Object.keys(item)[0];
        let itemValue = item[itemKey];
        // console.log('string building',itemKey, itemValue);

        if (itemKey == 'Headphone type' && itemValue != 'none') {
          queryString += `type=${itemValue}&`;
        }
        if (itemKey == 'Company' && itemValue != 'none') {
          queryString += `company=${itemValue}&`;
        }
        if (itemKey == 'Colour' && itemValue != 'none') {
          queryString += `color=${itemValue}&`;
        }
        if (itemKey == 'Price' && itemValue != 'none') {
          if (itemValue == '₹1,000 - ₹9,999')
            itemValue = '1000-9999'
          if (itemValue == '₹0 - ₹999')
            itemValue = '0-999'
          if (itemValue == '₹10,000 - ₹99,999')
            itemValue = '10000-99999'

          queryString += `price=${itemValue}&`;
        }
        if (itemKey == 'Sort by' && itemValue != 'none') {
          if (itemValue == 'Price: Lowest') {
            queryString += `sort=price1`;
          }
          if (itemValue == 'Price: Highest') {
            queryString += `sort=price-1`;
          }
          if (itemValue == 'Name: A-Z') {
            queryString += `sort=A-Z`
          }
          if (itemValue == 'Name: Z-A') {
            queryString += `sort=Z-A`
          }
          queryString += '&';
        }

        fqueryString =  queryString.substring(0, queryString.length - 1);

      })
    }

    catch (err) {
      // console.log('error in loading products', err);
    }
  }
  //------------------------------------------------
  useEffect(() => {
    loadProducts();
    loadQueryProducts();
  }, [filters])


  return (
    <div className={styles.main}>
      {displayProducts}
    </div>
  )
}
