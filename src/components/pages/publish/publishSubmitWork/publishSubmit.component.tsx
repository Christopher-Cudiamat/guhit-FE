import React from 'react';
import { Div } from './publishSubmit.style';
import { TitleSection } from '../../../../styleComponents/ui/title.syle';
import  submitImage from '../../../../images/publish/test3.png';


const PublishSubmit: React.FC = () => {

  return (
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
        <img src={submitImage} alt="Submit image"/>
    </Div>
  );
};

export default  PublishSubmit;

