import React from 'react';
import TestimonialArea from '../../common/TestimonialArea';
import DestinationArea from './DestinationArea';
import GallaryArea from './GallaryArea';
import HeroArea from './HeroArea';
import LatestNews from './LatestNews';
import NewsLetterArea from './NewsLetterArea';
import OfferArea from './OfferArea';
import PackageArea from './PackageArea';
import UpcomingTour from '../homeThree/UpcomingTour';
import TourGideArea from './TourGideArea';
import Home3HeroArea from '../homeThree/Home3HeroArea';

function HomePage() {
  return (
    <>
     
      <Home3HeroArea />
     
      <UpcomingTour/>
      <DestinationArea />
      <OfferArea />
      <TestimonialArea />
     
    </>
  );
}

export default HomePage;
