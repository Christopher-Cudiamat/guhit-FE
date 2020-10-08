import React from 'react';
import {
  UploaderField,
  UploaderLabel,
  UploaderThumb,
  UploaderThumbContainer
} from '../../../../../styleComponents/ui/upload';

import uploadChap from '../../../../../images/upload.png';

interface InputProfilePicTypes {
  profileSize: boolean,
  prevProfile: string,
  handleUpload: (e:any, name:string) => void
}

const InputProfilePic: React.FC<InputProfilePicTypes> = props => {
  let {
    profileSize,
    prevProfile,
    handleUpload,
  } = props;

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