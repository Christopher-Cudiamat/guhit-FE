import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { ScrollToTopOnMount } from '../../../utility/scrollToTopOnMount';
import HomeBanner from './homeBanner/homeBanner.component';
import FeaturedComics from './featuredComics/featuredComics.component';
import NewReleasedComics from './newReleasedComics/newReleasedComics.component';
import TestiSlider from './testiSlider/testiSlider.component';
import BeACreator from './beACreator/beACreator.component';
import MobileApp from './mobileApp/mobileApp.component';
import { HomeTypes } from './home.d.type';
import { featComArr, newComArr, reactionsArr } from './home.config';



const Home: React.FC<HomeTypes> = props => {

  let {
    setNavValue,
    setModalValue,
    changeNavValue,
    changeModalValue
  } = props;
  
  const history = useHistory();

  useEffect(() => {
    setNavValue();
    changeNavValue("homeLink", true);
  }, []);
  
  const handleButtons = (name:string) => {
    changeModalValue("drawerModal", false);
    setNavValue();
    setModalValue();
    changeNavValue(name, true);
    if(name==="comicsLink") history.push("./comics");
  };

 

  return (
    <div>
          
        <ScrollToTopOnMount/>

        <HomeBanner handleButtons={handleButtons}/>
       
        <FeaturedComics 
          featComArr={featComArr}
          handleButtons={handleButtons}/>
        
        <NewReleasedComics 
          newComArr={newComArr}
          handleButtons={handleButtons}/>

        <TestiSlider reactionsArr={reactionsArr}/>

        <BeACreator/>

        <MobileApp />
        
    </div> 
  );
};

export default Home;
