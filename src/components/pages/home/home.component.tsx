import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { ScrollToTopOnMount } from '../../../utility/scrollToTopOnMount';
import HomeBanner from './homeBanner/homeBanner.component';
import FeaturedComics from './featuredComics/featuredComics.component';
import NewReleasedComics from './newReleasedComics/newReleasedComics.component';
import TestiSlider from './testiSlider/testiSlider.component';
import BeACreator from './beACreator/beACreator.component';

import comics1 from "../../../images/cover/my-body-my-rule.jpg";
import comics2 from "../../../images/cover/deep-inside-mt-makulot.jpg";
import comics3 from "../../../images/cover/little-blue-witch.jpg";
import comics4 from "../../../images/cover/clown.jpg";

import comics9 from "../../../images/cover/nutcracker.jpg";
import comics6 from "../../../images/cover/bad-grass.jpg";
import comics7 from "../../../images/cover/drama.jpg";
import comics8 from "../../../images/cover/angelo.jpg";

import comics10 from "../../../images/cover/29.jpg";
import comics11 from "../../../images/cover/weird-day.jpg";
import comics12 from "../../../images/cover/inked.jpg";
import comics13 from "../../../images/cover/balut-penoy.jpg";
import comics14 from "../../../images/cover/king.jpg";
import MobileApp from './mobileApp/mobileApp.component';


const Home = (props:any) => {

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

  const featComArr = [
    {thumb: comics1, genre: "Romance", likes:3},
    {thumb:  comics2, genre: "Adventure", likes:4},
    {thumb:  comics3, genre: "Fantasy", likes:1},
    {thumb:  comics4, genre: "Horror", likes:9},
  ];

  const newComArr = [
    {thumb:   comics9, genre: "Comedy", likes:4},
    {thumb:  comics6, genre: "Slice of life", likes:4},
    {thumb:  comics7, genre: "Drama", likes:1},
    {thumb:  comics8, genre: "Sports", likes:9},
  ];

  const reactionsArr = [
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
  
  const handleButtons = (name:string) => {
    changeModalValue(["drawerModal"], false);
    setNavValue();
    setModalValue();
    changeNavValue([name], true);
    if(name==="comicsLink"){
      history.push("./comics");
    }

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
