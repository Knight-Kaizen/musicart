import React, { useState } from 'react'
import styles from './Signup.module.css'
export default function Signup() {

    const [login, setLogin] = useState(false);
    const [userDetails, setUserDetails] = useState({
        fname: '',
        email: '',
        mobile: null,
        password: ''
    })

    const handleChange = (e) => {
        setUserDetails((prevDetails) => {
            return {
                ...prevDetails,
                [e.target.name]: e.target.value
            }
        })

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userDetails);
    }

    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <img src="../../images/logo.png" alt="image-1" className={styles.logo} />
                <span className={styles.headerText}>Musicart</span>
            </div>
            <form className={styles.box1}>
                <span className={`${styles.text} ${styles.text1}`}>
                    {login == true ? 'Sign in' : 'Create Account'}
                </span>
                <span className={`${styles.text} ${styles.text2}`}>
                    {login == true ? 'Enter your email or mobile number' : 'Your name'}
                </span>
                <input className={`${styles.input} ${styles.input2}`} type="text" name='fname' onChange={handleChange} />
                {/* <span className={`${styles.error}`}>Error message</span> */}
                {!login && <>
                    <span className={`${styles.text} ${styles.text3}`}>Mobile Number</span>
                    <input className={`${styles.input} ${styles.input3}`} type="number" name='mobile' onChange={handleChange} />
                    {/* <span className={`${styles.error}`}>Error message</span> */}
                    <span className={`${styles.text} ${styles.text4}`}>Email Id</span>
                    <input className={`${styles.input} ${styles.input4}`} type="email" name='email' onChange={handleChange} />
                    {/* <span className={`${styles.error}`}>Error message</span> */}
                    <span className={`${styles.text} ${styles.text6}`}>By enrolling your mobile phone number, you consent to receive automated security notifications via text message from Musicart. Message and data rates may apply.
                    </span>
                </>}
                <span className={`${styles.text} ${styles.text5}`}>Password</span>
                <input className={`${styles.input} ${styles.input5}`} type="password" name='password' onChange={handleChange} />
                <span className={`${styles.error}`}>Error message</span>

                <div className={styles.button} onClick={handleSubmit}>Continue</div>
                <span className={`${styles.text} ${styles.text7}`}>By continuing, you agree to Musicart privacy notice and conditions of use.</span>
            </form>
            {login && //login page
                <>
                    <div className={styles.box2}>
                        <div className={styles.box21}></div>
                        <span className={styles.box22}>New to musicart?</span>
                        <div className={styles.box21}></div>

                    </div>
                    <div className={`${styles.button} ${styles.button2}`}
                        onClick={()=>setLogin(false)}
                    >
                        Create your Musicart account
                    </div>
                </>
            }
            {!login && //signup page
                <div className={styles.box3}>
                    Already have an account ? <u onClick={()=>setLogin(true)}>Sign in</u>
                </div>
            }

            <footer className={styles.footer}>
                <span >Musicart | All rights reserved</span>
            </footer>
        </div>
    )
}
