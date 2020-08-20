import React from 'react';
import Slider from "react-slick";

import {teamMembersArr} from './about.json';
import {recognitionsArr} from './about.json';
import {settings} from './about.json';

import {Div} from "./about.style";
import { TitleSection } from '../../../styleComponents/ui/title.syle';
import { Banner } from '../../../styleComponents/ui/banner.style';
import bannera from '../../../images/loginImageblack.png';



const About = () => {

  return (
    <div style={{position:'relative', 	overflowX: "hidden"}}>
      
      <Div banner>
        <Banner height={"55vh"} bgImg={bannera}>
          <p>About Us</p>
          <p>We are a small team who love drawings and story-telling</p>
        </Banner>
      </Div>
 
      <Div history>
        <TitleSection>Story so far</TitleSection>
        <p>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
        </p>
        <br></br>
        <br></br>
        <p>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
        </p>
      </Div>

      <Div missionVision>
        <TitleSection>What we aim for</TitleSection>
        <div>
          <p>
            <b>Our Mission</b> many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable
          </p>
          <br></br>
          <br></br>
          <p>
            <b>Our Vision</b> many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
          </p>
        </div>
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
          {
            recognitionsArr.map((el,index) => 
              <div  key={index}>
                <img src={el} alt={`recognition ${index}`}/>
              </div>
            )
          }
        </Slider>
      </Div>
      

      {/* 

      Note - this feature will be used in the future. Dont delete.

      <Div dropdown>
        <label>Jump to:</label>

        {/* 
        <select id="cars">
          <option value="history">History</option>
          <option value="mission">Mision & Vision</option>
          <option value="team">Guhit Team</option>
          <option value="media">Media</option>
        </select> 
      </Div>
       */}
      

    </div>
  );
};

export default About;