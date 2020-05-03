import React from 'react';

import { Div,Ul, P } from './publishHeader.style';
import { MdHelpOutline } from 'react-icons/md';
import { LinkRouter } from '../../../../styleComponents/ui/link.style';


const PublishHeader = (props:any) => {

  const {
    profile,
    activeSeries,
    activeChapters,
    activeCreators,
    title,
    message,
  } = props;

  
  return (
    <div>
      {
        profile.isCreator ?
        <Div steps>
          <P style={{color:"white"}}>{title}</P>    
        </Div>
        : 
        <Div steps>
          <P active={activeCreators}>1. Create profile</P>
          <P active={activeSeries}>2. Publish new series</P>
          <P active={activeChapters}>3. Publish new chapter</P>
        </Div>
      }

      {
        profile.isCreator && activeCreators ?
        null
        :
        <Div helpNav>
          <p>{message}</p>
          <Ul tipsNav>
            <li>
              <LinkRouter primary to="">
                Community Policy
              </LinkRouter>
            </li>
            <li>
              <LinkRouter primary to="">
                Uploading Instructions
              </LinkRouter>
            </li>
            <li>
              <LinkRouter primary to="">
                Help
              </LinkRouter>
            </li>
            <li>
              <MdHelpOutline color={"#ccc"} fontSize={"3rem"}/>
            </li>
          </Ul>
        </Div>
       
      } 

    </div>
  );
};

export default  PublishHeader;