import React from "react";
import s from "./ContactModal.module.css";

function ContactModal({ onClose }) {
    const contacts = [
        {
            title: "Сервисный центр",
            phone: "+7 (499) 350-76-92",
            schedule: null, // No schedule for this item
        },
        {
            title: "Оптовый отдел",
            phone: "+7 (499) 281-64-52",
            schedule: "пн-сб 10:00 - 19:00",
        },
        {
            title: "Отдел рекламаций и претензий",
            phone: "+7 (499) 350-76-92",
            schedule: "ср-вс с 10:00 до 19:00",
        },
    ];

    return (
        <div className={s.modalOverlay} onClick={onClose}>
            <div
                className={s.modalContent}
                onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
            >
                {/* Close Button */}
                <button className={s.closeButton} onClick={onClose}>
                    ×
                </button>

                <div className={s.contactsContainer}>
                    {contacts.map((contact, index) => (
                        <div key={index} className={s.contactItem}>
                            <div className={s.contactTitle}>{contact.title}</div>
                            <div className={s.contactPhone}>{contact.phone}</div>
                            {contact.schedule && (
                                <div className={s.contactSchedule}>{contact.schedule}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ContactModal;
