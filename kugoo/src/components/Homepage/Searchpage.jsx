import React, { useState } from "react";
import s from "./Searchpage.module.css";
import search from "../../img/header/search.svg";
import kugoom4 from '../../img/kugoom4.svg';
import accumulator from '../../img/accumulator.svg';
import power from '../../img/power.svg';
import speedometer from '../../img/speedometer.svg';
import timer from '../../img/timer.svg';

function Searchpage() {
  const [searchId, setSearchId] = useState("");
  const [filteredItems, setFilteredItems] = useState(null);

  const items = [
    {
      id: 1,
      img: kugoom4,
      name: "Kugoo Kirin M4",
      price: "29900₽",
      charge: "2000mAh",
      capacity: "1.2л.с",
      speed: "60км/ч",
      time: "5часов",
    },
    {
      id: 2,
      img: kugoom4,
      name: "Kugoo Kirin M4",
      price: "29900₽",
      charge: "2000mAh",
      capacity: "1.2л.с",
      speed: "60км/ч",
      time: "5часов",
    },
    {
      id: 3,
      img: kugoom4,
      name: "Kugoo Kirin M4",
      price: "29900₽",
      charge: "2000mAh",
      capacity: "1.2л.с",
      speed: "60км/ч",
      time: "5часов",
    },
    {
      id: 4,
      img: kugoom4,
      name: "Kugoo Kirin M4",
      price: "29900₽",
      charge: "2000mAh",
      capacity: "1.2л.с",
      speed: "60км/ч",
      time: "5часов",
    },
    {
      id: 5,
      img: kugoom4,
      name: "Kugoo Kirin M4",
      price: "29900₽",
      charge: "2000mAh",
      capacity: "1.2л.с",
      speed: "60км/ч",
      time: "5часов",
    },
  ];

  const handleSearch = () => {
    const result = items.filter((item) => item.id === parseInt(searchId));
    setFilteredItems(result.length > 0 ? result : []);
  };

  return (
    <div className={s.page}>
      <div className={s.search}>
        <input
          onChange={(e) => setSearchId(e.target.value)}
          value={searchId}
          type="text"
          className={s.searchInput}
          placeholder="Искать самокат KUGOO"
        />
        <button onClick={handleSearch} className={s.searchButton}>
          <img src={search} alt="Поиск" />
        </button>
      </div>

      <div className={s.cardContainer}>
        {(filteredItems !== null ? filteredItems : items).map((item) => (
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
                  <button className={s.addtoWish}></button>
                </div>
              </div>
              <div className={s.cardBtn}>
                <button>Купить в 1 клик</button>
              </div>
            </div>
          </div>
        ))}
        {filteredItems && filteredItems.length === 0 && (
          <p className={s.noResults}>Товар не найден</p>
        )}
      </div>
    </div>
  );
}

export default Searchpage;
