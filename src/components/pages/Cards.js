import React from 'react';
import './Cards.css';
import {CardItem} from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <div className="card__item">
              <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden lakes and lavas deep inside the Country'
              label='Adventure'
              path='/services'
            />
            </div> 
            <div className="card__item">
              
            <CardItem
              src='images/img-2.jpg'
              text='Explore the hidden waterfall deep inside the Uncharted Nile'
              label='Luxury'
              path='/services'
              />
              </div> 
          </ul>
          <ul className='cards__items'>
          <div className="card__item">
              
            <CardItem
              src='images/img-2.jpg'
              text='Set Sail in the Atlantic Ocean visiting inside the  Waters'
              label='Mystery'
              path='/services'
              />
              </div> 
              <div className="card__item">
              
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
              />
              </div> 
              <div className="card__item">
              
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
              />
              </div> 
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;