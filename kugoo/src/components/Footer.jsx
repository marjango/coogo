import React from "react";
import s from './Footer.module.css'

import googlePlay from '../img/googlePlay.svg'
import appStore from '../img/appStore.svg'
import vk from '../img/vk.svg'
import ig from '../img/ig.svg'
import youtube from '../img/youtube.svg'
import tg from '../img/tg.svg'
import viber from '../img/viber.svg'
import whatsapp from '../img/whatsapp.svg'
import telegram from '../img/telegram.svg'
import googlePay from '../img/gPay.svg'
import applePay from '../img/applePay.svg'
import visa from '../img/visa.svg'
import mastercard from '../img/mastercard.svg'
import maestro from '../img/maestro.svg'
import webmoney from '../img/webmoney.svg'
import qiwi from '../img/qiwi.svg'


import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className={s.footer}>
            <div className={s.subscription}>
                <h1>Оставьте свою почту и станьте первым,<br/> кто получит скидку на новые самокаты</h1>
                <div className={s.subscriptionForm}>
                    <input className={s.footerInput} type="email" placeholder="Введите Ваш email"/>
                    <button>Подписаться</button>
                </div>
            </div>
            <div className={s.main}>
                <div className={s.Links}>
                    <div className={s.column}>
                        <h3>Каталог товаров</h3>
                            <div className={s.categories}>
                                <Link to='/'>Электросамокаты</Link>
                                <Link to='/'>Электроскутеры</Link>
                                <Link to='/'>Электровелосипеды</Link>
                                <Link to='/'>Электровелосипеды</Link>
                            </div>
                    </div>
                    <div className={s.column}>
                        <h3>Покупателям</h3>
                        <div className={s.linksColumn}>
                            <div className={s.col}>
                                <Link to='/'>Сервисный центр</Link>
                                <Link to='/Delivery'>Доставка и оплата</Link>
                                <Link to='/'>Рассрочка</Link>
                                <Link to='/TestDrive'>Тест-драйв</Link>
                            </div>
                            <div className={s.col}>
                                <Link to='/Blog'>Блог</Link>
                                <Link to='/'>Сотрудничество</Link>
                                <Link to='/Contacts'>Контакты</Link>
                                <Link to='/Discounts'>Акции</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.contacts}>
                    <h3>Контакты</h3>
                    <div className={s.calls}>
                        <div className={s.callCenter}>
                            <p style={{ color: '#282739' }}>Call-центр:</p>
                            <h3>+7 (800) 505-54-61</h3>
                            <p>Пн-Вс 10:00 - 20:00</p>
                        </div>
                        <div className={s.serviceCenter}>
                            <p style={{ color: '#282739' }}>Сервисный центр:</p>
                            <h3>+7 (499) 350-76-92</h3>
                            <p>Пн-Вс 10:00 - 20:00</p>
                        </div>
                    </div>
                    <div className={s.addresses}>
                        <div className={s.address1}>
                            <h4>Магазин в Москве:<br/> ул. Ткацкая, 5 стр. 16</h4>
                            <p>+7 (499) 406 15 87</p>
                        </div>
                        <div className={s.address2}>
                            <h4>Магазин в Санкт-<br/>Петербурге: ул. Фрунзе, 2</h4>
                            <p>+7 (499) 406 15 87</p>
                        </div>
                        <div className={s.address3}>
                            <h4>Магазин в Краснодаре:<br/>ул. Восточно-<br/>Кругликовская, 86</h4>
                            <p>+7 (800) 505 54 61</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.footerBottom}>
                <span></span>
                <div className={s.footerLogo}>
                    <Link className={s.logoLink} to='/main'>KUGOO</Link>
                </div>
                <div className={s.apps}>
                    <img src={googlePlay} alt="" />
                    <img src={appStore} alt="" />
                </div>
                <div className={s.socials}>
                    <img src={vk} alt="" />
                    <img src={ig} alt="" />
                    <img src={youtube} alt="" />
                    <img src={tg} alt="" />
                </div>
                <span></span>
            </div>
            <div className={s.footerBottom2}>
                <div className={s.policies}>
                    <Link to='/'>Реквизиты</Link>
                    <Link to='/'>Политика конфиденциальности</Link>
                </div>
                <div className={s.payments}>
                        <img src={googlePay} alt="" />
                        <img src={applePay} alt="" />
                        <img src={visa} alt="" />
                        <img src={mastercard} alt="" />
                        <img src={maestro} alt="" />
                        <img src={webmoney} alt="" />
                        <img src={qiwi} alt="" />
                </div>
                <div className={s.chatting}>
                    <p>Online чат:</p>
                    <img src={viber} alt="viber" />
                    <img src={whatsapp} alt="whatsapp" />
                    <img src={telegram} alt="telegram" />
                </div>
            </div>
        </div>
    );
}

export default Footer;