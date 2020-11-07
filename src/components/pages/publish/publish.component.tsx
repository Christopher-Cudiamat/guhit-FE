import React, { useEffect } from 'react';
import { ScrollToTopOnMount } from '../../../utility/scrollToTopOnMount';
import { 
  Element,
  Events, 
  animateScroll
  as scroll, scrollSpy 
} from 'react-scroll';
import PublishBanner from './publishBanner/publishBanner.container';
import PublishCommunity from './publishCommunity/publishCommunity.component';
import PublishStudio from './publishStudio/publishStudio.component';
import PublishSubmit from './publishSubmitWork/publishSubmit.component';
import PublishBottomBanner from './publishBottomBanner/publishBottomBanner.component';
import PublishNav from './publishNav/publishNav.component';
import PublishMonetization from './publishMonetization/publishMonetization.component';
import { PublishPropTypes } from './publish.type';

import './publish.css';


const Publish: React.FC<PublishPropTypes> = ({
  registration,
  profile,
  changeNavValue,
  setNavValue
  }) => {

  useEffect(() => {
    scrollSpy.update();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
   
  useEffect(() => {
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
 

  return (
    <div id="containerElement">

      <ScrollToTopOnMount/>

      <PublishBanner />

      <PublishNav />

      <Element name="monetization">
        <PublishMonetization />
      </Element>

      <Element name="community">
        <PublishCommunity />
      </Element>

      <Element name="studio">
        <PublishStudio />
      </Element>

      <Element name="submit">
        <PublishSubmit />
      </Element>

      <Element name="publishOption">
        <PublishBottomBanner 
          isRegistered={registration.isAuthenticated}
          isACreator={profile.isCreator} 
          changeNavValue={changeNavValue}
          setNavValue={setNavValue}/>
      </Element>

    </div>

  );
};

export default  Publish;

