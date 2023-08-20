import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import './styles.css';

function ReviewCards() {
  return (
    <div className='cards'>
      <h1 className="text-style">Check out some highlights from 2023!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://i2-prod.edinburghlive.co.uk/incoming/article19519300.ece/ALTERNATES/s1200d/0_GettyImages-1149940258.jpg'
              text='Quadrantids Meteor Shower'
              label='3-4 January'
            />

            <CardItem
              src='https://cdn.mos.cms.futurecdn.net/FGicVTjLV85SWuS8sJg3fJ.jpg'
              text='Total lunar eclipse'
              label='16 May'
            />

            <CardItem
              src='https://static.toiimg.com/thumb/msid-99066723,imgsize-9314,width-400,resizemode-4/99066723.jpg'
              text='Planets align in order'
              label='24 June'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/main_image_star-forming_region_carina_nircam_final-1280.jpg'
              text='Webb Space Telescope first photos'
              label='12 July'
            />
            <CardItem
              src='https://c4.wallpaperflare.com/wallpaper/995/737/290/space-planet-mercury-black-background-wallpaper-preview.jpg'
              text='Mercury at Greatest Eastern Elongation'
              label='21 December'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ReviewCards;