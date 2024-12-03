import React from "react";
import s from "./Catalog.module.css";
import scooter from "../../img/electric-scooter 1.svg";
import scooter2 from "../../img/scooter-2 1.svg";
import bike from "../../img/mountain-bike.svg";
import cleaner from "../../img/vacuum-cleaner.svg";
import scale from "../../img/weighing-scale.svg";

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

    return (
        <div
            className={s.modalOverlay}
            onClick={onClose} // Close modal when clicking on overlay
        >
            <div
                className={s.modalContent}
                onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
            >
                <div className={s.catalogContainer}>
                    <div className={s.navMenu}>
                        {categories.map((category, index) => (
                            <div key={index} className={s.navItem}>
                                <img src={category.icon} alt={category.section} className={s.icon} />
                                {category.section}
                            </div>
                        ))}
                    </div>
                    <div className={s.detailsContainer}>
                        <div className={s.column}>
                            <h3 className={s.columnTitle}>Особенности</h3>
                            {features.map((feature, index) => (
                                <div key={index} className={s.detailItem}>{feature}</div>
                            ))}
                        </div>
                        <div className={s.column}>
                            <h3 className={s.columnTitle}>Для кого</h3>
                            {audiences.map((audience, index) => (
                                <div key={index} className={s.detailItem}>{audience}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Catalog;
