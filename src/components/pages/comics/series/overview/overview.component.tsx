//Note: dont delete commented parts we might use it if we want the search accordion

import React from 'react';
import {LinkRouter} from '../../../../../styleComponents/ui/link.style';
// import { FaSearch } from 'react-icons/fa';

import { 
  Accordion,
  AccordionTitle,
  AccordionDetails,
  // AccordionInput, 
  // AccordionInputControl
} from '../../../../../styleComponents/ui/accordion.style';
import { Avatar, Support } from './overview.style';
import Button from '../../../../../styleComponents/ui/button.style';


const Overview = (props:any) => {

  let {
    series,
    creatorPic,
    handleOverview,
    creatorName,
    // search,
    // handleSearchChapter,
    overview
  } = props;

  return (
    <>
      <Accordion dark>
        <AccordionTitle 
          onClick={handleOverview}
          show={overview}>
          {series.seriesTitle}
        </AccordionTitle>
        <AccordionDetails show={overview}>
          {series.summary}
          <LinkRouter to="./">
            <Avatar src={creatorPic} alt="creator avatar" />
            <Button primaryOutline>Support {creatorName}</Button>
          </LinkRouter>
        </AccordionDetails>
      </Accordion>  

      
      {/* 
      Accordio for search maybe we dont need it?
      <Accordion dark>
        <AccordionTitle
          onClick={handleSearchChapter}
          show={search}>Search Chapter</AccordionTitle>
        <AccordionInputControl show={search}>
          <FaSearch 
          color={"#fff"}
          size={18} 
          style={{position:"absolute",top: "27%",right: "4%"}}/>
          <AccordionInput placeholder="Type chapter's number..."/>
        </AccordionInputControl>
      </Accordion> */}
    </>
    )
}

export default Overview