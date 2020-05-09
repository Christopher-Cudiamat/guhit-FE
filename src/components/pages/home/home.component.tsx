import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import Slider from "react-slick";
import { ScrollToTopOnMount } from '../../../utility/scrollToTopOnMount';
import TestiSlider from './testiSlider/testiSlider.component';


import './home.css';
import { TitleMain, TitleSection } from '../../../styleComponents/ui/title.syle';
import { Div } from "./home.styled"
import Button from '../../../styleComponents/ui/button.style';
import Card from '../../../styleComponents/ui/card.style';
import Link, { LinkRouter } from '../../../styleComponents/ui/link.style';

import creator from "../../../images/creator.png";
import phone from "../../../images/phone.png";
import comics1 from "../../../images/comics-6.jpg";
import comics2 from "../../../images/comics-2.jpg";
import comics3 from "../../../images/comics-3.jpg";
import comics4 from "../../../images/comics-4.jpg";
import comics5 from "../../../images/comics-5.jpg";
import cover from "../../../images/cover.jpg";
import banner1 from "../../../images/main-banner-image-1.png";

import { FaGlobe } from 'react-icons/fa';
import { FaPencilAlt } from 'react-icons/fa';
import { FaDollarSign } from 'react-icons/fa';
import google from '../../../images/google.png';
import apple from '../../../images/apple.png';








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

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    speed: 5000,
  };

  const featComArr = [
    {thumb: cover, genre: "Comedy", likes:3},
    {thumb:  comics2, genre: "Action", likes:4},
    {thumb:  comics3, genre: "Adventure", likes:1},
    {thumb:  comics4, genre: "Horror", likes:9},
  ];

  const featNovArr = [
    {thumb: comics1, genre: "Comedy", likes:4},
    {thumb:  comics4, genre: "Action", likes:4},
    {thumb:  comics2, genre: "Adventure", likes:1},
    {thumb:  comics5, genre: "Horror", likes:9},
  ];
  
  const handleButtons = (name:string) => {
    changeModalValue(["drawerModal"], false);
    setNavValue();
    setModalValue();
    changeNavValue([name], true);
    if(name==="comicsLink"){
      history.push("./comics");
    }
    if(name==="novelsLink"){
      history.push("./novels");
    }
  };

  return (
    <div>
          
        <ScrollToTopOnMount/>

        <Slider {...settings}>
          <Div banner>
              <TitleMain fontWeight={"bold"}>Read awesome online comics and novels at your fingertips.</TitleMain>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Ratione consectetur ullam, quod, quam, illo unde esse quas 
                aperiam explicabo rem dolorum distincti.
              </p>
            <Button 
              onClick={e => handleButtons("comicsLink")}
              whiteOutline>
              Read now
            </Button>
            <img src={banner1} alt="banner 1"/>
          </Div>
        </Slider>
       
        <Div featuredSection>
          <Div featuredTitle>
            <TitleSection marginBottom={"0rem"}>Featured Comics</TitleSection>
            <Link  onClick={e => handleButtons("comicsLink")}>See all</Link>
          </Div>
          <Card containerSpaceAround>
            {featComArr.map((el,index) => {
                return  <Card primary key={index}>
                          <img src={el.thumb} alt="featured comics"/>
                          <div>
                            <p>{el.genre}</p>
                            <p>{el.likes}k Likes</p>
                          </div>
                        </Card>     
              })
            }
          </Card>
        </Div>

        <Div featuredSection>
          <Div featuredTitle>
            <TitleSection marginBottom={"0rem"}>Featured Novels</TitleSection>
            <Link  onClick={e => handleButtons("novelsLink")}>See all</Link>
          </Div>
          <Card containerSpaceAround>
            {featNovArr.map((el,index) => {
              
                return  <Card primary key={index}>
                          <img src={el.thumb} alt="featured comics"/>
                          <div>
                            <p>{el.genre}</p>
                            <p>{el.likes}k Likes</p>
                          </div>
                        </Card>
              })
            }
          </Card>
        </Div>

        <TestiSlider/>

        <Div status>
            <div>   
              <FaPencilAlt/>
              <p>1.Create</p>
              <p>Share your drawings and original story on Guhit. Find the writing resources you need to craft a story only you can tell.</p>
            </div>
            <div>
              <FaGlobe/>
              <p>2.Build</p>
              <p>Establish a global fan base as your story gains readership and momentum. Connect with other like-minded writers through storytelling.</p>
            </div>
            <div>
              <FaDollarSign/>
              <p>3.Amplify</p>
              <p>Gain Wattpad Star status and get your story published or adapted into film or television with Wattpad Books and Wattpad Studios!.</p>
            </div>
        </Div>

        <Div creatorSection>
          <TitleSection fontWeight={"bold"}>Are you a creator?</TitleSection>
          <p>Join Our Community of people who are passionate of drawing and story telling.</p>
          <Div  imgContainer><img src={creator} alt="creator doodle"/></Div>
          <Button secondary={true}>Learn more</Button>
        </Div>

        <Div downloadApp>
         
            <div>
              <TitleSection 
                fontWeight={"bold"}>
                Download our app and read wherever you are.
              </TitleSection>
              <img src={google} alt="buttons" />
              <img src={apple} alt="buttons" />
              {/* <Button secondary>Learn more</Button>
              <Button secondary>Learn more</Button> */}
            </div>
            <div>
              <img src={phone} alt="phone"/>
            </div>
        
        </Div>
        
    </div> 
  );
};

export default Home;
