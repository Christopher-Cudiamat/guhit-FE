import React from 'react';
import { postProfile, updateProfile} from '../../../../../../services/profile';
import { useHistory } from 'react-router-dom';
import { ButtonCreatorInfoType } from './buttonCreatorInfo.type';

import Button from '../../../../../../styleComponents/ui/button.style';
import { Div } from './buttonCreatorInfo.style';



const ButtonCreatorInfo: React.FC<ButtonCreatorInfoType> = ({
  token,
  creatorsData,
  isCreator,
  sendButton,
  setCreatorProfile
  }) => {

  const history = useHistory();

  const handleSendForm = (event:any) => {
    event.preventDefault(); 
    
    postProfile(token,creatorsData)
      .then(res => {
        setCreatorProfile(res);
        if(isCreator){
          history.push("./account");  
        } else { 
          history.push({
            pathname:"./publish-comic-series",
            state:  "isNewSeries"
          }); 
        }
      });
  };

  const handleUpdateProfile = (event:any) => {
    event.preventDefault(); 
    
    updateProfile(token,creatorsData)
      .then(res => {
        setCreatorProfile(res);
        history.push("./account");  
      });
  }; 

  return (
  
    <Div buttonContainer>
      <Button 
        disabled={sendButton}
        width={"30rem"} 
        height={"5.5rem"} 
        secondary 
        onClick={isCreator ? handleUpdateProfile : handleSendForm}>
          {isCreator ? "Update profile" : "Create profile"}
      </Button>
    </Div>

  );
};

export default  ButtonCreatorInfo;
