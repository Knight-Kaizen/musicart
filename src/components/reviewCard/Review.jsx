import React from 'react'
import {useContext} from 'react'
import styles from './Review.module.css'
import { UserContext } from '../../App';
export default function Review(props) {
  const item = props.data;
  const {totalPrice} = useContext(UserContext);
  return (
    <div className={styles.main}>
      <img src={item.img_url[0]} alt="mage-1" className={styles.image1}/>
      <span className={styles.text1}>{item.name}</span>
      <span className={styles.text2}>Clour : {item.color}</span>
      <span className={styles.text2}>In Stock</span>
    </div>
  )
}
