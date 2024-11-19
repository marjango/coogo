import React from "react";
import s from '../about/About.module.css';
import slide from '../../img/certificate.svg';
import shoppingCart from '../../img/shopping-cart.svg';
import billfold from '../../img/billfold.svg';
import guarantee from '../../img/guarantee.svg';
import delivery from "../../img/delivery.svg";
import percentage from '../../img/percentage-discount.svg';
import scooterTiny from '../../img/scooter-tiny.svg';
import emoji from '../../img/emoji.svg';
import spec1 from '../../img/spec1.svg';
import spec2 from '../../img/spec2.svg';
import spec3 from '../../img/spec3.svg';
import spec4 from '../../img/spec4.svg';
import spec5 from '../../img/spec5.svg';
import service1 from '../../img/service1.svg';
import service2 from '../../img/service2.svg';
import service3 from '../../img/service3.svg';
import service4 from '../../img/service4.svg';
import service5 from '../../img/service5.svg';
import service6 from '../../img/service6.svg';
import aboutvideo from '../../img/aboutvideo.svg';
import testdriveImg from '../../img/testdriveImg.svg';

function About() {
    return (
        <div className={s.main}>
            <div className={s.mainCatalog}>
                <div className={s.content}>
                    <div className={s.title}>
                        <h1>Kugoo-Russia — первый официальный дилер Kugoo Kirin в России</h1>
                    </div>
                    <div className={s.contentDescription}>
                        <div className={s.desc}>
                            <p>Работаем с</p>
                            <h2>2017 г</h2>
                        </div>
                        <div className={s.desc}>
                            <p>Специалистов <br /> в штате</p>
                            <h2>35</h2>
                        </div>
                        <div className={s.desc}>
                            <p>Клиентов по России <br /> и странам СНГ</p>
                            <h2>2 000</h2>
                        </div>
                    </div>
                    <div className={s.background}></div>
                </div>
            </div>

            <div className={s.info}>
                <div className={s.col1}>
                    <h1>С 2017 г. развиваем тему электротранспорта и освещаем его ценность в современном мире</h1>
                    <div className={s.aim}>
                        <h2>Наша цель</h2>
                        <p>Предоставить полный ассортимент современной продукции Kugoo Kirin, которая улучшает и упрощает жизнь. Cтремимся подарить комфорт и эмоции, поэтому помогаем с выбором и внимательно относимся к сервисному обслуживанию.</p>
                    </div>
                    <div className={s.advantages}>
                        <h2>Специализируемся исключительно на бренде Kugoo, поэтому вы получите:</h2>
                        <div className={s.advantagesList}>
                            <p><b>Цены</b> от завода-изготовителя Jilong ;</p>
                            <p><b>Бесплатный тест-драйв </b>самокатов;</p>
                            <p>Фирменную гарантию <b>1 год;</b></p>
                            <p><b>Ремонт и обслуживание </b>от 1 дня в собственном сервисном центре</p>
                            <p><b>Более 1 000 запчастей </b>и аксессуаров в наличии.</p>
                        </div>
                    </div>
                </div>
                <div className={s.col2}>
                    <div className={s.slider}>
                        <img src={slide} alt="" />
                    </div>
                </div>
            </div>

            <div className={s.onlineShop}>
                <div className={s.onlineShopTitle}>
                    <h1>Предлагаем самые выгодные цены на продукты Kugoo за счет прямых поставок</h1>
                    <p>и заботимся об удобстве покупателей</p>
                </div>
                <div className={s.buttons}>
                    <button className={s.button1}>Интернет-магазин</button>
                    <button className={s.button2}>Сервисный центр</button>
                </div>
                <div className={s.infoGrid}>
                    <div className={s.grid1}>
                        <div className={s.gridDescription}>
                            <img src={shoppingCart} alt="" />
                            <h2>Х товаров в каталоге</h2>
                            <p>Выбирайте товар, который подходит по цене и характеристикам. Если товара нет в наличии — мы сообщим вам о его поступлении. </p>
                        </div>
                    </div>
                    <div className={s.grid1}>
                        <div className={s.gridDescription}>
                            <img src={billfold} alt="" />
                            <h2>5 способов оплаты</h2>
                            <p>Вы можете оплатить покупку наличными, картой, онлайн на сайте, через интернет-банкинг или в кредит от «Сбербанка».</p>                   
                        </div>
                    </div>
                    <div className={s.grid1}>
                        <div className={s.gridDescription}>
                            <img src={guarantee} alt="" />
                            <h2>Полная документация и гарантия 1 год</h2>
                            <p>При покупке вам выдается кассовый чек, товарный чек и гарантийный талон – эти документы дают право на гарантийное обслуживание.</p>
                        </div>
                    </div>
                    <div className={s.grid2}>
                        <div className={s.gridDescription}>
                            <img src={delivery} alt="" />
                            <h2>Отправка заказа день в день</h2>
                            <p>Отправляем заказы по всей России день в день или забирайте товар самостоятельно в магазинах в Москве, Санкт-Петербурге и Краснодаре</p>
                        </div>
                    </div>
                    <div className={s.grid2}>
                        <div className={s.gridDescription}>
                            <img src={percentage} alt="" />
                            <h2>Рассрочка без переплат</h2>
                            <p>В нашем магазине можно приобрести любой товар в рассрочку.</p>
                            <a href="#!">Подробнее про условия рассрочки</a>
                        </div>
                    </div>
                    <div className={s.grid2}>
                        <div className={s.gridDescription}>
                            <h2>Больше в каталоге</h2>
                            <a href="#!">Перейти</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className={s.specialists}>
                <h1>В штате Х специалистов, <br />готовых прийти на помощь</h1>
                <div className={s.specialistsDescription}>
                    <div className={s.specialistsDesc}>
                        <img src={scooterTiny} alt="" className={s.emoji} />
                        <p>Специалисты сервисного центра подготавливают самокаты к отправке вам, проводят техническое обслуживание, тюнингуют и при необходимости ремонтируют их</p>
                    </div>
                    <div className={s.specialistsDesc}>
                        <img src={emoji} alt="" className={s.emoji} />
                        <p>Консультант сервисного центра сопровождает вас на протяжении всего времени эксплуатации и помогает решить возникающие вопросы.</p>
                    </div>
                </div>
                <div className={s.specList}>
                    <div className={s.spec}>
                        <img src={spec1} alt="" />
                    </div>
                    <div className={s.spec}>
                        <img src={spec2} alt="" />
                    </div>
                    <div className={s.spec}>
                        <img src={spec3} alt="" />
                    </div>
                    <div className={s.spec}>
                        <img src={spec4} alt="" />
                    </div>
                    <div className={s.spec}>
                        <img src={spec5} alt="" />
                    </div>
                </div>
            </div>

            <div className={s.services}>
                <div className={s.servicesTitle}>
                    <h1>Официальные магазины <br /> и сервисные центры</h1>
                    <div className={s.cities}>
                        <button className={s.city1} active>Москва</button>
                        <button className={s.city2}> Санкт-Петербург</button>
                        <button className={s.city3}>Краснодар</button>
                    </div>
                </div>
                <div className={s.servicesGrid}>
                    <div className={s.servicesImage}>
                        <img src={service1} alt="" />
                    </div>
                    <div className={s.servicesImage}>
                        <img src={service2} alt="" />
                    </div>
                    <div className={s.servicesImage}>
                        <img src={service3} alt="" />
                    </div>
                    <div className={s.servicesImage}>
                        <img src={service4} alt="" />
                    </div>
                    <div className={s.servicesImage}>
                        <img src={service5} alt="" />
                    </div>
                    <div className={s.servicesImage}>
                        <img src={service6} alt="" />
                    </div>
                </div>
                <div className={s.aboutVideo}>
                    <img src={aboutvideo} alt="" />
                </div>
            </div>

            <div className={s.tryTestDrive}>
                <img src={testdriveImg} alt="" className={s.testDriveImg} />
                <div className={s.testDriveForm}>
                    <h1>Бесплатный тест-драйв и обучение в Москве</h1>
                    <p>Оцените все преимущества самокатов лично</p>
                    <form>
                        <div className={s.phoneInput}>
                            <input className={s.phone} type="text" placeholder="+7 (___) ___-__-__" />
                            <button className={s.submitBtn} type="submit">Оставить заявку на тест-драйв</button>
                        </div>
                    </form>
                    <label className={s.consent}>
                        <input type="checkbox" required />
                        Нажимая на кнопку, вы соглашаетесь на обработку <br />персональных данных и <a href="#!">политикой конфиденциальности</a>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default About;