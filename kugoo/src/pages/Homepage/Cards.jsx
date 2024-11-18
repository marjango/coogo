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
                    img: {kugoom4},
                    name: 'Kugoo Kirin M4',
                    price: 29900  + '₽',
                    charge: 2000  + 'mAh',
                    capacity: 1.2 + 'л.с',
                    speed: 60 + 'км/ч',
                    time: 5 + 'часов'
                },
                {
                    id:1,
                    img: {kugoom4},
                    name: 'Kugoo Kirin M4',
                    price: 29900  + '₽',
                    charge: 2000  + 'mAh',
                    capacity: 1.2 + 'л.с',
                    speed: 60 + 'км/ч',
                    time: 5 + 'часов'
                },
                {
                    id:1,
                    img: {kugoom4},
                    name: 'Kugoo Kirin M4',
                    price: 29900  + '₽',
                    charge: 2000  + 'mAh',
                    capacity: 1.2 + 'л.с',
                    speed: 60 + 'км/ч',
                    time: 5 + 'часов'
                },
                {
                    id:1,
                    img: {kugoom4},
                    name: 'Kugoo Kirin M4',
                    price: 29900  + '₽',
                    charge: 2000  + 'mAh',
                    capacity: 1.2 + 'л.с',
                    speed: 60 + 'км/ч',
                    time: 5 + 'часов'
                },
                {
                    id:1,
                    img: {kugoom4},
                    name: 'Kugoo Kirin M4',
                    price: 29900  + '₽',
                    charge: 2000  + 'mAh',
                    capacity: 1.2 + 'л.с',
                    speed: 60 + 'км/ч',
                    time: 5 + 'часов'
                },
                {
                    id:1,
                    img: {kugoom4},
                    name: 'Kugoo Kirin M4',
                    price: 29900  + '₽',
                    charge: 2000  + 'mAh',
                    capacity: 1.2 + 'л.с',
                    speed: 60 + 'км/ч',
                    time: 5 + 'часов'
                },
                {
                    id:1,
                    img: {kugoom4},
                    name: 'Kugoo Kirin M4',
                    price: 29900  + '₽',
                    charge: 2000  + 'mAh',
                    capacity: 1.2 + 'л.с',
                    speed: 60 + 'км/ч',
                    time: 5 + 'часов'
                },
                {
                    id:1,
                    img: {kugoom4},
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
              <img src={'../../img/' + item.img} alt={item.name} />
              <div className={s.cardTitle}>
                <h1>{item.name}</h1>
                <div className={s.itemDesc}>
                    <img src={accumulator} alt="" />
                    <p>{item.charge}</p>
                    <img src={power} alt="" />
                    <p>{item.capacity}</p>
                    <img src={speedometer} alt="" />
                    <p>{item.speed}</p>
                    <img src={timer} alt="" />
                    <p>{item.time}</p>
                </div>
                <h2>{item.price}</h2>

              </div>
              <div className={s.cardBtn}>
              <button>Купить в 1 клик</button>
              </div>
            </div>
          ))}
          {/* <ProductList products={products} addToCart={addToCart} /> */}
        </div>
        
    );
  }
    // let cartCount = 0;
    // function addToCart() {
    //     cartCount++; 
    //     updateCartButton(); 
    // }
    // function updateCartButton() {
    //     document.getElementById('cartButton').textContent = cartCount;
    // }
}

export default Cards