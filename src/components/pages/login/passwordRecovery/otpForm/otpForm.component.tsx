import React, { useState } from 'react';
import Button from '../../../../../styleComponents/ui/button.style';
import { Input, InputField, Label } from '../../../../../styleComponents/ui/input.style';
import { FormControl } from '../../passwordRecovery/passwordRecovery.style';

import {Div} from '../../passwordRecovery/passwordRecovery.style';
import { RiMailOpenLine } from 'react-icons/ri';

const OtpForm = (props:any) => {

  const {setStep} = props;

  const [otp,setOtp] = useState<string>('')
  
  const handleVerifyOtp = () => {
    console.log("VERIFYING OTP",otp);
    setStep(3);
  }

  return (
    <Div> 
      
      <FormControl>
        <p>We sent you an email with an OTP code. Please enter the code below and click confirm to continue.</p>
        <RiMailOpenLine fontSize={"7rem"} color={"#08E5BE"}/>
        <Input>
          <InputField 
            required  
            onBlur={e => setOtp(e.target.value)}/>
          <Label>OTP Code</Label>
        </Input>

        <Button
          secondary
          onClick={handleVerifyOtp}>
          Confirm
        </Button>
      </FormControl>
    </Div> 
  );
  
};

export default OtpForm;
