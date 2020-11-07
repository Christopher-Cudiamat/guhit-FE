import React from 'react';
import { PublishBottomBannerPropTypes } from './publishBottomBanner.type';

import { Banner, BannerTitle } from '../../../../styleComponents/ui/banner.style';
import Button from '../../../../styleComponents/ui/button.style';
import { LinkRouter } from '../../../../styleComponents/ui/link.style';
import { Div } from './publishBottomBanner.style';
import bannera from '../../../../images/loginImageblack.png';


const PublishBottomBanner: React.FC<PublishBottomBannerPropTypes> = ({
  isRegistered,
  isACreator,
  changeNavValue,
  setNavValue
  }) => {

  const handleGotoLogin = () => {
    setNavValue();
    changeNavValue("loginLink", true);
  }

  return (
    <Div publishOption> 
      <Banner
        height={"60vh"} 
        bgImg={bannera}>
        <BannerTitle>Have fun creating!</BannerTitle>
        <div>
          <LinkRouter 
          onClick={handleGotoLogin}
            to={
                !isRegistered 
                ? {pathname:"/login" , state:true}
                : isACreator && isRegistered 
                ? {pathname:"./publish-comic-series",state:  "isNewSeries"}
                : "/publish-creator-info"
              }>
            <Button secondary> 
                Create new serie
            </Button>
          </LinkRouter>
          {/* 

          Note: This is for phase 3

          <LinkRouter to="/publish-creator-info">
            <Button 
              disabled 
              secondary>
              Create new novel
            </Button>
          </LinkRouter> 
           
          */}
        </div>
      </Banner>  
    </Div> 
  );
};

export default  PublishBottomBanner;

