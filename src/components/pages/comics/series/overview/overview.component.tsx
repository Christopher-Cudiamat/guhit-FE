import React from 'react';
import {LinkRouter} from '../../../../../styleComponents/ui/link.style';
import { FaSearch } from 'react-icons/fa';

import { 
  Accordion,
  AccordionTitle,
  AccordionDetails,
  AccordionInput,
  AccordionInputControl
} from '../../../../../styleComponents/ui/accordion.style';
import { Avatar, Support } from '../series.style';


const Overview = (props:any) => {

  let {series,creator,handleOverview,search,handleSearchChapter,overview} = props;
  return (
    <>
      <Accordion dark>
        <AccordionTitle 
          onClick={handleOverview}
          show={overview}>
          Overview
        </AccordionTitle>
        <AccordionDetails show={overview}>
          {series.summary}
          <LinkRouter to="./">
            <Avatar src={creator.profilePic} alt="creator avatar" />
            <Support>Support Creator</Support>
          </LinkRouter>
        </AccordionDetails>
      </Accordion>  
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
      </Accordion>
    </>
    )
}

export default Overview