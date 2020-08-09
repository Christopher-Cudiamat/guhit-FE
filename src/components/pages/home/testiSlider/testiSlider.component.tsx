import React from 'react';
import { useHistory } from 'react-router';
import Slider from "react-slick";

import './testiSlider.css';
import {TitleSection } from '../../../../styleComponents/ui/title.syle';
import { Div } from "./testiSlider.style"
import Button from '../../../../styleComponents/ui/button.style';

import comics10 from "../../../../images/cover/29.jpg";
import comics11 from "../../../../images/cover/weird-day.jpg";
import comics12 from "../../../../images/cover/inked.jpg";
import comics13 from "../../../../images/cover/balut-penoy.jpg";
import comics14 from "../../../../images/cover/king.jpg";

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
      cover: comics10,
      message: "A cold stoic assasin on his quest for vengeance. This one will keep you at the edge of your seat. What more could you ask for?",
      creatorName: "KARL PERALTA",
      creatorDisplayName: "@Kaloy14",
    },
    {
      cover: comics11,
      message: "Steve & Kate’s camp runs website is essentially a series of customer summer camps for children across the U.S. The unique thing about Steve & Kate’s camp is that their entire website is essentially a series of customer testimonials.",
      creatorName: "REJIK CAUNTAY",
      creatorDisplayName: "@jik-jik",
    },
    {
      cover: comics12,
      message: "The series proves that women can be fierce and loyal, as well as empathetic.",
      creatorName: "PATRICK DE LEON",
      creatorDisplayName: "@Puting-Kuneho",
    },
    {
      cover: comics13,
      message: "Steve & Kate’s camp runs website is essentially a series of customer summer camps for children across the U.S. The unique thing about Steve & Kate’s camp is that their entire website is essentially a series of customer testimonials.",
      creatorName: "REJIK CAUNTAY",
      creatorDisplayName: "@jik-jik",
    },
    {
      cover: comics14,
      message: "The series proves that women can be fierce and loyal, as well as empathetic.",
      creatorName: "PATRICK DE LEON",
      creatorDisplayName: "@Puting-Kuneho",
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
