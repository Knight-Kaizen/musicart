import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './ProductCard.module.css'
import { UserContext } from '../../App';
import { useNavigate } from 'react-router-dom';


export default function ProductCard(props) {

    const { gridView } = useContext(UserContext);
    const [detailView, setDetailView] = useState();
    const { userLoggedIn, setCurrProduct } = useContext(UserContext);
    const navigate = useNavigate();
    const item = props.product;
    const currUser = JSON.parse(localStorage.getItem('musicartUser'));

    const handleAddToCart = async () => {
        try {
            const token = currUser.token;
            const res = await axios.patch(`https://musicart-backend.onrender.com/user/cart/add/${currUser._id}`,
                {
                    body: { productId: item._id }
                },
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            )
            toast.success('Item added to cart!', { autoClose: 2000 })
        }
        catch (err) {
            toast.error('Could not add to cart, try after signing in again!', { autoClose: 2000 })
        }

    }
    const handleNavigate = () => {
        console.log('in product cart', props.product)
        const product = props.product;

        navigate('/productDetails', {
            state: {
                product
            }
        });
    }

    useEffect(() => {
        if (gridView == true)
            setDetailView(false);
        else
            setDetailView(true)
    }, [gridView])
    //---------------------------------------------------

    return (
        <div className={`${styles.main} ${detailView && styles.detail} `} >
            <div className={`${styles.box1} `}>
                <img src={item.img_url[0]} alt="image-1" className={styles.pic} />
                {userLoggedIn && <img src="../../images/addToCart.png" alt="cart" className={styles.pic1} onClick={handleAddToCart} />}
            </div>
            <div className={`${styles.box2} ${detailView && styles.detailBox2} `} onClick={handleNavigate}>
                <span>{item.name}</span>
                <span>Price - ₹ {item.price}</span>
                <span><span>{item.color}</span> | <span>{item.type} headphone</span></span>
                {detailView && <span>{item.description}</span>}
            </div>
        </div>
    )
}
