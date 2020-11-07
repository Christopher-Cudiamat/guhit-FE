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



const inputPatreon: React.FC<inputPatreonTypes> = props => {

  const {patreon,setPatreon} = props;

  return (
    <Input>
      <Label fixed>Patreon</Label>
      <InputField 
        marginTop
        defaultValue={patreon}
        onBlur={(e) => setPatreon(e.target.value)}/>
    </Input>
  );
}

export default inputPatreon;