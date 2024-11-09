import React from "react";
import './Header.css';
import viber from '../img/viber.svg'
import whatsapp from '../img/whatsapp.svg'
import telegram from '../img/telegram.svg'
import plus from '../img/plus.svg'
import balance from '../img/balance.svg'
import heart from '../img/Icon/Outlined/Heart.svg'
import shoppingCart from '../img/shopping-cart.svg'
import search from '../img/Icon/Outlined/Search.svg'
import promoImg from '../img/%.svg'
import {Link} from 'react-router-dom'


function Header() {
    return (
      <header className="header">
        <div className="header_content">
            <div className="top_header">
                <div className="top_header_left">
                    <a href="#!">Сервис</a>
                    <a href="#!">Сотрудничество</a>
                    <a href="#!">Заказать звонок</a>
                    <div className="social_links">
                        <img src={viber} alt="viber" />
                        <img src={whatsapp} alt="whatsapp" />
                        <img src={telegram} alt="telegram" />
                    </div>
                </div>
                <div className="top_header_right">
                    <p>+7 (800) 505-54-61</p>
                    <img src={plus} alt="" />
                </div>
            </div>
            <span className="border"></span>
            <div className="main_header">
                <h1>KUGOO</h1>
                <button className="catalogBtn">
                <div class="burger-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <span class="button-text">Каталог</span>
                </button>
                <div className="search_container">
                    <select class="dropdown">
                        <option value="all">Везде</option>
                        <option value="category1">Категория 1</option>
                        <option value="category2">Категория 2</option>
                    </select>
                    <input type="text" className="search-input" placeholder="Искать самокат KUGOO"></input>
                    <button class="search-button">
                        <img src={search} alt="Поиск"></img>
                    </button>
                </div>
                <div className="cart_content">
                    <img src={balance} alt="" />
                    <img src={heart} alt="" />
                    <img src={shoppingCart} alt="" />
                    <p>Корзина</p>
                </div>
            </div>
            <div className="menu">
                <div className="menu_content">
                    <Link to='/about'>О магазине</Link>
                    <Link to='/delivery'>Доставка и оплата</Link>
                    <Link to='/testDrive'>Тест-драйв</Link>
                    <Link to='/blog'>Блог</Link>
                    <Link to='/contacts'>Контакты</Link>
                    <Link to='/discounts'>Акции</Link>
                    {/* <div class="promo">
                        <span class="promo-text">Акции</span>
                        <img src={promoImg} alt="" className="promo-icon"/>
                    </div> */}
                </div>
            </div>
        </div>
      </header>
      
    );
  }
  

export default Header;
