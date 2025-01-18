import React from "react";
import { useState } from "react";
import s from './Service.module.scss'
import Appointment from '../test-drive/Appointment'

function Service () {
    const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
    
    const openAppointment = () => {
        setIsAppointmentOpen(true);
    };

    const closeAppointment = () => {
        setIsAppointmentOpen(false);
    };
    return (
        <div>
            <div className={s.mainCatalog}>
                <div className={s.content}>
                    <h1>Ремонт и обслуживание товаров Kugoo Kirin</h1>
                    <p>в фирменных сервисых центрах</p>
                    <div className={s.description}>
                        <div className={s.desc}>
                            <span className={s.span1}></span>
                            <p>Сервисные центры в Москве, Санкт-Петербурге и Краснодаре</p>
                        </div>
                        <div className={s.desc}>
                            <span className={s.span2}></span>
                            <p>Гарантия 14 дней
                            на ремонт</p>
                        </div>
                        <div className={s.desc}>
                            <span className={s.span3}></span>
                            <p>Всегда в наличии оригинальные запчасти
                            от производителя</p>
                        </div>
                    </div>
                    <button onClick={openAppointment} className={s.btn}>Записаться</button>
                    {/* Render Catalog as Pop-up */}
                    {isAppointmentOpen && <Appointment onClose={closeAppointment} />}
                </div>
            </div>
            <div className={s.infoColumns}>
                <h1>Проведем диагностику<br/>
                и отремонтируем любую неисправность</h1>
                <div className={s.columns}>
                    <div className={s.col1}>
                        <div>
                            <h3>Ремонт от 1 дня</h3>
                            <p>Устраним любую неисправность. Обычно делаем это за 1-3 дня, если ремонт сложный — предупредим заранее.</p>
                        </div>
                        <div>
                            <h3>Ремонтируем только <br/>то, что сломалось</h3>
                            <p>Не навязываем услуги, диагностируем и заранее обговариваем стоимость ремонта.</p>
                        </div>
                        <div>
                            <h3>Оригинальные запчасти</h3>
                            <p>Благодаря прямой связи с производителем имеем в наличии все необходимые новые комплектующие для ремонта.</p>
                        </div>
                    </div>
                    <div className={s.col2}></div>
                    <div className={s.col3}>
                        <div>
                            <h3>гарантия</h3>
                            <p>14 дней на ремонт</p>
                        </div>
                        <div>
                            <h3>бесплатный ремонт</h3>
                            <p>в течение 1 года после покупки</p>
                        </div>
                        <div>
                            <h3>расширенная гарантия</h3>
                            <p>до 36 месяцев</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.diagnostic}>
                <div className={s.zoomContainer}></div>
                <div className={s.zoomInfo}>
                    <span>Услуга</span>
                    <h1>Определим причину неисправности удаленно или на диагностике!</h1>
                    <button className={s.toDiagnostic}>Записаться на диагностику</button>
                </div>
            </div>
        </div>
    )
}

export default Service;
