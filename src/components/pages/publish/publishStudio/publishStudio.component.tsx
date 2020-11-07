import React from 'react';
import { Div } from './publishStudio.style';
import { TitleSection } from '../../../../styleComponents/ui/title.syle';
import  studioImage from '../../../../images/publish/test4.png';


const PublishStudio: React.FC = () => {

  return (
    <Div studio>
      <img src={studioImage} alt="drawing"/> 
      <div>
        <TitleSection marginBottom={"5rem"} fontWeight={"bold"}>
          Studio Guhit
        </TitleSection>
        <p>
          Our incredibly supportive community is home to over 52,000 creators and millions of readers. Our love of storytelling makes us a perfect home for your stories to find fans.
        </p>
      </div>
    </Div>
  );
};

export default  PublishStudio;

