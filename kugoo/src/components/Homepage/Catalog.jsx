import React, { useState } from "react";
import s from "./Catalog.module.css";
import scooter from "../../img/catalog/electric-scooter.svg";
import scooter2 from "../../img/catalog/scooter-2.svg";
import bike from "../../img/catalog/mountain-bike.svg";
import cleaner from "../../img/catalog/vacuum-cleaner.svg";
import scale from "../../img/catalog/weighing-scale.svg";

function Catalog({ onClose }) {
    const categories = [
        { section: "Электросамокаты", icon: scooter },
        { section: "Электроскутеры", icon: scooter2 },
        { section: "Электровелосипеды", icon: bike },
        { section: "Робот-пылесосы", icon: cleaner },
        { section: "Весы", icon: scale },
    ];

    const features = ["Внедорожный", "Городской", "Зимний", "С сиденьем", "Без сиденья"];
    const audiences = ["Для детей и подростков", "Для взрослых", "Для пенсионеров"];

    // Состояние для активной вкладки
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div
            className={s.modalOverlay}
            onClick={onClose} // Закрыть модальное окно при клике на оверлей
        >
            <div
                className={s.modalContent}
                onClick={(e) => e.stopPropagation()} // Предотвращаем закрытие при клике внутри
            >
                <div className={s.catalogContainer}>
                    {/* Меню с вкладками */}
                    <div className={s.navMenu}>
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                className={`${s.navItem} ${activeTab === index ? s.active : ""}`}
                                onClick={() => setActiveTab(index)} // Устанавливаем активную вкладку
                            >
                                <img src={category.icon} alt={category.section} className={s.icon} />
                                {category.section}
                            </div>
                        ))}
                    </div>

                    {/* Контент активной вкладки */}
                    <div className={s.tabContent}>
                        <div className={s.column}>
                            <h4>Особенности</h4>
                            {features.map((feature, index) => (
                                <div key={index} className={s.detailItem}>
                                    {feature}
                                </div>
                            ))}
                        </div>
                        <div className={s.column}>
                            <h4>Для кого</h4>
                            {audiences.map((audience, index) => (
                                <div key={index} className={s.detailItem}>
                                    {audience}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Catalog;
