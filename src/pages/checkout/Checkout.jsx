import React from 'react'
import styles from './Checkout.module.css'
import Header from '../../components/header/Header'
import TitleBar from '../../components/title/TitleBar'
import Review from '../../components/reviewCard/Review'
import Footer from '../../components/footer/Footer'
import useWindowResize from '../../hooks/useWindowResize'
export default function Checkout() {

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
                <span className={`${styles.text} ${styles.text1}`}><u>Checkout</u></span>
            </section>
            <section className={styles.box3}>
                <div className={styles.box31}>
                    <div className={styles.box311}>
                        <div className={styles.box3111}>
                            <span className={styles.text2}>1. Delivery Address</span>
                        </div>
                        <div className={styles.box3112}>
                            <span className={styles.text3}>Akash Pal</span>
                            <span className={styles.text3}>104</span>
                            <span className={styles.text3}>kk hh Nagar, Lucknow</span>
                            <span className={styles.text3}>Uttar Pradesh 226025</span>
                        </div>
                    </div>
                    <div className={styles.box312}>
                        <div className={styles.box3121}>
                            <span className={styles.text2}>2. Payment method </span>
                        </div>
                        <div className={styles.box3122}>
                            <span className={styles.text3}>Pay on delivery ( Cash/Card)</span>
                        </div>
                    </div>
                    <div className={styles.box313}>
                        <div className={styles.box3131}>
                            <span className={styles.text2}>3. Review items and delivery</span>
                        </div>
                        <div className={styles.box3132}>
                            <div className={styles.box31321}>
                                <Review />
                                <Review />
                            </div>
                            <span className={styles.text4}>Estimated delivery : </span>
                            <span className={styles.text4}>Monday — FREE Standard Delivery</span>
                        </div>
                    </div>
                </div>
                <div className={styles.box32}>
                    <div className={styles.box321}>
                        <span className={`${styles.box3211} ${styles.same}`}>Place Your order</span>
                        <span className={`${styles.box3212} ${styles.same}`}>By placing your order, you agree to Musicart privacy notice and conditions of use.</span>
                        <span className={`${styles.box3213} ${styles.same}`}></span>
                        <span className={`${styles.box3214} ${styles.same}`}>Order Summary</span>
                        <span className={`${styles.box3215} ${styles.same}`}><span className={`${styles.text7} ${styles.box3216}`}>Items : </span> <span className={styles.text7} >₹3500.00</span></span>
                        <span className={`${styles.box3215} ${styles.same}`}><span className={`${styles.text7} ${styles.box3216}`}>Delivery : </span> <span className={styles.text7}>₹45.00</span></span>
                        <span className={`${styles.box3213} ${styles.same}`}></span>
                        <span className={`${styles.box3215} ${styles.same}`}><span className={`${styles.text8} ${styles.box3216}`}>Order Total : </span><span className={styles.text8} >₹3545.00</span></span>
                    </div>
                </div>
            </section>
            <section className={styles.box4}>
                <div className={styles.box41}>
                    <span className={styles.box411}>Place your order</span>
                </div>
                <div className={styles.box42}>
                    <span className={styles.text5}> Order Total : ₹3545.00</span>
                    <span className={styles.text6}> By placing your order, you agree to Musicart privacy notice and conditions of use.</span>
                </div>
            </section>
            <Footer/>
        </div>
    )
}
