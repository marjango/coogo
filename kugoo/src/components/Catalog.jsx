import React from "react";
import './Catalog.css';

function Catalog () {
    return (
        <div className="catalog">
            <button className="newSpan">Новинка</button>
            <div className="catalog_content">
                <div className="catalog_text">
                    <h1>Электросамокаты Kugoo Kirin от официального дилера</h1>
                    <p>с бесплатной доставкой по РФ от 1 дня</p>
                </div>
                <button className="toCatalog">Перейти в католог</button>
            </div>
            <div className="slider"></div>
        </div>
    )
}

export default Catalog;
