import React from 'react';
import { Div } from './publishCommunity.style';
import { TitleSection } from '../../../../styleComponents/ui/title.syle';
import  communityImage from '../../../../images/publish/test2.png';


const PublishCommunity: React.FC = () => {

  return (
    <Div community>
      <div>
        <TitleSection marginBottom={"5rem"} fontWeight={"bold"}>
          Community & Connecting
        </TitleSection>
        <p>
          Our incredibly supportive community is home to over 52,000 creators and millions of readers. Our love of storytelling makes us a perfect home for your stories to find fans.
        </p>
      </div>
      <img src={communityImage} alt="Guhit community image"/>
    </Div>
  );
};

export default  PublishCommunity;

