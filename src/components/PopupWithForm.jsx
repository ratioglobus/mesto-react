import React from 'react';

export default function PopupWithForm({ isOpen, onClose, title, name, children, buttonText }) {
    return (
    <div className={`popup popup-${name} ${isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__container">
            <button type="button" className="popup__close-button popup-newAvatar__close-button" onClick={onClose}></button>
            <h3 className="popup__title">{title}</h3>
            <form noValidate action="#" id="newAvatar-form" className="popup__form popup-newAvatar__form" method="POST" name={name}>
                {children}
            </form>
            <button type="submit" form="newAvatar-form" className="popup__save-button popup-newAvatar__save-button">{buttonText}</button>
        </div>
    </div>
    )
}
