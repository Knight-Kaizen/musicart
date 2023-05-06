import React from 'react'
import styles from './ProductCard.module.css'
export default function ProductCard() {
    const detailView = false;
    return (
        <div className={`${styles.main} ${detailView && styles.detail} `}>
            <div className={`${styles.box1} `}>
                <img src="../../images/sony 720N.png" alt="image" className={styles.pic} />
                <img src="../../images/addToCart.png" alt="cart" className={styles.pic1} />
            </div>
            <div className={`${styles.box2} ${detailView && styles.detailBox2} `}>
                <span>boAt Rockerz 551ANC</span>
                <span>Price - ₹ 3,000</span>
                <span><span>Blue</span> | <span>On-ear headphone</span></span>
                {detailView && <span>Sony WH-CH720N, Wireless Over-Ear Active Noise Cancellation Headphones with Mic, up to
                    50 Hours Playtime, Multi-Point Connection, App Support, AUX & Voice Assistant Support for
                    Mobile Phones (Black)</span>}
            </div>
        </div>
    )
}
