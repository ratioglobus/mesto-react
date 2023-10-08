import { useState } from 'react'

import Header from './Header'
import Main from './Main'
import PopupWithForm from './PopupWithForm'
import PopupWithImage from './PopupWithImage'
import Footer from './Footer'


function App() {

  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = useState(false);
  const [isImagePopupOpen, setisImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditAvatarClick() {
    setisEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setisEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setisAddPlacePopupOpen(true);
  }

  function handleCardClick(cardData) {
    setisImagePopupOpen(true);
    setSelectedCard(cardData);
  }

  function closeAllPopups() {
    setisEditProfilePopupOpen(false);
    setisAddPlacePopupOpen(false);
    setisEditAvatarPopupOpen(false);
    setisImagePopupOpen(false);
  }

  return (
    <>
      <Header/>
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer/>

      <PopupWithForm
        title='Обновить аватар'
        name="newAvatar-form"
        buttonText='Сохранить'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
            type="url"
            id="linkNewAvatar"
            name="linkNewAvatar"
            className="popup__input popup__input_value_link-newAvatar"
            required=""
            placeholder="Ссылка на картинку"
            autoComplete="off"
        />
        <span className='popup__error-message' id='error-linkNewAvatar'></span>
      </PopupWithForm>

      <PopupWithForm
        title='Редактировать профиль'
        name='profile-form'
        buttonText='Сохранить'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          id="nameProfile"
          name="nameProfile"
          className="popup__input popup__input_value_name"
          placeholder="Введите имя"
          autoComplete="off"
          minLength={2}
          maxLength={40}
          required=""
        />
        <span id="error-nameProfile" className="popup__error-message"></span>
        <input
          id='about'
          className='popup__input popup__input_value_about'
          type='text'
          name='aboutProfile'
          minLength={2}
          maxLength={200}
          placeholder='О себе'
          required=""
        />
        <span id="error-aboutProfile" className="popup__error-message" />
      </PopupWithForm>

      <PopupWithForm
        title='Новое место'
        name='addimage-form'
        buttonText='Создать'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          id="namenewimage"
          name="namenewimage"
          className="popup__input popup__input_value_name-addimage"
          placeholder="Название"
          autoComplete="off"
          minLength={2}
          maxLength={30}
          required=""
        />
        <span id="error-namenewimage" className="popup__error-message" />
        <input
          type="url"
          id="linknewimage"
          name="linknewimage"
          className="popup__input popup__input_value_link-addimage"
          placeholder="Ссылка на картинку"
          autoComplete="off"
          required=""
        />
        <span id="error-linknewimage" className="popup__error-message" />
      </PopupWithForm>

      <PopupWithForm
        title='Вы уверены?'
        name='deleteConfirm-form'
        buttonText='Да'
        isOpen={false}
        onClose={closeAllPopups}
      ></PopupWithForm>

      <PopupWithImage
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      />
    </>
  )
}

export default App;
