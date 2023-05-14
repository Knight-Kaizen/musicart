import React from 'react'
import { useContext, useState, useEffect } from "react";
import axios from 'axios';
import styles from './Cart.module.css'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import TitleBar from '../../components/title/TitleBar'
import CartItem from '../../components/cartItem/CartItem'
import useWindowResize from '../../hooks/useWindowResize'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
export default function Cart() {

    const { width } = useWindowResize();
    const [displayUserCart, setDisplayUserCart] = useState([]);
    const [cartProductsMap, setCartProductsMap] = useState({});
    let [totalItems, setTotalItems] = useState(0);
    // let [totalPrice, setTotalPrice] = useState(0);

    const navigate = useNavigate(UserContext);
    let {totalPrice, setTotalPrice, setCartProducts} = useContext(UserContext);
    //----------------------------------------

    const handleQuantityChange = async (id, cnt) => {
        try {
            const newMap = cartProductsMap;
            newMap[id] = cnt;
            setCartProductsMap(newMap);

            const currUser = JSON.parse(localStorage.getItem('musicartUser'));
            // console.log('checking new mpa', newMap);
            const token = currUser.token;

            let newItemCount = 0, newItemTotal = 0;
            for (let i = 0; i < Object.keys(newMap).length; i++) {
                const customKey = Object.keys(newMap)[i];
                newItemCount += parseInt(newMap[customKey]);
                const newPrice = await getCartItemPrice(customKey);
                newItemTotal += (newMap[customKey] * newPrice);
            }
            // console.log('new sab kch', newItemCount, newItemTotal);
            setTotalItems(newItemCount);
            setTotalPrice(newItemTotal);

            const emptyCart = await axios.patch(`https://musicart-backend.onrender.com/user/cart/delete/${currUser._id}`, {
                productId: '0000'
            },
            {
                headers: { Authorization: `Bearer ${token}` }
            }
            )
            const productKeys = Object.keys(cartProductsMap);
            for (let i = 0; i < productKeys.length; i++) {

                for (let j = 0; j < cartProductsMap[productKeys[i]]; j++) {
                    const res = await axios.patch(`https://musicart-backend.onrender.com/user/cart/add/${currUser._id}`,
                        {
                            body: { productId: productKeys[i] }
                        },
                        {
                            headers: { Authorization: `Bearer ${token}` }
                        }
                    )
                }
            }
        }
        catch (err) {
            console.log('Error in updating quantity', err);
        }
    }
    const getCartItem = async (productId) => {
        // console.log('product id is', productId)
        try {
            // console.log('product id is', productId)
            const res = await axios.get(`https://musicart-backend.onrender.com/products/detail/${productId}`);
            // console.log('check this', res)
            return res.data[0];
        }
        catch (err) {
            console.log('product id is', productId)
            console.log(`error in getting details,${productId} => ${err}`);
        }
    }
    const getCartItemPrice = async (productId) => {
        try {
            const res = await axios.get(`https://musicart-backend.onrender.com/products/detail/${productId}`);
            return res.data[0].price;
        }
        catch (err) {
            console.log('error in getCartItemPrice', err);
        }
    }

    const getUserCart = async () => {
        try {
            const currUser = JSON.parse(localStorage.getItem('musicartUser'));
            const userId = currUser._id;
            const token = currUser.token;
            // console.log('user cart id is', userId);
            const user = await axios.get(`https://musicart-backend.onrender.com/user/cart/${userId}`,
            {
                headers: { Authorization: `Bearer ${token}` }
            }
                );
            // console.log('logged in user cart', user.data)



            if (Object.keys(cartProductsMap).length == 0) {
                for (let i = 0; i < user.data.length; i++) {
                    if (user.data[i] in cartProductsMap) {
                        cartProductsMap[user.data[i]]++;

                    }
                    else {
                        cartProductsMap[user.data[i]] = 1;
                    }
                    totalItems++;
                    const currItemPrice = await getCartItemPrice(user.data[i]);
                    totalPrice += currItemPrice;
                }
                // console.log('here is total', totalItems, totalPrice)
                setTotalItems(totalItems);
                setTotalPrice(totalPrice);
            }
            // console.log('custom map', cartProductsMap);
            const cartProductsArray = Object.keys(cartProductsMap);
            // console.log('this is cart products array', cartProductsArray);
            const cartItems = [];
            for (let i = 0; i < cartProductsArray.length; i++) {
                // console.log('checking cart products array', cartProductsArray[i])
                // if(cartProductsArray[i] == 'check') continue;
                const currItem = await getCartItem(cartProductsArray[i]);
                cartItems.push(currItem);
            }
            // console.log('cart Items array', cartItems);

            setCartProducts(cartItems);
            const displayCart = cartItems.map((item) => {
                // const productDetail = await getProductDetails(item);

                return (
                    <CartItem
                        // productdetail = {productDetail.data[0]}
                        key={item._id}
                        productDetail={item}
                        productCnt={`${cartProductsMap[item._id]}`}
                        handleQuantity={handleQuantityChange}

                    />
                )
            })
            setDisplayUserCart(displayCart);

        }
        catch (err) {
            console.log('error check', err);
        }
    }
    const handleSucess = () => {
        navigate('/checkout');
    }

    //-----------------------------------------

    useEffect(() => {
        getUserCart();
    }, [])

    //-----------------------------------------

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

                    {/* <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem /> */}
                    {displayUserCart}

                </div>
                <div className={styles.box301}></div>
                {width < 600 && <div className={styles.box30}></div>}
                <div className={styles.box32}>
                    <div className={styles.box321}>
                        <span className={`${styles.text} ${styles.text2}`}>Price details</span>
                    </div>
                    <div className={styles.box321}>
                        <span className={`${styles.text} ${styles.text3}`}>Total MRP</span>
                        <span className={`${styles.text} ${styles.text4}`}>₹{totalPrice}</span>
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
                        <span className={`${styles.text} ${styles.text6}`}>₹{totalPrice + 45} </span>
                    </div>
                    <div className={`${styles.box321} ${styles.box323}`} onClick={handleSucess}>
                        <span className={`${styles.button} ${styles.button2}`}>Place order</span>
                    </div>
                </div>

            </section>
            {width >= 600 && <div className={styles.box30}></div>}
            {width >= 600 && <div className={styles.box4}>
                <span className={`${styles.text} ${styles.text7}`}>{totalItems} item</span>
                <span className={`${styles.text} ${styles.text8}`}>₹{totalPrice}</span>
            </div>}
            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
    )
}
