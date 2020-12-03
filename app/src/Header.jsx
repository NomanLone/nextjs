import React from 'react';
import './styles/header.scss';
import { Link } from 'react-router-dom'

const Header = ({ basket, toggleBasket, isBasketActive }) => (
  <header className="header">
    <h2 className='header__title'>Book-Shop</h2>
    <nav>
      <ul>
        <li><Link to='/'>Books</Link></li>
        <li><button aria-label='cart icon' type='button' onClick={() => toggleBasket(!isBasketActive)} to='/checkout'>
          <svg className='header__cart-icon' viewBox="0 0 40 40">
            <g fill="none" fillRule="evenodd" stroke="currentColor"><circle cx="24.039" cy="26.442" r="1.346" fill="#fff" strokeWidth="1.5" />
              <circle cx="17.27" cy="26.442" r="1.346" fill="currentColor" strokeWidth="1.5" />
              <path fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.578 15.98h-7.385v5.603c0 .68.551 1.23 1.23 1.23h10.98c.506 0 .96-.309 1.146-.78v-4.791a1.23 1.23 0 00-1.223-1.23l-4.748-.032h0z" />
              <path strokeLinecap="round" strokeWidth="1.5" d="M14.203 16.019v-2.827L11.8 12.5" /><circle cx="20" cy="20" r="16" strokeLinecap="square" strokeWidth="2" /></g></svg>
          <span className='header__basket-items'>{basket.length}</span></button></li>
      </ul>
    </nav>
  </header>
);

export default Header;
