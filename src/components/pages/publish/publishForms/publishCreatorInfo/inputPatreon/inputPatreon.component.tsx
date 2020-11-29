import React from 'react';
import { 
  Input,
  InputField, 
  Label 
} from '../../../../../../styleComponents/ui/input.style';

interface inputPatreonTypes {
  patreon: string,
  setPatreon:  React.Dispatch<React.SetStateAction<string>>,
}



const inputPatreon: React.FC<inputPatreonTypes> = ({patreon,setPatreon}) => {

  return (
    <Input>
      <Label fixed>Patreon Account</Label>
      <InputField 
        marginTop
        defaultValue={`https://www.patreon.com/${patreon}`}
        onChange={(e) => setPatreon(e.target.value)}/>
    </Input>
  );
}

export default inputPatreon;