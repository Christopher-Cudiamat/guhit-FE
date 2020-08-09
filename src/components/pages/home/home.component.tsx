import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { ScrollToTopOnMount } from '../../../utility/scrollToTopOnMount';
import HomeBanner from './homeBanner/homeBanner.component';
import FeaturedComics from './featuredComics/featuredComics.component';
import NewReleasedComics from './newReleasedComics/newReleasedComics.component';
import TestiSlider from './testiSlider/testiSlider.component';

import { TitleSection } from '../../../styleComponents/ui/title.syle';
import { Div } from "./home.styled"
import Button from '../../../styleComponents/ui/button.style';
import Card from '../../../styleComponents/ui/card.style';
import Link, { LinkRouter } from '../../../styleComponents/ui/link.style';

import creator from "../../../images/creator.png";
import phone from "../../../images/phone.png";
import comics1 from "../../../images/cover/my-body-my-rule.jpg";
import comics2 from "../../../images/cover/deep-inside-mt-makulot.jpg";
import comics3 from "../../../images/cover/little-blue-witch.jpg";
import comics4 from "../../../images/cover/clown.jpg";

import comics9 from "../../../images/cover/nutcracker.jpg";
import comics6 from "../../../images/cover/bad-grass.jpg";
import comics7 from "../../../images/cover/drama.jpg";
import comics8 from "../../../images/cover/angelo.jpg";



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
