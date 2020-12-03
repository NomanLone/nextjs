import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/cart.scss'

const Cart = ({ isBasketActive, toggleBasket, basket, updateBasket }) => {
  const body = document.querySelector('body');
  const location = useLocation();

  if (isBasketActive) {
    body.classList.add("cart-active");

  } else {
    body.classList.remove("cart-active");
  }

  const removeFromCart = (id) => {
    const existInArray = basket.findIndex(item => item.id === id);
    if (existInArray >= 0) {
      const updatedArray = [...basket]
      updatedArray.splice(existInArray, 1)
      updateBasket(updatedArray)
    }
  }

  const updateQuantity = (e, id) => {
    console.log(e.target.value);
    const updatedArray = [...basket]
    updatedArray.find(item => item.id === id).quantity = e.target.value
    updateBasket(updatedArray);
  }

  return (
    <aside className={`cart ${isBasketActive ? 'cart--expanded' : ''} `}>
      <header className='cart__header'>
        <h2 className='cart__header-title'>Cart</h2>
        <button className='ml-auto' type='button' onClick={() => toggleBasket(false)}>
          <svg className='cart__header-close-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
            <g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="M12 12l8 8 8 8M28 12l-8 8-8 8" />
            </g>
          </svg>
        </button>
      </header>
      <div className="cart__products">
        {basket.length ?
          basket.map(item => (
            <div className='cart__item' key={item.id}>
              <img className='cart__item-image' src={item.image} alt="cart item" />
              <div className="cart__item-descripton">
                <h3>{item.title}</h3>
                <p>by {item.author}</p>
              </div>
              <div className='ml-auto'>
                <label className='hidden' htmlFor="cart-quantity">Pick how many per item</label>
                <select onChange={(e) => updateQuantity(e, item.id)} id='cart-quantity' className='cart__item-quantity'>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <button onClick={(e) => removeFromCart(item.id)}>

                  <svg className='cart__header-close-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                    <g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                      <path d="M12 12l8 8 8 8M28 12l-8 8-8 8" />
                    </g>
                  </svg>
                </button>
                <p className='cart__item-price'>{item.quantity * item.price} kr</p>
              </div>
            </div>
          )) :
          <p>Your cart is empty</p>}
      </div>
      <footer className="cart__footer">
        <span className='cart__total-label'>Total:</span>
        <span className='cart__total-price  ml-auto'>{basket.reduce((accumulator, currentValue) => accumulator + currentValue.price * currentValue.quantity, 0)}:-</span>
        <Link
          className='cart__order'
          to={{
            pathname: `/modal`,
            state: { background: location }
          }}>Order</Link>
      </footer>
    </aside>
  )
}

export default Cart