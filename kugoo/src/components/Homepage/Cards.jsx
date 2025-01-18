import React, { useState } from 'react';
import s from './Cards.module.css';
import kugoom4 from '../../img/cards/kugoom4.svg';
import accumulator from '../../img/cards/accumulator.svg';
import power from '../../img/cards/power.svg';
import speedometer from '../../img/cards/speedometer.svg';
import timer from '../../img/cards/timer.svg';

const Cards = () => {
    const [cartItems, setCartItems] = useState([]);
    const [popupCard, setPopupCard] = useState(null);


    const [items] = useState([
        {
            id: 1,
            img: kugoom4,
            name: 'Kugoo Kirin M4',
            price: '29900₽',
            charge: '2000mAh',
            capacity: '1.2л.с',
            speed: '60км/ч',
            time: '5часов'
        },
        {
            id: 2,
            img: kugoom4,
            name: 'Kugoo Kirin M4',
            price: '29900₽',
            charge: '2000mAh',
            capacity: '1.2л.с',
            speed: '60км/ч',
            time: '5часов'
        },
        {
            id: 3,
            img: kugoom4,
            name: 'Kugoo Kirin M4',
            price: '29900₽',
            charge: '2000mAh',
            capacity: '1.2л.с',
            speed: '60км/ч',
            time: '5часов'
        },
        {
            id: 4,
            img: kugoom4,
            name: 'Kugoo Kirin M4',
            price: '29900₽',
            charge: '2000mAh',
            capacity: '1.2л.с',
            speed: '60км/ч',
            time: '5часов'
        },
        {
            id: 5,
            img: kugoom4,
            name: 'Kugoo Kirin M4',
            price: '29900₽',
            charge: '2000mAh',
            capacity: '1.2л.с',
            speed: '60км/ч',
            time: '5часов'
        }
    ]);

    const addtoCart = (product) => {
        const existedItem = cartItems.find((i) => i.id === product.id);
        if (existedItem) {
            setCartItems(
                cartItems.map((i) =>
                    i.id === product.id
                        ? { ...i, quantity: i.quantity + 1 }
                        : i
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    const openPopup = (card) => {
        setPopupCard(card);
    };

    const closePopup = () => {
        setPopupCard(null);
    };



    return (
        <div className={s.cardSection}>
            <div className={s.cardHeader}>
                <h1>Электросамокаты</h1>
                <div className={s.btnSwitcher}>
                    <button className={s.btn1}>Хиты продаж</button>
                    <button className={s.btn2}>Для города</button>
                    <button className={s.btn2}>Для взрослых</button>
                    <button className={s.btn2}>Для детей</button>
                </div>
            </div>
            <div className={s.cardContainer}>
                {items.map((item) => (
                    <div
                        key={item.id}
                        className={s.card}
                        onClick={() => openPopup(item)}
                    >
                        <div className={s.itemImg}>
                            <img src={item.img} alt={item.name} />
                        </div>
                        <div className={s.cardTitle}>
                            <h1>{item.name}</h1>
                            <div className={s.itemDesc}>
                                <div className={s.itemDescription}>
                                    <img src={accumulator} alt="Accumulator" />
                                    <p>{item.charge}</p>
                                </div>
                                <div className={s.itemDescription}>
                                    <img src={power} alt="Power" />
                                    <p>{item.capacity}</p>
                                </div>
                                <div className={s.itemDescription}>
                                    <img src={speedometer} alt="Speedometer" />
                                    <p>{item.speed}</p>
                                </div>
                                <div className={s.itemDescription}>
                                    <img src={timer} alt="Timer" />
                                    <p>{item.time}</p>
                                </div>
                            </div>
                            <div className={s.content}>
                                <h2>{item.price}</h2>
                                <div className={s.actions}>
                                    <button className={s.addtoWish}></button>
                                </div>
                            </div>
                            <div className={s.cardBtn}>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    addtoCart(item);
                                }}
                            >
                                Добавить в корзину
                            </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Popup Section */}
            {popupCard && (
                <div className={s.popup}>
                    <div className={s.popupContent}>
                        <button className={s.closeBtn} onClick={closePopup}>
                            &times;
                        </button>
                        <div className={s.itemImg}>
                            <img src={popupCard.img} alt={popupCard.name} />
                        </div>
                        <div className={s.cardTitle}>
                            <h1>{popupCard.name}</h1>
                            <div className={s.itemDesc}>
                                <div className={s.itemDescription}>
                                    <img src={accumulator} alt="Accumulator" />
                                    <p>{popupCard.charge}</p>
                                </div>
                                <div className={s.itemDescription}>
                                    <img src={power} alt="Power" />
                                    <p>{popupCard.capacity}</p>
                                </div>
                                <div className={s.itemDescription}>
                                    <img src={speedometer} alt="Speedometer" />
                                    <p>{popupCard.speed}</p>
                                </div>
                                <div className={s.itemDescription}>
                                    <img src={timer} alt="Timer" />
                                    <p>{popupCard.time}</p>
                                </div>
                            </div>
                            <div className={s.content}>
                                <h2>{popupCard.price}</h2>
                            </div>
                            <div className={s.cardBtn}>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        addtoCart(popupCard);
                                        closePopup();
                                    }}
                                >
                                    Добавить в корзину
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cards;
