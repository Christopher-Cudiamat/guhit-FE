import React from 'react';
import { 
  Input,
  Label 
} from '../../../../../styleComponents/ui/input.style';
import { TextArea } from '../../../../../styleComponents/ui/textarea.style';

interface InputDescription {
  description: string,
  setDescription:  React.Dispatch<React.SetStateAction<string>>,
}



const InputDescription: React.FC<InputDescription> = props => {

  const {description,setDescription} = props;

  return (
    <Input>
      <Label fixed>About yourself</Label> 
      <TextArea 
        marginTop
        maxLength={500}
        defaultValue={description}
        onBlur={(e:any) => setDescription(e.target.value)}
        placeholder="Less than 500 characters"/>
    </Input>
  );
}

export default InputDescription;