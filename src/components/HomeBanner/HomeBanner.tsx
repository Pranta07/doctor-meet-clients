import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import TextAnimation from './HomeBannerAnimations/TextAnimation';
import './HomeBanner.css';
const styles = {
  slideContainer: {
    height: 500,
  },
  slide: {
    padding: 15,
    minHeight: 500,
    color: '#fff',
  },
  
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  scroll: {
    height: 100,
    overflow: 'scroll',
  },
  slide3: {
    height: 200,
    backgroundColor: '#6AC0FF',
  },
};

const HomeBanner = () => {
 
  return (
    <SwipeableViews containerStyle={styles.slideContainer} axis="y" resistance enableMouseEvents>
      <div className="slider-1" style={Object.assign({}, styles.slide, )}>
        
          <img className="slider-1-bg" src="https://images.pexels.com/photos/4031821/pexels-photo-4031821.jpeg" alt="" />
          <img className="slider-1-bg-2" src="https://images.pexels.com/photos/3825539/pexels-photo-3825539.jpeg" alt="" />
        
     <TextAnimation></TextAnimation>
     <h1>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</h1>
<button className='btn-consult'>Consult today</button>
      </div>
      <div style={Object.assign({}, styles.slide, styles.slide2)}>slide n°2</div>
     
        <div style={Object.assign({}, styles.slide, styles.slide3)}>slide n°3</div>
     
    </SwipeableViews>
  );
};

export default HomeBanner;