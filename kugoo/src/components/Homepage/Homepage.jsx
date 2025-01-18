import React from "react";
import s from './Homepage.module.css'; 
import Cards from './Cards'

import kirin from '../../img/homepage/kirin.svg';
import scooter from '../../img/homepage/scooter.svg';
import group from '../../img/homepage/Group.svg';
import yandex from '../../img/homepage/yandex.svg';

function Homepage() {
     return (
        <div className={s.main}>
            <div className={s.mainCatalog}>
                <img src={kirin} alt="" className={s.kirinImage} />
                <img src={scooter} alt="" className={s.scooterImage} />
                <img src={group} alt="" className={s.groupImage} />
                <button className={s.newSpanButton}>Новинка</button>
                <div className={s.catalogContent}>
                    <div className={s.catalogText}>
                        <h1>Электросамокаты Kugoo Kirin от официального дилера</h1>
                        <p>с бесплатной доставкой по РФ от 1 дня</p>
                    </div>
                    <button className={s.toCatalogButton}>Перейти в католог</button>
                    <div className={s.slider}></div>
                </div>
            </div>

            <div className={s.infoSection}>
                <div className={s.firstInfo}>
                    <h1>Гарантия 1 год</h1>
                    <p>на весь ассортимент</p>
                </div>
                <div className={s.secondInfo}>
                    <h1>рассрочка</h1>
                    <p>от 6 месяцев</p>
                </div>
                <div className={s.thirdInfo}>
                    <h1>Подарки</h1>
                    <p>и бонусам к покупкам</p>
                </div>
                <div className={s.forthInfo}>
                    <img src={yandex} alt="" className={s.yandexImage} />
                    <div className={s.forthText}>
                        <p>Яндекс отзывы</p>
                        <h1><span></span>4,9</h1>
                    </div>
                </div>
            </div>
            <Cards/> 
            
        </div>
    );
}

export default Homepage;
