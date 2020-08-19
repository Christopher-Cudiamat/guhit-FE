import React from 'react';
import Slider from "react-slick";
import {Div} from "./about.style";
import { TitleSection } from '../../../styleComponents/ui/title.syle';

import award1 from '../../../images/about/award3.jpg';
import award2 from '../../../images/about/award2.jpg';
import award3 from '../../../images/about/award1.jpg';
import award4 from '../../../images/about/award4.png';

import image1 from '../../../images/team/img1.png';
import image2 from '../../../images/team/img2.png';
import image3 from '../../../images/team/img3.png';
import image4 from '../../../images/team/img4.png';
import image5 from '../../../images/team/img5.png';
import image6 from '../../../images/team/img6.png';
import image7 from '../../../images/team/img7.png';
import { Banner } from '../../../styleComponents/ui/banner.style';


import bannera from '../../../images/loginImageblack.png';



const About = (props:any) => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows:true,
    speed: 1000,
    centerMode: true,
    adaptiveHeight: true,
    centerPadding: "10px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows:true,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    // autoplay: true,
    // fade: true,
  };

  const teamMembersArr = [
    {

      image: image1,
      nickName: "Tops",
      name: "Christopher Valencia",
      position: "Founder/CEO",
  
    },
    {
      image: image2,
      nickName: "Simon",
      name: "Simon Lim",
      position: "Front-End/UI/UX",
  
    },
    {
      image: image3,
      nickName: "Kaloy",
      name: "Karl Peralta",
      position: "Illustrator / Visual artist",
  
    },
    {
      image: image4,
      nickName: "Lique",
      name: "Angelique Hernandez",
      position: "Content Manager",
    },
    {
      image: image5,
      nickName: "Mokay",
      name: "Mikhaela Atento",
      position: "Graphic/Web Designer",
    },
    {
      image: image6,
      nickName: "Chado",
      name: "Richard Glorioso",
      position: "Brand Ambassador",
    },
    {
      image: image7,
      nickName: "Rhyan",
      name: "Rhyan Burgos",
      position: "Software Developer",
    },
    {
      image: image2,
      nickName: "Jik-Jik",
      name: "Rejik Cauntay",
      position: "Product Manager",
    }
  ]

  return (
    <div style={{position:'relative', 	overflowX: "hidden"}}>
      
      <Div banner>
        <Banner height={"55vh"} bgImg={bannera}>
          <p>About Us</p>
          <p>We are a small team who love drawings and story-telling</p>
        </Banner>
      </Div>
 
      <Div history>
        <TitleSection>History</TitleSection>
        <p>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
        </p>
        <br></br>
        <br></br>
        <p>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words.
        </p>
      </Div>

      <Div missionVision>
        <TitleSection>Mission & Vision</TitleSection>
        <p>
          <b>Our Mission</b> many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable
        </p>
        <br></br>
        <br></br>
        <p>
          <b>Our Vision</b> many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
        </p>
      </Div>

      <Div team>
        <TitleSection>Team Guhit</TitleSection>

        { 
          teamMembersArr.map((el,index)=>{
            
            let render =  <div key={index} >
                            <img src={el.image} alt="team images"/>
                            <h2>{el.nickName}</h2>
                            <p>{el.name}</p>
                            <p>{el.position}</p>
                          </div>;

            return render

          }) 
        }
      </Div>

      <Div media>
        <TitleSection>Media Recognitions</TitleSection>

        <Slider {...settings}>
          <div >
            <img src={award1} alt="banner 1"/>
          </div>
          <div >
            <img src={award4} alt="banner 1"/>
          </div>
          <div >
            <img src={award2} alt="banner 1"/>
          </div>
          <div >
            <img src={award3} alt="banner 1"/>
          </div>
        </Slider>
      </Div>
      
      {/* 
      <Div dropdown>
        <label>Jump to:</label>

        {/* 
        Note - this feature will be used in the future. Dont delete
        <select id="cars">
          <option value="history">History</option>
          <option value="mission">Mision & Vision</option>
          <option value="team">Guhit Team</option>
          <option value="media">Media</option>
        </select> 
      </Div>
       */}``
      
    </div>
  );
};

export default About;