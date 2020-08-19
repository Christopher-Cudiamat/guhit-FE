import React from 'react';
import Slider from "react-slick";
import {icon} from "../../../../images/imgConst";

import './testiSlider.css';
import {TitleSection } from '../../../../styleComponents/ui/title.syle';
import { Div } from "./testiSlider.style"
import Button from '../../../../styleComponents/ui/button.style';

import {FaQuoteLeft} from 'react-icons/fa';


const TestiSlider = (props:any) => {

  let {reactionsArr} = props;

  const settings = {
    className: "slider bg",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    speed: 500,
    adaptiveHeight: true,
    prevArrow: <icon.prevArrow fontSize={"8rem"}/>,
    nextArrow: <icon.nextArrow fontSize={"8rem"}/>,
  };

  return (
    <div>
        <Div testimonials>
          <TitleSection>
            Readers Reactions
          </TitleSection>

          <Slider {...settings}>
            {
              reactionsArr.map((el:any,index:number)=>{
              return <Div contents key={index}>
                        <div>
                          <img src={el.cover} alt="banner 1"/>
                        </div>
                        <div>
                          <icon.quote/>
                          <p>{el.message}</p>
                          <p>
                            -{el.creatorName} / {el.creatorDisplayName}
                          </p>
                          <Button secondary>
                            Start Reading
                          </Button>
                        </div>
                      </Div>
              })
            }
          </Slider>
        </Div> 
    </div> 
  );
};

export default TestiSlider;
