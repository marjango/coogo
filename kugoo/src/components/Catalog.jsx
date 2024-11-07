import React from "react";
import './Catalog.css';
import kirin from '../img/kirin.svg';
import scooter from '../img/scooter.svg';
import group from '../img/Group.svg'
import yandex from '../img/yandex.svg'
import star from '../img/star.svg'

function Catalog () {
    return (
        <div className="main">
            <div className="catalog">
                <img src={kirin} alt="" className="kirin"/>
                <img src={scooter} alt="" className="scooter" />
                <img src={group} alt="" className="group"/>
                <button className="newSpan">Новинка</button>
                <div className="catalog_content">
                    <div className="catalog_text">
                        <h1>Электросамокаты Kugoo Kirin от официального дилера</h1>
                        <p>с бесплатной доставкой по РФ от 1 дня</p>
                    </div>
                    <button className="toCatalog">Перейти в католог</button>
                    <div className="slider"></div>
                </div>
            </div>
        
            <div className="info">
                <div className="first">
                    <h1>Гарантия 1 год</h1>
                    <p>на весь ассортимент</p>
                </div>
                <div className="second">
                    <h1>рассрочка</h1>
                    <p>от 6 месяцев</p>
                </div>
                <div className="third">
                    <h1>Подарки</h1>
                    <p>и бонусам к покупкам </p>
                </div>
                <div className="forth">
                    <img src={yandex} alt="" className="yandexImg"/>
                    <div className="forth_text">
                        <p>Яндекс отзывы</p>
                        <h1>4,9</h1>
                        <img src={star} alt="" className="star-icon"/>
                    </div>
                </div>
            </div>

        </div>
        
    )
}

export default Catalog;
