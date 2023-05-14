
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cart from './pages/cart/Cart';
import Checkout from './pages/checkout/Checkout';
import Homepage from './pages/homepage/Homepage';
import ProductDetails from './pages/productDetail/ProductDetails';
import Signup from './pages/signup/Signup';
import Sucess from './pages/successful/Sucess';
import Login from "./pages/login/Login";
import { createContext, useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";



const UserContext = createContext();

export default
  function App() {

  const [userLoggedIn, setUserLoggedIn] = useState();
  const [filters, setFilters] = useState([
    { 'Headphone type': 'none' },
    { 'Company': 'none' },
    { 'Colour': 'none' },
    { 'Price': 'none' },
    { 'Sort by': 'none' }

  ]
  );

  let [totalPrice, setTotalPrice] = useState(0);
  const [displayUserCart, setDisplayUserCart] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [currProduct, setCurrProduct] = useState();
  const [gridView, setGridView] = useState(true);
  useEffect(() => {
    console.log('Initialising all the things')
    setUserLoggedIn(false);
  }, [])


  return (
    <UserContext.Provider
      value={{
        filters, setFilters,
        userLoggedIn, setUserLoggedIn,
        totalPrice, setTotalPrice,
        gridView, setGridView,
        currProduct, setCurrProduct,
        // displayUserCart, setDisplayUserCart,
        cartProducts, setCartProducts
      }}
    >
      <div>
        <BrowserRouter>
          <Routes >
            <Route path="/" element={<Homepage />} />
            <Route path="/productDetails" element={<ProductDetails />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/sucess" element={<Sucess />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer position="top-center" autoClose={false} closeOnClick />

      </div>
    </UserContext.Provider>
  );
}

export { UserContext };