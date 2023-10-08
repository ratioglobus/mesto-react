import { React, useState, useEffect } from 'react';

import api from '../utils/api';
import Card from './Card';

export default function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {

    const [userName, setUserName] = useState('');
    const [cardsUrl, setCards] = useState([]);
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');

    useEffect(() => {
        Promise.all([ api.getInitialCards(), api.getUserData() ])
            .then(([cardsData, { name, about, avatar }]) => {
                setUserName(name);
                setUserDescription(about);
                setUserAvatar(avatar);
                setCards(cardsData);
            })
            .catch((err) => { console.log(err) });
      }, []);

    return (
    <main className="content">
        <section className="profile">
            <div className="profile__avatar" onClick={onEditAvatar}>
                <button type="button" className="profile__avatar-button" />
            <img
                className="profile__avatar-img"
                alt="Аватар профиля"
                src={userAvatar}
            />
            </div>
            <div className="profile__author">
            <div className="profile__info">
                <h1 className='profile__name'>{userName}</h1>
                <button type="button" className="profile__edit-button" onClick={onEditProfile}/>
            </div>
            <p className='profile__about'>{userDescription}</p>
            </div>
            <button type="button" className="profile__add-button" onClick={onAddPlace}/>
        </section>

        <section className='elements__container'>
           <div className='elements'>
              {cardsUrl.map(item => {
                return <Card key={item._id} cardData={item} onCardClick={onCardClick} />;
              })}
            </div>
        </section>
    </main>
    )
}
