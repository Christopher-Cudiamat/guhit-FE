import React from 'react';
import Slider from "react-slick";

import { HomeBannerTypes } from './homeBanner.d.type';
import { TitleMain} from '../../../../styleComponents/ui/title.syle';
import Button from '../../../../styleComponents/ui/button.style';
import banner1 from "../../../../images/testing.png";
import { Div } from "./homeBanner.style";
import './homeBanner.css';



const HomeBanner: React.FC<HomeBannerTypes> = props => {

  let {handleButtons} = props;

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    speed: 5000,
  };

  return (
    <div>
        <Slider {...settings}>
          <Div banner>
            <div>
              <TitleMain desktop fontWeight={"bold"}>Read Guhit comics at your fingertips.</TitleMain>
              <TitleMain mobile fontWeight={"bold"}>Read Guhit comics at your fingertips.</TitleMain>
              <p>
                Guhit is home to a creator community that has published great web comics. We’re sure you’re going to find a story just for you in here!
              </p>
              <Button 
                onClick={e => handleButtons("comicsLink")}
                secondary>
                Read now
              </Button>
            </div>
            <img src={banner1} alt="banner 1"/>
          </Div>
        </Slider>        
    </div> 
  );
};

export default HomeBanner;
