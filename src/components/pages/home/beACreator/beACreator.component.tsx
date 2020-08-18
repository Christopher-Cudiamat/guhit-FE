import React from 'react';
import { icon } from '../../../../images/imgConst';

import Button from '../../../../styleComponents/ui/button.style';
import creator from "../../../../images/creator.png";
import { Div } from "./beACreator.style"
import { TitleSection } from '../../../../styleComponents/ui/title.syle';


const BeACreator = (props:any) => {

  return (
    <>
    <Div status>
          <div>   
            <icon.pencil/>
            <p>1.Create</p>
            <p>Share your drawings and original story on Guhit. Find the writing resources you need to craft a story only you can tell.</p>
          </div>
          <div>
            <icon.globe/>
            <p>2.Build</p>
            <p>Establish a global fan base as your story gains readership and momentum. Connect with other like-minded writers through storytelling.</p>
          </div>
          <div>
            <icon.dollar/>
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
      
    </>
  );
}

export default BeACreator;
