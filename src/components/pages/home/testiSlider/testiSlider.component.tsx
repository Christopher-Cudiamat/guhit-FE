import React from 'react';
import { useHistory } from 'react-router';
import Slider from "react-slick";

import './testiSlider.css';
import {TitleSection } from '../../../../styleComponents/ui/title.syle';
import { Div } from "./testiSlider.style"
import Button from '../../../../styleComponents/ui/button.style';

import comics1 from "../../../../images/comics-6.jpg";
import comics2 from "../../../../images/comics-2.jpg";
import comics3 from "../../../../images/comics-3.jpg";
import comics4 from "../../../../images/comics-4.jpg";
import comics5 from "../../../../images/comics-5.jpg";

import {FaQuoteLeft} from 'react-icons/fa';
import {IoIosArrowForward} from 'react-icons/io';
import {IoIosArrowBack} from 'react-icons/io';


const TestiSlider = (props:any) => {

  const history = useHistory();

  const settings = {
    className: "slider bg",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    speed: 500,
    // adaptiveHeight: true,
   
    nextArrow: <IoIosArrowForward fontSize={"8rem"}/>,
    prevArrow: <IoIosArrowBack fontSize={"8rem"}/>
  };

  const testiArr = [
    {
      cover: comics2,
      message: "Steve & Kate’s camp runs summer camps for children across the U.S. The unique thing about Steve & Kate’s camp is that their entire website is essentially a series of customer testimonials.",
      creatorName: "KARL PERALTA",
      creatorDisplayName: "@KarlMarvin14",
    },
    {
      cover: comics4,
      message: "Steve & Kate’s camp runs website is essentially a series of customer summer camps for children across the U.S. The unique thing about Steve & Kate’s camp is that their entire website is essentially a series of customer testimonials.",
      creatorName: "REJIK CAUNTAY",
      creatorDisplayName: "@jik-jik",
    },
    {
      cover: comics3,
      message: "Steve & Kate’s camp runs summer camps for children across the U.S. The unique thing about Steve & Kate’s camp is that their entire.",
      creatorName: "TOPS VALENCIA",
      creatorDisplayName: "@ChrisCudi",
    },
    {
      cover: comics1,
      message: "Steve & Kate’s camp runs website is essentially a series of customer summer camps for children across the U.S. The unique thing about Steve & Kate’s camp is that their entire website is essentially a series of customer testimonials.",
      creatorName: "REJIK CAUNTAY",
      creatorDisplayName: "@jik-jik",
    },
    {
      cover: comics5,
      message: "Steve & Kate’s camp runs summer camps for children across the U.S. The unique thing about Steve & Kate’s camp is that their entire.Steve & Kate’s camp runs website is essentially a series of customer summer camps.",
      creatorName: "TOPS VALENCIA",
      creatorDisplayName: "@ChrisCudi",
    },
  ];

  

  return (
    <div>
        <Div testimonials>
          <TitleSection>
            Readers Reactions
          </TitleSection>

          <Slider {...settings}>
            {
              testiArr.map((el,index)=>{
              return <Div contents key={index}>
                        <div>
                          <img src={el.cover} alt="banner 1"/>
                        </div>
                        <div>
                          <FaQuoteLeft/>
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
