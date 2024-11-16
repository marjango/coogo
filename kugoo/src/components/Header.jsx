import React from "react";

import s from'./Header.module.css';
// Пишем модули css для каждого файла и среды и всегда 
// экспортируем их только одним методом import s from './.....', благодоря этому
// методу ты в дальнейшем можешь повторяться в классах в другой среде, 
// например пишем классы для App, но при этом хотим так же 
// написать классы для Header очень сложно будет не повторяться в классах 
// так как будут большие проэкты и там придется привыкать к 
// этому методу, так что лучше сейчас начать 

import viber from '../img/viber.svg'
import whatsapp from '../img/whatsapp.svg'
import telegram from '../img/telegram.svg'
import plus from '../img/plus.svg'
import balance from '../img/balance.svg'
import heart from '../img/Icon/Outlined/Heart.svg'
import shoppingCart from '../img/shopping-cart.svg'
import search from '../img/Icon/Outlined/Search.svg'
import promoImg from '../img/Icon/Outlined/promo.svg'

import {Link} from 'react-router-dom'


function Header() {
    return (
    <header className={s.header}>
        <div className={s.headerContent}>
            <div className={s.topHeader}>
                <div className={s.topHeaderLeft}>
                    <a href="#!">Сервис</a>
                    <a href="#!">Сотрудничество</a>
                    <a href="#!">Заказать звонок</a>
                    <div className={s.socialLinks}>
                        <img src={viber} alt="viber" />
                        <img src={whatsapp} alt="whatsapp" />
                        <img src={telegram} alt="telegram" />
                    </div>
                </div>
                <div className={s.topHeaderRight}>
                    <p>+7 (800) 505-54-61</p>
                    <img src={plus} alt="" />
                </div>
            </div>
            <span className={s.border}></span>
            <div className={s.mainHeader}>
                <Link className={s.logoLink} to='/main'>KUGOO</Link>
                <button className={s.catalogBtn}>
                <div className={s.burgerMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <span className={s.buttonText}>Каталог</span>
                </button>
                <div className={s.searchContainer}>
                    <select className={s.dropdown}>
                        <option value="all">Везде</option>
                        <option value="category1">Категория 1</option>
                        <option value="category2">Категория 2</option>
                    </select>
                    <input type="text" className={s.searchInput} placeholder="Искать самокат KUGOO"></input>
                    <button className={s.searchButton}>
                        <img src={search} alt="Поиск"></img>
                    </button>
                </div>
                <div className={s.cartContent}>
                    <img src={balance} alt="" />
                    <img src={heart} alt="" />
                    <img src={shoppingCart} alt="" />
                    <p>Корзина</p>
                </div>
            </div>
            <div className={s.menu}>
                <div className={s.menuContent}>
                    <Link to='/about'>О магазине</Link>
                    <Link to='/delivery'>Доставка и оплата</Link>
                    <Link to='/testDrive'>Тест-драйв</Link>
                    <Link to='/blog'>Блог</Link>
                    <Link to='/contacts'>Контакты</Link>
                    <Link to='/discounts' className={s.discountsMenu}>Акции<img src={promoImg} alt="" className="promoIcon"/></Link>
                </div>
            </div>
        </div>
    </header>
    );
  }
  

export default Header;
