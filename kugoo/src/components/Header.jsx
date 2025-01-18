import React, { useState } from "react";

import Catalog from "../components/Homepage/Catalog";
import ContactModal from "../components/Homepage/ContactModal";

import s from'./Header.module.css';
import viber from '../img/header/viber.svg'
import whatsapp from '../img/header/whatsapp.svg'
import telegram from '../img/header/telegram.svg'
import balance from '../img/header/balance.svg'
import heart from '../img/header/heart.svg'
import shoppingCart from '../img/header/shopping-cart.svg'
import search from '../img/header/search.svg'
import promoImg from '../img/header/promo.svg'

import {Link} from 'react-router-dom'


function Header() {

    // const [value, setValue] = useState({name:'', agree:false});
    // const handleChange = (event) => {
    //     const {name, value, type, checked} = event.target;
    //     setValue((prevValue) => ({
    //         ...prevValue, 
    //         [name]: type === "checkbox" ? checked : value
    //     })) 
    // }

    const [isCatalogOpen, setIsCatalogOpen] = useState(false);

    const openCatalog = () => {
        setIsCatalogOpen(true);
    };

    const closeCatalog = () => {
        setIsCatalogOpen(false);
    };

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
    <header className={s.header}>
        <div className={s.headerContent}>
            <div className={s.topHeader}>
                <div className={s.topHeaderLeft}>
                    <Link to='/Service'> Сервис</Link>
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
                    <button className={s.plus} onClick={openModal}></button>
                    {isModalOpen && <ContactModal onClose={closeModal} />}
                </div>
            </div>
            <span className={s.border}></span>
            <div className={s.mainHeader}>
                <Link className={s.logoLink} to='/main'>KUGOO</Link>

                <button onClick={openCatalog}  className={s.catalogBtn}>
                <div className={s.burgerMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <p className={s.buttonText} >Каталог</p>
                </button>
                {/* Render Catalog as Pop-up */}
                {isCatalogOpen && <Catalog onClose={closeCatalog} />}
                <div className={s.searchContainer}>
                    <select className={s.dropdown}>
                        <option value="all">Везде</option>
                        <option value="category1">Категория 1</option>
                        <option value="category2">Категория 2</option>
                    </select>
                    <input name="name" type="text" className={s.searchInput} placeholder="Искать самокат KUGOO"></input>
                    <button className={s.searchButton}>
                        <img src={search} alt="Поиск"></img>
                    </button>
                </div>
                <div className={s.cartContent}>
                    <img src={balance} alt="" />
                    <img src={heart} alt="" />
                    <img src={shoppingCart} alt="" />
                    <Link to='/Cart'>Корзина</Link>
                </div>
            </div>
            <div className={s.menu}>
                <div className={s.menuContent}>
                    <Link to='/About'>О магазине</Link>
                    <Link to='/Delivery' className={s.delivery}>Доставка и оплата<span className={s.deliveryspan}>Доступна рассрочка</span></Link>
                    <Link to='/TestDrive'>Тест-драйв</Link>
                    <Link to='/Blog'>Блог</Link>
                    <Link to='/Contacts'>Контакты</Link>
                    <Link to='/Discount' className={s.discountsMenu}>Акции<img src={promoImg} alt="" className="promoIcon"/></Link>
                </div>
            </div>
        </div>
    </header>
    );
  }
  

export default Header;
