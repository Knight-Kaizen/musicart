import Cart from './pages/cart/Cart';
import Checkout from './pages/checkout/Checkout';
import Homepage from './pages/homepage/Homepage';
import ProductDetails from './pages/productDetail/ProductDetails';
import Signup from './pages/signup/Signup';
import Sucess from './pages/successful/Sucess';

function App() {
  return (
    <div>
      <Homepage/>
      <ProductDetails/>
      <Signup/>
      <Cart/>
      <Checkout/>
      <Sucess/>
    </div>
  );
}

export default App;
