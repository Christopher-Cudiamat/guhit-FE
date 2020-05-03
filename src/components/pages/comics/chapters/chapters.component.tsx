import React, { useState } from 'react';
import Card from '../../../../styleComponents/ui/card.style';

// import creatorThumb1 from "../../../../images/user/avatar/avatar-1.png";
// import creatorThumb2 from "../../../images/user/avatar/avatar-2.png";
// import creatorThumb3 from "../../../images/user/avatar/avatar-3.png";
import { Div, Avatar, Support } from './chapters.style';
import { TitleSection } from '../../../../styleComponents/ui/title.syle';
import {LinkRouter} from '../../../../styleComponents/ui/link.style';
import { 
  Accordion,
  AccordionTitle,
  AccordionDetails,
  AccordionInput,
  AccordionInputControl
} from '../../../../styleComponents/ui/accordion.style';
import { FaSearch } from 'react-icons/fa';

import comics from "../../../../images/chapter-cover.png";
import creator from "../../../../images/user/avatar/avatar-3.png";



const Chapters = (props:any) => {
  const [overview, setOverview] = useState(false);
  const [search, setSearch] = useState(false);
  
  
  const chaptersListsArr = [
    {
      thumb: comics, 
      date: "Dec 13, 2020",
      chapterTitle: "The beginning", 
      chapterNumber: "#1",
    },
    {
      thumb: comics, 
      date: "Dec 13, 2020",
      chapterTitle: "Black Pink", 
      chapterNumber: "#2",
    },
    {
      thumb: comics, 
      date: "Dec 13, 2020",
      chapterTitle: "Twice", 
      chapterNumber: "#3",
    },
    {
      thumb: comics, 
      chapterTitle: "Bullet proof boyscouts", 
      date: "Dec 13, 2020",
      chapterNumber: "#4",
    },
    {
      thumb: comics, 
      date: "Dec 13, 2020",
      chapterTitle: "Yes or Yes", 
      chapterNumber: "#5",
    },
    {
      thumb: comics, 
      date: "Dec 13, 2020",
      chapterTitle: "Playing with fire", 
      chapterNumber: "#6",
    },
    {
      thumb: comics, 
      date: "Dec 13, 2020",
      chapterTitle: "Kill this love", 
      chapterNumber: "#7",
    },
    {
      thumb: comics, 
      date: "Dec 13, 2020",
      chapterTitle: "Save me", 
      chapterNumber: "#8",
    },
    {
      thumb: comics,
      date: "Dec 13, 2020", 
      chapterTitle: "The day you said Goodnight", 
      chapterNumber: "#9",
    },
    {
      thumb: comics, 
      date: "Dec 13, 2020",
      chapterTitle: "Fancy", 
      chapterNumber: "#10",
    },
    
   
  ];

  const handleOverview = () => {
    setOverview(!overview);
    setSearch(false);
  }
  const handleSearchChapter = () => {
    setSearch(!search);
    setOverview(false);
  }


  return (
    <div>

      <Div style={{position:"relative"}}>
        <Div banner>
        </Div>
        <TitleSection>Winter Heaven</TitleSection>
      </Div>

      <Div overview>
        <Accordion secondary >
          <AccordionTitle 
            onClick={handleOverview}
            show={overview}>
            Overview
          </AccordionTitle>
          <AccordionDetails show={overview}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae deleniti maiores esse accusantium consectetur ipsam quisquam laboriosam velit nemo odio qui dicta eius aliquam, voluptates distinctio! Nam, nostrum culpa? Libero.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae deleniti maiores esse accusantium consectetur ipsam quisquam laboriosam velit nemo odio qui dicta eius aliquam, voluptates distinctio! Nam, nostrum culpa?
            <LinkRouter to="./">
              <Avatar src={creator} alt="creator avatar" />
              <Support>Support Creator</Support>
            </LinkRouter>
          </AccordionDetails>
        </Accordion>  
        <Accordion secondary>
          <AccordionTitle
            onClick={handleSearchChapter}
            show={search}>Search Chapter</AccordionTitle>
          <AccordionInputControl
          show={search}>
            <FaSearch 
            color={"#fff"}
            size={18} 
            style={{
              position:"absolute",
              top: "27%",
              right: "4%",
            }}/>
            <AccordionInput 
            placeholder="type chapter name or number.."
            />
          </AccordionInputControl>
        </Accordion>
      </Div>
     
      <Div chaptersList>
          <Div titleContainer>
            <h5>{chaptersListsArr.length} chapters result:</h5>
            <div>
              <div>
                <h5>Other series by </h5>
                <h5>Karl_DF </h5>
              </div>

             <Avatar small src={creator} alt="creator avatar" />
            </div>
          </Div>
          <Card containerCenter>
            { chaptersListsArr.map((el,index) => {
              
                return  <Card chapters container horizontalSquare key={index}>
                          <img src={el.thumb} alt="featured comics"/>
                          <div>
                            <p>{el.chapterTitle}</p>
                            <p>{el.date}</p>
                            <p>{el.chapterNumber}</p>
                          </div>
                        </Card>
              })
            }
          </Card>
      </Div>
    </div>
  );
};

export default Chapters;