import React from 'react';
import {
  UploaderField,
  UploaderLabel,
  UploaderThumb,
  UploaderThumbContainer
} from '../../../../../../styleComponents/ui/upload';
import { isWrongImageType, isWrongPixelSize } from '../../../../../../utility/validator';
import { IImageUploadType } from '../publishCreatorInfo.type';

import uploadChap from '../../../../../../images/upload.png';

interface InputProfilePicTypes {
  profileSize: boolean,
  prevProfile: string,
  setPrevProfile: React.Dispatch<React.SetStateAction<string>>,
  setProfilePic: React.Dispatch<React.SetStateAction<File | IImageUploadType[]>>,
  setProfileSize: React.Dispatch<React.SetStateAction<boolean>>,
  setUpdateProfile: (name:string, value:string) => void,
  setAlert: (msg:string,alertType:string) => void,
  removeAlert: () => void,
}

const InputProfilePic: React.FC<InputProfilePicTypes> = ({
  profileSize,
  prevProfile,
  setPrevProfile,
  setProfilePic,
  setUpdateProfile,
  setProfileSize,
  setAlert,
  removeAlert
  }) => {


  const handleProfilePic = (event:any) => {
    setProfilePic(event);
  };

  
  const handleUpload = (e:any, name: string) => {

    let img = new Image();
    img.src = window.URL.createObjectURL(e[0]);
    img.onload = () => {
      if (isWrongImageType(e[0].type)){
        setAlert("Please insert JPEG image","danger");
        return;
      } else if (isWrongPixelSize(img.height,img.width,"profilePic")){
        setAlert("Please insert the correct pixel size","danger");
        return;
      } else {
        removeAlert();  
        let file = e[0];
        let reader = new FileReader();
        reader.onload = function(e: any) {
          if(name === "profile"){
            setPrevProfile(e.target.result);
            setProfilePic(e.target.result);
            setUpdateProfile("profilePicPreview",e.target.result);
            setProfileSize(true);
            handleProfilePic(file);
          }
        };
        reader.readAsDataURL(file);
      }
    } 
  };

  return (
    <UploaderThumbContainer >
      <UploaderThumb 
        circular
        thumbnail
        thumbFull={profileSize} 
        prevThumb={prevProfile||uploadChap}
        >
        <UploaderField
          thumbnail
          type="file"
          onChange={e => handleUpload(e.target.files, "profile")}/>
      </UploaderThumb>
      <UploaderLabel thumbnail>Upload Profile<span>(250 x 250px)</span></UploaderLabel>
    </UploaderThumbContainer>
  );
}

export default InputProfilePic;