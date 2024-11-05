import React from "react";
import './Header.css';
import viber from '../img/viber.png'
import whatsapp from '../img/whatsapp.png'
import telegram from '../img/telegram.png'
import plus from '../img/plus.png'

function Header() {
    return (
      <header className="header">
        <div className="header_content">
            <div className="top_header">
                <div className="top_header_left">
                    <a href="#!">Сервис</a>
                    <a href="#!">Сотрудничество</a>
                    <a href="#!">Заказать звонок</a>
                    <div className="social_links">
                        <img src={viber} alt="viber" />
                        <img src={whatsapp} alt="whatsapp" />
                        <img src={telegram} alt="telegram" />
                    </div>
                </div>
                <div className="top_header_right">
                    <p>+7 (800) 505-54-61</p>
                    <img src={plus} alt="" />
                </div>
            </div>
            <div className="main_header">

            </div>
            <div className="brief_header">

            </div>
        </div>
      </header>
    );
  }
  

export default Header;
