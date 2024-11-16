import React, { Component } from 'react'
import s from './catalog.module.css'
export class Cards extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            items:[
                {
                    id:1,
                    img: 'card-1.png',
                    name: 'High',
                    price: 990  + '₽',
                    descr: 'крем для лица',
                    weight: 50 + 'g'
                },
                {
                    id:2,
                    img: 'card-2.png',
                    name: 'Rest',
                    price: 990  + '₽',
                    descr: 'крем для лица',
                    weight: 50 + 'g'
                },
                {
                    id:3,
                    img: 'card-3.png',
                    name: 'Rose',
                    price: 990  + '₽',
                    descr: 'крем для лица',
                    weight: 50 + 'g'
                },
                {
                    id:4,
                    img: 'card-4.png',
                    name: 'Milk',
                    price: 990  + '₽',
                    descr: 'крем для лица',
                    weight: 50 + 'g'
                },
                {
                    id:5,
                    img: 'card-5.png',
                    name: 'Paradise',
                    price: 990  + '₽',
                    descr: 'крем для лица',
                    weight: 50 + 'g'
                },
                {
                    id:6,
                    img: 'card-6.png',
                    name: 'Sun',
                    price: 990  + '₽',
                    descr: 'крем для лица',
                    weight: 50 + 'g'
                },
                {
                    id:7,
                    img: 'card-7.png',
                    name: 'Violet',
                    price: 990  + '₽',
                    descr: 'крем для лица',
                    weight: 50 + 'g'
                },
                {
                    id:8,
                    img: 'card-8.png',
                    name: 'Clean',
                    price: 990  + '₽',
                    descr: 'крем для лица',
                    weight: 50 + 'g'
                },
                {
                    id:9,
                    img: 'card-9.png',
                    name: 'Coconut',
                    price: 990  + '₽',
                    descr: 'крем для лица',
                    weight: 50 + 'g'
                },
                {
                    id:10,
                    img: 'card-10.png',
                    name: 'Lavender ',
                    price: 990  + '₽',
                    descr: 'крем для лица',
                    weight: 50 + 'g'
                },
                {
                    id:11,
                    img: 'card-11.png',
                    name: 'Lotos',
                    price: 990  + '₽',
                    descr: 'крем для лица',
                    weight: 50 + 'g'
                },  
                {
                    id:12,
                    img: 'card-12.png',
                    name: 'Earth',
                    price: 990  + '₽',
                    descr: 'крем для лица',
                    weight: 50 + 'g'
                },
            ]
        }
    }
    
  render() {
    const { items } = this.state;
    return (
        <div className={s.cardContainer}>
          {items.map((item) => (
            <div key={item.id} className={s.card}>
              <img src={'./images/' + item.img} alt={item.name} />
              <div className={s.cardTitle}>
                <div>
                <h1>{item.name}</h1>
                <p>{item.descr}</p>
                </div>
                <div>
                <pre>{item.price}</pre>
                <p>{item.weight}</p>
                </div>
              </div>
              <div className={s.cardBtn}>
              <button>add</button>
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