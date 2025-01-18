import React from "react";
import s from './discount.module.css'

function Discount () {
    return  (
        <div className={s.main}>
            <div className={s.info}>
                <span className={s.span1}>До 01.09</span>
                <span className={s.span2}>+ 2 подарка</span>
            </div>
            <h1>выгода 2880 RUB при покупке<br/> Kugoo Kirin M4 Pro 13 Ah</h1>
        </div>
    )
}

export default Discount;