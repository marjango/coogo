import React from "react";
import { useState } from "react";
import s from './testDrive.module.css'
import scooters from './img/scooters.svg'
import girlonscooter from './img/girlonscooter.svg'
import Appointment from './Appointment.jsx'

function TestDrive () {
    const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

    const openAppointment = () => {
        setIsAppointmentOpen(true);
    };

    const closeAppointment = () => {
        setIsAppointmentOpen(false);
    };
    return  (
        <div className={s.main}>
            <div className={s.mainCatalog}>
                <div className={s.content}>
                    <div className={s.info}>
                        <p className={s.address}><span></span>Восточно-Кругликовская улица, 86</p>
                        <p className={s.hours}>Вт - Сб 10:00 - 20:00</p>
                    </div>
                        <h1>Запишитесь на бесплатный тест-драйв электросамокатов</h1>
                        <p>в Москве без ограничения по времени</p>
                    <div className={s.description}>
                        <div className={s.desc}>
                            <span className={s.span1}></span>
                            <p>Поймете, какая <br/> модель вам подходит</p>
                        </div>
                        <div className={s.desc}>
                            <span className={s.span2}></span>
                            <p>Проверите лучшие <br/> самокаты в деле</p>
                        </div>
                    </div>
                    <button onClick={openAppointment} className={s.btn}>Записаться</button>
                    {/* Render Catalog as Pop-up */}
                    {isAppointmentOpen && <Appointment onClose={closeAppointment} />}
                </div>
            </div>
            <div className={s.testDriveContent}>
                <div className={s.testDriveInfo}>
                    <h1>Определите максимально подходящую вам модель
                    не теоретически, а на практике</h1>
                    <div className={s.list}>
                        <p>Тест-драйв поможет:</p>
                        <ul>
                            <li><span></span><b>Понять</b> подходит ли вам конкретная модель;</li>
                            <li><span></span><b>Испытать</b> самокат в «реальной жизни»;</li>
                            <li><span></span><b>Оценить</b> удобство хранения и эксплуатации;</li>
                            <li><span></span><b>Узнать</b> реальные характеристики и возможности модели.</li>
                        </ul>
                    </div>
                </div>
                <img src={scooters} alt=""/>
            </div>
            <div className={s.testDriveContentReverse}>
                <img src={girlonscooter} alt="" />
                <div className={s.testDriveInfo}>
                    <h1>Научим правильной и безопасной езде в городе вас или вашего ребенка</h1>
                    <div className={s.list}>
                        <p>На обучении специалист расскажет:</p>
                        <ul>
                        <   li><span></span>Как подготовить самокат к поездке;</li>
                            <li><span></span>Как «завести» самокат;</li>
                            <li><span></span>Как вести себя во время поездки и обезопасить себя и окружающих;</li>
                            <li><span></span>Как складывать и раскладывать электросамокат;</li>
                            <li><span></span>Как ухаживать за своим девайсом.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestDrive;