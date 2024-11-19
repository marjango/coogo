import React, { Component } from 'react'
import s from './Cards.module.css'
import kugoom4 from '../../img/kugoom4.svg'
import accumulator from '../../img/accumulator.svg'
import power from '../../img/power.svg'
import speedometer from '../../img/speedometer.svg'
import timer from '../../img/timer.svg'
export class Cards extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            items:[
                {
                    id:1,
                    img: kugoom4,
                    name: 'Kugoo Kirin M4',
                    price: 29900  + '₽',
                    charge: 2000  + 'mAh',
                    capacity: 1.2 + 'л.с',
                    speed: 60 + 'км/ч',
                    time: 5 + 'часов'
                },
                {
                    id:1,
                    img: kugoom4,
                    name: 'Kugoo Kirin M4',
                    price: 29900  + '₽',
                    charge: 2000  + 'mAh',
                    capacity: 1.2 + 'л.с',
                    speed: 60 + 'км/ч',
                    time: 5 + 'часов'
                },
                {
                    id:1,
                    img: kugoom4,
                    name: 'Kugoo Kirin M4',
                    price: 29900  + '₽',
                    charge: 2000  + 'mAh',
                    capacity: 1.2 + 'л.с',
                    speed: 60 + 'км/ч',
                    time: 5 + 'часов'
                },
                {
                    id:1,
                    img: kugoom4,
                    name: 'Kugoo Kirin M4',
                    price: 29900  + '₽',
                    charge: 2000  + 'mAh',
                    capacity: 1.2 + 'л.с',
                    speed: 60 + 'км/ч',
                    time: 5 + 'часов'
                },
                {
                    id:1,
                    img: kugoom4,
                    name: 'Kugoo Kirin M4',
                    price: 29900  + '₽',
                    charge: 2000  + 'mAh',
                    capacity: 1.2 + 'л.с',
                    speed: 60 + 'км/ч',
                    time: 5 + 'часов'
                },
                {
                    id:1,
                    img: kugoom4,
                    name: 'Kugoo Kirin M4',
                    price: 29900  + '₽',
                    charge: 2000  + 'mAh',
                    capacity: 1.2 + 'л.с',
                    speed: 60 + 'км/ч',
                    time: 5 + 'часов'
                },
                {
                    id:1,
                    img: kugoom4,
                    name: 'Kugoo Kirin M4',
                    price: 29900  + '₽',
                    charge: 2000  + 'mAh',
                    capacity: 1.2 + 'л.с',
                    speed: 60 + 'км/ч',
                    time: 5 + 'часов'
                },
                {
                    id:1,
                    img: kugoom4,
                    name: 'Kugoo Kirin M4',
                    price: 29900  + '₽',
                    charge: 2000  + 'mAh',
                    capacity: 1.2 + 'л.с',
                    speed: 60 + 'км/ч',
                    time: 5 + 'часов'
                }
            ]
        }
    }
    
  render() {
    const { items } = this.state;
    return (
        <div className={s.cardContainer}>
          {items.map((item) => (
            <div key={item.id} className={s.card}>
              <img src={item.img} alt={item.name} />
              <div className={s.cardTitle}>
                <h1>{item.name}</h1>
                <div className={s.itemDesc}>
                    <div className={s.itemDescription}>
                        <img src={accumulator} alt="" />
                        <p>{item.charge}</p>
                    </div>
                    <div className={s.itemDescription}>
                        <img src={power} alt="" />
                        <p>{item.capacity}</p>
                    </div>
                    <div className={s.itemDescription}>
                        <img src={speedometer} alt="" />
                        <p>{item.speed}</p>
                    </div>
                    <div className={s.itemDescription}>
                        <img src={timer} alt="" />
                        <p>{item.time}</p>
                    </div>
                </div>
                
                <h2>{item.price}</h2>
                <div className="actions">
                    <button className={s.addtoCart}></button>
                    <button className={s.addtoWish}> </button>
                </div>
              </div>
              <div className={s.cardBtn}>
              <button>Купить в 1 клик</button>
              </div>
            </div>
          ))}
        </div>
        
    );
  }

}

export default Cards