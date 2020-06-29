import React, { useState } from 'react';
import Button from '../../../../../styleComponents/ui/button.style';
import { Input, InputField, Label } from '../../../../../styleComponents/ui/input.style';
import { FormControl } from '../../passwordRecovery/passwordRecovery.style';

import {Div} from '../../passwordRecovery/passwordRecovery.style';
import { RiMailSendLine } from 'react-icons/ri';

const EmailForm = (props:any) => {

  const {setStep} = props;

  const [email,setEmail] = useState<string>('')

  const handleSendEmail = () => {
    console.log("SENDING EMAIL OTP TO ===",email);
    setStep(2);
  }

  return (
    <Div> 
      
      <FormControl>
        <p>Please enter your correct email to continue reseting your password.</p>
        <RiMailSendLine fontSize={"7rem"} color={"#08E5BE"}/>
        <Input>
          <InputField 
            required  
            onBlur={e => setEmail(e.target.value)}/>
          <Label>Email</Label>
        </Input>

        <Button
          secondary
          onClick={handleSendEmail}>
          Continue
        </Button>
      </FormControl>
    </Div>
  );
  
};

export default EmailForm;
