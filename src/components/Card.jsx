import React from 'react';

export default function Card({ cardData, onCardClick }) {

    function handleClick() {
        onCardClick(cardData);
    }

    const { name, likes, link } = cardData;

    return (
        <section className="elements">
          <div className="elements__item">
            <img src={link} alt='' className='elements__photo' onClick={handleClick} />
            <div className="elements__content">
              <h2 className="elements__place">{name}</h2>
              <div className="elements__likes">
                <button type="button" className="elements__like-button"></button>
                <p className="elements__likes-count">{likes.length}</p>
              </div>
            </div>
            <button type="button" className="elements__delete"></button>
          </div>
      </section>
    )
}
