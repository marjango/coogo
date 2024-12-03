import React, { useState } from 'react';
import s from './Cards.module.css';
import kugoom4 from '../../img/kugoom4.svg';
import accumulator from '../../img/accumulator.svg';
import power from '../../img/power.svg';
import speedometer from '../../img/speedometer.svg';
import timer from '../../img/timer.svg';

const Cards = () => {
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
                    <div key={item.id} className={s.card}>
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
                                    {/* Add functionality for the buttons if needed */}
                                    <button className={s.addtoWish}></button>
                                </div>
                            </div>
                            <div className={s.cardBtn}>
                                <button>Купить в 1 клик</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cards;
