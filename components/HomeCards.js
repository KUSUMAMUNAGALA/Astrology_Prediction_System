import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import './styles.css';

function Cards() {
  return (
    <div className='cards'>
      <h1 className="text-style">Check out some of the astronomical events happening this year!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://media.kvue.com/assets/WCNC/images/c58ef3fa-9fc7-4bb4-927f-131121547e0a/c58ef3fa-9fc7-4bb4-927f-131121547e0a_1140x641.jpg' // src\components\Cards.js src\assets\images\img-9.jpg
              text='γ-Normid meteor shower'
              label='14 March'
              //path='/services'
            />
            <CardItem 
              src='https://cdn.mos.cms.futurecdn.net/tm4QNWLdBhk5KZkyUzDnmn.jpg'
              text='Solar eclipse'
              label='20 April'
              //path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://images6.alphacoders.com/878/thumb-1920-878584.jpg'
              text='Lunar Occultation of Jupiter'
              label='17 May'
              //path='/services'
            />
            <CardItem
              src='https://www.nj.com/resizer/EZXFNd8ku5UJzJXJPJNQGxZSKSE=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.nj.com/home/njo-media/width2048/img/new-jersey-weather/photo/blue-moon-supermoon-2018jpg-9c60168ef740bd21.jpg'
              text='Super Blue Moon'
              label='31 August'
              //path='/products'
            />
            <CardItem
              src='https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41550-022-01600-7/MediaObjects/41550_2022_1600_Figa_HTML.png'
              text='Conjunction of the Moon and Pleiades'
              label='3 October'
              //path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;