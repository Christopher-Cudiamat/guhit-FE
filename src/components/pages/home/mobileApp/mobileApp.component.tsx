import React from 'react';
import { image } from '../../../../images/imgConst';

import { TitleSection } from '../../../../styleComponents/ui/title.syle';
import { Div } from './mobileApp.style';


const MobileApp = () => {
  return (
    <Div downloadApp>
      <div>
        <TitleSection 
          fontWeight={"bold"}>
          Guhit Komiks mobile app coming soon.
        </TitleSection>
        <img src={image.googlePlayBtn} alt="buttons" />
        <img src={image.appleBtn} alt="buttons" />
      </div>
      <div>
        <img src={image.phoneImg} alt="phone"/>
      </div>
    </Div>
  );
}

export default MobileApp;
