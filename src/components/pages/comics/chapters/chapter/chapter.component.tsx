import React from 'react';
import Comment from "../../../comment/comment.component";


import { TitleSection } from '../../../../../styleComponents/ui/title.syle';
import { FaListUl } from 'react-icons/fa';
import { AiFillLike } from 'react-icons/ai';
import { FaShareAlt } from 'react-icons/fa';
import { FaCommentDots } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { FaBookmark } from 'react-icons/fa';
import {Div, Container} from './chapter.style';
import Card from '../../../../../styleComponents/ui/card.style';
import comics1 from "../../../../../images/comics-6.jpg";
import comics2 from "../../../../../images/comics-2.jpg";
import comics3 from "../../../../../images/comics-3.jpg";
import comics4 from "../../../../../images/comics-4.jpg";
import comics5 from "../../../../../images/comics-5.jpg";

import sample1 from "../../../../../images/chapter-sample1.jpg";
import sample2 from "../../../../../images/sample-chapter2.jpg";
import Slider from 'react-slick';


const pageArr = [
  {chapter: sample1,},
  {chapter: sample1,},
  {chapter: sample2,},
  {chapter: sample1,},
  {chapter: sample2,},
  {chapter: sample1,},
];

const seriesListsArr = [
  {
    thumb: comics1, 
    date: "Dec 13, 2020",
    seriesTitle: "Red Velvet", 
    genre: "Comedy",
  },
  {
    thumb: comics2, 
    date: "Dec 13, 2020",
    seriesTitle: "Black Pink", 
    genre: "Action-Comedy",
  },
  {
    thumb: comics3, 
    date: "Dec 13, 2020",
    seriesTitle: "Two in a million", 
    genre: "Romantic-Comedy",
  },
  {
    thumb: comics4, 
    date: "Dec 13, 2020",
    seriesTitle: "My hero university", 
    genre: "Fantasy-Comedy",
  },
  {
    thumb: comics5, 
    date: "Dec 13, 2020",
    seriesTitle: "B.T.S", 
    genre: "ACtion-Comedy",
  },
];

const Chapter = (props:any) => {
  
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    speed: 1000,
    centerMode: true,
   adaptiveHeight: true,
    centerPadding: "10px",
    autoplay: true,
    // fade: true,
  };


  return (
    <Container>

      <Div chapterTitle>
        <Div titles>
          <TitleSection>01. The beginning</TitleSection>
          <p>Winter Heaven</p>
        </Div>
        <Div bookmark>
          <FaBookmark fontSize={"3.4rem"} color={"#F0B110"}/>
        </Div>
      </Div>

       
      <Div chapterPages>
        {
          pageArr.map((page, index) => {
            return <div key={index}>
                      <img src={page.chapter} alt="chapter pages"/>
                    </div>
          })
        }
      </Div>

      <Div chapterNav>
        <div>
          <AiFillLike fontSize={"2.5rem"} color={"#08E5BE"}/>
          <FaShareAlt fontSize={"2.5rem"} color={"#08E5BE"}/>
          <FaCommentDots fontSize={"2.5rem"} color={"#08E5BE"}/>
        </div>

        <div>
          <MdKeyboardArrowLeft fontSize={"6rem"} color={"#919191"}/>
          <FaListUl  fontSize={"3rem"} color={"#919191"} />
          <MdKeyboardArrowRight  fontSize={"6rem"} color={"#919191"} />
        </div>
       
      </Div>

      <Div chapterOption>
        <TitleSection>Read more series:</TitleSection>
        <Div mobile>
          <Card containerCenter>
              { 
                seriesListsArr.map((el,index) => {
                
                  return  <Card  container horizontalSquare key={index}>
                            <img src={el.thumb} alt="featured comics"/>
                            <div>
                              <p>{el.seriesTitle}</p>
                              <p>{el.date}</p>
                              <p>{el.genre}</p>
                            </div>
                          </Card>
                })
              }
          </Card>
        </Div>

        <Div desktop style={{marginBottom: "7rem", marginTop: "8rem", }}>
          <Slider {...settings}>
            { 
              seriesListsArr.map((el,index) => {
                
                return  <Card  forSlider container horizontalSquare key={index}>
                          <p style={{fontSize: "1.8rem",marginBottom: ".5rem", color: "#323232", }}>{el.seriesTitle}</p>
                          <img src={el.thumb} alt="featured comics"  style={{borderRadius: "10px"}}/>
                          <div>                       
                            <p>{el.date}</p>
                            <p>{el.genre}</p>
                          </div>
                        </Card>
                })
            }
          </Slider>
        </Div>
       
      </Div>

      <Div chapterComments>
        <TitleSection>Comments:</TitleSection>
        <Comment/>
      </Div>

    </Container>
  );
};

export default Chapter;