import React, { useEffect, useState } from 'react';
import { LinkRouter } from '../../../styleComponents/ui/link.style';
import { Banner, BannerTitle, BannerText } from '../../../styleComponents/ui/banner.style';

import bannera from '../../../images/loginImageblack.png';
import Button from '../../../styleComponents/ui/button.style';
import { Div, Container } from './publish.style';
import './publish.css';

import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { TitleSection } from '../../../styleComponents/ui/title.syle';

import { FaDollarSign } from 'react-icons/fa';
import { FaPencilAlt } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';

import  test1 from '../../../images/publish/test1.png';
import  test2 from '../../../images/publish/test2.png';
import  test3 from '../../../images/publish/test3.png';
import  test4 from '../../../images/publish/test4.png';
 

const Publish = (props:any) => {

  const {registration,profile} = props;
  
   const [monetize, setMonetize] = useState<any>({adRevenue: true,suppProgram: false,premStories: false,}
   );

  useEffect(() => {
    scrollSpy.update();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
   
  useEffect(() => {
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const  navArray = [
    {title:"Monetization", link: "monetization"},
    {title:"Community", link: "community"},
    {title:"Studio Guhit", link: "studio"},
    {title:"Submit your work", link: "submit"},
    {title:"Create", link: "publishOption"},
  ]

  const handleMonetization = (name1:string,name2:string,name3:string) => {
    setMonetize({[name1]: true,[name2]: false,[name3]: false});
  }

  return (
    <Container id="containerElement">
      <Div bannerContainer>
        <Banner bgImg={bannera}>
          <BannerTitle>How we help creators</BannerTitle>
          <BannerText>
            At Guhit, creators are limited only by what they dare to dream.
            Guhit can help creators bring their stories to print, television, feature film, merchandising, and more.
          </BannerText>
          <Link to="publishOption" spy={true} smooth={true} offset={-55} duration={800}>
            <Button secondary> Get Started</Button>
          </Link>
        </Banner>
      </Div>

      <Div nav>
        <ul>
          {
            navArray.map((el,index) => {
              return <Link
                        key={index}   
                        className="list" 
                        activeClass="active" 
                        
                        to={el.link} 
                        spy={true} 
                        smooth={true} 
                        offset={-53} 
                        duration={500}>
                        {el.title}
                      </Link>
            })
          }
        </ul>
      </Div>

      <Element name="monetization">
        <Div monetization>
            <div>
              {
                monetize.adRevenue 
                ? 
                  <>
                    <img src={test1} alt="drawing"/>
                    <p>Creators can earn ad revenue whenever a reader reads their comics or novels. Simple and easy.</p>
                  </>
                : monetize.suppProgram
                ?
                  <> 
                    <img src={test2} alt="drawing"/>
                    <p>Readers can directly support you with Ink, our digital currency.</p>
                  </> 
                : monetize.premStories
                ?
                  <>
                    <img src={test3} alt="drawing"/>
                    <p>Our Premium Publishing Program empowers creators to monetize through Tapas' micropayment system..</p>
                  </>
                : null
              }
             
            </div>
            <div>
              <TitleSection marginBottom={"5rem"} fontWeight={"bold"}>
                Monetization
              </TitleSection>
              <p>Earn money doing what you love with Guhit</p>
              <div 
             
                onClick={e =>handleMonetization("adRevenue","suppProgram","premStories")}>
                <FaEye/>
                <p>Ad revenue</p>
              </div>
              <div  
                onClick={e =>handleMonetization("suppProgram","adRevenue","premStories")}>
                <FaPencilAlt/>
                <p>Support program</p>
              </div>
              <div 
                onClick={e =>handleMonetization("premStories","suppProgram","adRevenue")}>
                <FaDollarSign/>
                <p>Premium stories</p>
              </div>
            </div>
        </Div>
      </Element>

      <Element name="community">
        <Div community>
          <div>
            <TitleSection marginBottom={"5rem"} fontWeight={"bold"}>
              Community & Connecting
            </TitleSection>
            <p>
              Our incredibly supportive community is home to over 52,000 creators and millions of readers. Our love of storytelling makes us a perfect home for your stories to find fans.
            </p>
            </div>
            <img src={test2} alt="drawing"/>
        </Div>
      </Element>

      <Element name="studio">
        <Div studio>
            <img src={test4} alt="drawing"/> 
            <div>
              <TitleSection marginBottom={"5rem"} fontWeight={"bold"}>
                Studio Guhit
              </TitleSection>
              <p>
                Our incredibly supportive community is home to over 52,000 creators and millions of readers. Our love of storytelling makes us a perfect home for your stories to find fans.
              </p>
            </div>
        </Div>
      </Element>

      <Element name="submit">
        <Div submit>
          <div>
            <TitleSection marginBottom={"5rem"} fontWeight={"bold"}>
              Submit your work
            </TitleSection>
            <p>
              Studio Tapas celebrates diverse stories and storytellers to bring you comics that you can't find anywhere else.
              Every creator has a unique voice, and we want to help them share their stories with the world.
            </p>
            </div> 
            <img src={test3} alt="drawing"/>
        </Div>
      </Element>

      <Element name="publishOption">
      <Div publishOption> 
        <Banner height={"60vh"} bgImg={bannera}>
          <BannerTitle>Have fun creating!</BannerTitle>
          <div>
            <LinkRouter 
              to={
                  !registration.isAuthenticated 
                  ? {pathname:"/login" , state:true}
                  : profile.isCreator && registration.isAuthenticated 
                  ? "/publish-comic-series" 
                  : "/publish-creator-info"
                }
                >
              <Button secondary> Create new comic</Button>
            </LinkRouter>
            <LinkRouter to="/publish-creator-info">
              <Button disabled secondary>Create new novel</Button>
            </LinkRouter> 
          </div>
        </Banner>  
      </Div> 
      </Element>

    </Container>

  );
};

export default  Publish;

