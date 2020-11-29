import React, { useState } from 'react';

import { Div } from './publishMonetization.style';
import { TitleSection } from '../../../../styleComponents/ui/title.syle';
import  test1 from '../../../../images/publish/test1.png';
import  test2 from '../../../../images/publish/test2.png';
import  test3 from '../../../../images/publish/test3.png';
import { FaDollarSign } from 'react-icons/fa';
import { FaPencilAlt } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';


const PublishMonetization: React.FC = () => {

  
  const [monetize, setMonetize] = useState<any>({
    adRevenue: true,
    suppProgram: false,
    premStories: false,
  });

  const handleMonetization = (adRevenue:string,suppProgram:string,premStories:string) => {
    setMonetize(
      {
        [adRevenue]: true,
        [suppProgram]: false,
        [premStories]: false
      }
    );
  }

  return (
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
          onClick={() =>handleMonetization("adRevenue","suppProgram","premStories")}>
          <FaEye/>
          <p>Ad revenue</p>
        </div>

        <div  
          onClick={() =>handleMonetization("suppProgram","adRevenue","premStories")}>
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
  );
};

export default  PublishMonetization;

