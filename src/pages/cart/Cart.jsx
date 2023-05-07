import React from 'react'
import styles from './Cart.module.css'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import TitleBar from '../../components/title/TitleBar'
import CartItem from '../../components/cartItem/CartItem'
import useWindowResize from '../../hooks/useWindowResize'
export default function Cart() {

    const {width} = useWindowResize();

    return (
        <div className={styles.main}>
                <Header />
            
            
                {width >= 600 && <TitleBar />}
            
            <section className={styles.box1}>
            {width >= 600 ? `Back to Products` : 
                    <img className={styles.back} src="../../images/leftArrow.png" alt="image-2" />
                }
                 </section>
            <section className={styles.box2}>
                <img src="../../images/bag.png" alt="image-1" className={`${styles.image} ${styles.image1}`} />
                <span className={`${styles.text} ${styles.text1}`}>My Cart</span>
            </section>
            <div className={styles.box30}></div>
            <section className={styles.box3}>
                <div className={styles.box31}>
               
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />

                </div>
                <div className={styles.box301}></div>
                {width < 600 && <div className={styles.box30}></div>}
                <div className={styles.box32}>
                    <div className={styles.box321}>
                        <span className={`${styles.text} ${styles.text2}`}>Price details</span>
                    </div>
                    <div className={styles.box321}>
                        <span className={`${styles.text} ${styles.text3}`}>Total MRP</span>
                        <span className={`${styles.text} ${styles.text4}`}>₹3500 </span>
                    </div>
                    <div className={styles.box321}>
                        <span className={`${styles.text} ${styles.text3}`}>Discount on MRP</span>
                        <span className={`${styles.text} ${styles.text4}`}>₹0 </span>
                    </div>
                    <div className={styles.box321}>
                        <span className={`${styles.text} ${styles.text3}`}>Convieneince fee</span>
                        <span className={`${styles.text} ${styles.text4}`}>₹45 </span>
                    </div>
                    <div className={styles.box322}>
                        <span className={`${styles.text} ${styles.text5}`}>Total Amount</span>
                        <span className={`${styles.text} ${styles.text6}`}>₹3545 </span>
                    </div>
                    <div className={`${styles.box321} ${styles.box323}`}>
                        <span className={`${styles.button} ${styles.button2}`}>Place order</span>
                    </div>
                </div>
                
            </section>
            {width >= 600 && <div className={styles.box30}></div>}
            {width >= 600 && <div className={styles.box4}>
                <span className={`${styles.text} ${styles.text7}`}>1 item</span>
                <span className={`${styles.text} ${styles.text8}`}>₹3500</span>
            </div>}
            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
    )
}
