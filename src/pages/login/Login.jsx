import React, { useContext, useState } from 'react'
import axios from "axios"
import styles from './Login.module.css'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Login() {

    const [userDetails, setUserDetails] = useState({
        email_or_mobile: '',
        password: ''
    })
    const [errors, setErrors] = useState({});
    const { setUserLoggedIn } = useContext(UserContext)
    const navigate = useNavigate();

    const userLoginDetails = {
        email: '',
        mobile: '',
        password: ''
    }

    //---------------------Helper functions------------

    const validateClient = () => {
        // console.log('In validateClient function',userDetails);
        const { email_or_mobile, password } = userDetails;
        const error = {};

        if (email_or_mobile.includes('@')) {
            // console.log('Logging with email')
            if (!email_or_mobile) {
                error.emailOrMobile = 'Email or Mobile number is required';
            }
            else if (!/\S+@\S+\.\S+/.test(email_or_mobile)) {
                error.emailOrMobile = 'Email or Mobile number is invalid';
            }
            else {
                userLoginDetails.email = email_or_mobile;
            }

        }
        else {
            // console.log('Logging with mobile')
            if (!email_or_mobile) {
                error.emailOrMobile = 'Email or Mobile number is required';
            } else if (!/^[0-9]{10}$/.test(email_or_mobile)) {
                error.emailOrMobile = 'Email or Mobile number is invalid';
            }
            else {
                userLoginDetails.mobile = email_or_mobile;
            }
        }
        if (!password) {
            error.password = 'Password is required';
        }
        else {
            userLoginDetails.password = password;
        }
        console.log(error);
        if (Object.keys(error).length == 0)
            return true;
        setErrors(error);
        return false;
    }

    const validateServer = async () => {
        try {
            console.log('In validate Server fun', userLoginDetails);
            const { email, mobile, password } = userLoginDetails;
            const res = await axios.post('https://musicart-backend.onrender.com/user/login', {
                //details
                email,
                mobile,
                password

            })
            console.log(res.data);
            localStorage.setItem('musicartUser', JSON.stringify(res.data));
            return true;
            
        }
        catch (err) {
            console.log('got some error', err);
            console.log('API response error', err.response.data);
            return false;
        }
    }
    

    //--------------------------------------------------

    const handleChange = (e) => {
        setUserDetails((prevDetails) => {
            return {
                ...prevDetails,
                [e.target.name]: e.target.value
            }
        })

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        // console.log('In handle submit function', userDetails);
        const clientSideValidation = validateClient();
        if (clientSideValidation) {
            // console.log('Client side validation sucess');
            const serverSideValidation = await validateServer();
            if(serverSideValidation){
                // console.log('server status', serverSideValidation)
                setUserLoggedIn(true);
                toast.success('Loading products', {autoClose:3000})
                navigate('/');
            }
        }
        else {
            // console.log('error in client validation');
            toast.error('Login Failed! Please try again', {autoClose:2000})
        }
    }
    const handleLogin = () => {
        navigate('/signup')
    }

    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <img src="../../images/logo.png" alt="image-1" className={styles.logo} />
                <span className={styles.headerText}>Musicart</span>
            </div>
            <form className={styles.box1}>
                <span className={`${styles.text} ${styles.text1}`}>
                    Sign in
                </span>
                <span className={`${styles.text} ${styles.text2}`}>
                    Enter your email or mobile number
                </span>
                <input className={`${styles.input} ${styles.input2}`} type="text" name='email_or_mobile' onChange={handleChange} />
                {errors.emailOrMobile && <span className={`${styles.error}`}>{errors.emailOrMobile}</span>}

                <span className={`${styles.text} ${styles.text5}`}>Password</span>
                <input className={`${styles.input} ${styles.input5}`} type="password" name='password' onChange={handleChange} />
                {errors.password && <span className={`${styles.error}`}>{errors.password}</span>}

                <div className={styles.button} onClick={handleSubmit}>Continue</div>
                <span className={`${styles.text} ${styles.text7}`}>By continuing, you agree to Musicart privacy notice and conditions of use.</span>
            </form>

            <div className={styles.box2}>
                <div className={styles.box21}></div>
                <span className={styles.box22}>New to musicart?</span>
                <div className={styles.box21}></div>

            </div>
            <div className={`${styles.button} ${styles.button2}`}
                onClick={handleLogin}
            >
                Create your Musicart account
            </div>




            <footer className={styles.footer}>
                <span >Musicart | All rights reserved</span>
            </footer>
        </div>
    )
}
