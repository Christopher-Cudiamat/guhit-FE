import React from 'react';
import { 
  Input,
  InputField, 
  Label 
} from '../../../../../styleComponents/ui/input.style';

interface InputCityTypes {
  city: string,
  setCity:  React.Dispatch<React.SetStateAction<string>>,
}



const InputCity: React.FC<InputCityTypes> = props => {

  const {city,setCity} = props;

  return (
    <Input>
      <Label fixed>City</Label>
      <InputField 
        marginTop
        defaultValue={city}
        onBlur={(e) => setCity(e.target.value)}/>
    </Input>
  );
}

export default InputCity;