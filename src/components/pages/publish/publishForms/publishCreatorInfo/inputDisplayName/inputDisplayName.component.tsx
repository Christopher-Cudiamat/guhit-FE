import React from 'react';
import { 
  Input,
  InputField, 
  Label 
} from '../../../../../../styleComponents/ui/input.style';

interface InputDisplayNameTypes {
  displayName: string,
  setDisplayName:  React.Dispatch<React.SetStateAction<string>>,
}



const InputDisplayName: React.FC<InputDisplayNameTypes> = props => {

  const {displayName,setDisplayName} = props;

  return (
    <Input>
      <Label fixed>
        Display Name 
        <span  style={{fontSize:"1.6rem"}}>(your nickname in Guhit app)</span>
      </Label>
      <InputField 
        marginTop
        defaultValue={displayName}
        onChange={(e) => setDisplayName(e.target.value)}/>
    </Input>
  );
}

export default InputDisplayName;