import { useState } from 'react';
import './App.css'

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
const [cartIsShown, setCartIsShown] = useState(false)

const showCardHandler = () =>{
  setCartIsShown(true)
 }


 const hideCardHandler = () =>{
  setCartIsShown(false)
 } 


  return (
    <div className='app'>
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCardHandler}/>}
      <Header onShowCard={showCardHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
    </div>
  );
}

export default App;