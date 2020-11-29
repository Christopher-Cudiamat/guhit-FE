import React from 'react';
import { Link } from 'react-scroll';

import { 
  Banner, 
  BannerTitle, 
  BannerText 
} from '../../../../styleComponents/ui/banner.style';
import bannera from '../../../../images/loginImageblack.png';
import Button from '../../../../styleComponents/ui/button.style';
import { Div } from './publishBanner.style';


const PublishBanner: React.FC = () => {

  return (
    <Div bannerContainer>
      <Banner bgImg={bannera}>
        <BannerTitle>
          How we help creators
        </BannerTitle>
        <BannerText>
          At Guhit, creators are limited only by what they dare to dream.
          Guhit can help creators bring their stories to print, television, feature film, merchandising, and more.
        </BannerText>

        <Link 
          to="monetization" 
          spy={true} 
          smooth={true} 
          offset={-55} 
          duration={800}>
          <Button secondary> 
            Learn More
          </Button>
        </Link>
      </Banner>
    </Div>
  );
};

export default  PublishBanner;

