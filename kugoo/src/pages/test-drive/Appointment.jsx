import s from "./Appointment.module.css";
import image from './img/appointImg.svg'

function Appointment({ onClose }) {
    return (
        <div
            className={s.modalOverlay}
            onClick={onClose}
        >
            <div
                className={s.modalContent}
                onClick={(e) => e.stopPropagation()} 
            >
                <div className={s.Container}>
                    <h1>Запишитесь на тест-драйв электросамоката</h1>
                    <p>и подберите модель для себя</p>
                    <p>Менеджер свяжется с вами в течение 5 минут, чтобы согласовать время.</p>
                    <p style={{ opacity: 0.2 }}>Как с вами удобнее связаться?</p>
                    <div className={s.links}>
                        <button className={s.viber}></button>
                        <button className={s.whatsapp}></button>
                        <button className={s.tg}></button>
                    </div>
                    <input type="tel" id="phone" className={s.phone} placeholder="+7 (___) ___-__-__" required />
                    <button className={s.makeAppointment}>Оформить предзаказ</button>
                    <p>Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и политикой конфиденциальности</p>
                </div>
                <img src={image} alt="" />
            </div>
        </div>

    )
}

export default Appointment;