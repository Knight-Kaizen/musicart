import React from 'react'
import styles from './ProductDetails.module.css'
import Header from '../../components/header/Header'
import TitleBar from '../../components/title/TitleBar'
import Footer from '../../components/footer/Footer'
export default function ProductDetails() {
    return (
        <div className={styles.main}>
                <Header />
            
                <TitleBar />
            <section className={`${styles.button} ${styles.button1}`}>
                Back to Products
            </section>
            <section className={styles.box1}>
                Sony WH-CH720N, Wireless Over-Ear Active Noise Cancellation Headphones with Mic, up to 50 Hours Playtime, Multi-Point Connection, App Support, AUX & Voice Assistant Support for Mobile Phones (Black)
            </section>
            <section className={styles.box2}>
                <div className={styles.box21}>
                    <div className={styles.box211}>
                        <img src="../../images/sony 720N.png" alt="image-1" className={`${styles.image} ${styles.image1}`} />
                    </div>
                    <div className={styles.box212}>
                        <img src="../../images/sony 720N.png" alt="image-2" className={`${styles.image} ${styles.image2}`} />
                        <img src="../../images/sony 720N.png" alt="image-3" className={`${styles.image} ${styles.image2}`} />
                        <img src="../../images/sony 720N.png" alt="image-4" className={`${styles.image} ${styles.image2}`} />
                        <img src="../../images/sony 720N.png" alt="image-5" className={`${styles.image} ${styles.image2}`} />
                    </div>
                </div>
                <div className={styles.box22}>
                    <span className={`${styles.text} ${styles.text1}`}>Sony WH-CH720N</span>
                    <span className={`${styles.text} ${styles.text2}`}>⭐⭐⭐⭐⭐ (50 ratings)</span>
                    <span className={`${styles.text} ${styles.text3}`}>Price - ₹ 3,500</span>
                    <span className={`${styles.text} `}>Black | Over-ear headphone</span>
                    <span className={`${styles.text} `}>About this item</span>
                    <ul>
                        <li>Sony’s lightest Wireless Noise-cancelling headband
                            ever</li>
                        <li> Up to 50-hour battery life with quick charging (3 min
                            charge for up to 1 hour of playback)</li>
                        <li>Multi-Point Connection helps to pair with two
                            Bluetooth devices at the same time</li>
                        <li>Take noise cancelling to the next level with Sony’s
                            Integrated Processor V1,so you can fully immerse
                            yourself in the music</li>
                        <li>Super comfortable and lightweight design
                            ( 192 Grams )</li>
                        <li> High sound quality and well-balanced sound tuning
                        </li>
                    </ul>
                    <span className={`${styles.text} `}><b>Available</b> - In stock</span>
                    <span className={`${styles.text} `}><b>Brand</b> - Sony</span>
                    <span className={`${styles.button} ${styles.button2}`}>Add to Cart</span>
                    <span className={`${styles.button} ${styles.button3}`}>Buy Now</span>

                </div>
            </section>
            <Footer/>
        </div>
    )
}
