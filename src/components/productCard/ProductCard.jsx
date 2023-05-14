import React, { useContext } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './ProductCard.module.css'
import { UserContext } from '../../App';
export default function ProductCard(props) {
    const detailView = false;
    const {userLoggedIn} = useContext(UserContext);
    
    const item = props.product;
    const currUser = JSON.parse(localStorage.getItem('musicartUser'));
    // console.log('checking faltu', item.img_url[0])
//--------------Helper Functions---------------------
    // console.log('checking the props', props.product)
    const handleAddToCart = async()=>{
        try{
            console.log('clicked By', item.name);
        console.log('user Logged In', currUser);

        const token = currUser.token;
        console.log(token)
        const res = await axios.patch(`http://localhost:8001/user/cart/add/${currUser._id}`,
            {
                body: {productId: item._id }
            },
            {
                headers: { Authorization: `Bearer ${token}` }
            }
        )
        console.log('checking res', res);
        toast.success('Item added to cart!', {autoClose:2000})
        }
        catch(err){
            // res.status(400).send(`Error in adding to cart, ${err}`);
            toast.error('Could not add to cart, try after signing in again!', {autoClose:2000})
        }

    }
//---------------------------------------------------

    return (
        <div className={`${styles.main} ${detailView && styles.detail} `}>
            <div className={`${styles.box1} `}>
                <img src={item.img_url[0]} alt="image-1" className={styles.pic} />
                {userLoggedIn && <img src="../../images/addToCart.png" alt="cart" className={styles.pic1} onClick={handleAddToCart} />}
            </div>
            <div className={`${styles.box2} ${detailView && styles.detailBox2} `}>
                <span>{item.name}</span>
                <span>Price - ₹ {item.price}</span>
                <span><span>{item.color}</span> | <span>{item.type} headphone</span></span>
                {detailView && <span>Sony WH-CH720N, Wireless Over-Ear Active Noise Cancellation Headphones with Mic, up to
                    50 Hours Playtime, Multi-Point Connection, App Support, AUX & Voice Assistant Support for
                    Mobile Phones (Black)</span>}
            </div>
        </div>
    )
}
