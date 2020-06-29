import React, { useState, useEffect } from 'react';
import { useHistory} from 'react-router-dom';
import Button from '../../../../../styleComponents/ui/button.style';
import { Input, InputField, Label } from '../../../../../styleComponents/ui/input.style';
import { FormControl } from '../../passwordRecovery/passwordRecovery.style';

import {Div} from '../../passwordRecovery/passwordRecovery.style';
import { RiLockPasswordLine } from 'react-icons/ri';
import { isLengthCorrect, isEmpty } from '../../../../../utility/validator';

const ResetPasswordForm = (props:any) => {

  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [disableToggle, setDisableToggle] = useState<boolean>(true);


  useEffect(() => {
    
    if(isLengthCorrect(newPassword) && isEmpty(newPassword)){
      setDisableToggle(false);
    } else {
      setDisableToggle(true);
    }
  }, [newPassword]);

  const history = useHistory();

  const handleResetPassword = (e: any) => {
    e.preventDefault()
    console.log("NEW PASS",newPassword);
    console.log("NEW PASS",confirmPassword);
    if(newPassword !== confirmPassword){
      console.log("ERROR")
    } else {
      //MAKE API CALL
      console.log("GOOD")
    }
    //REDIRECT TO HOME PAGE LOGGED IN
    // history.push('./');
  }

  return (
    <Div> 
      <FormControl>
        <p>Enter your new password.</p>
        <RiLockPasswordLine fontSize={"7rem"} color={"#08E5BE"}/>
        <Input>
          <InputField 
            required  
            onBlur={e => setNewPassword(e.target.value)}/>
          <Label>New password</Label>
        </Input>

        <Input>
          <InputField 
            disabledInput={disableToggle}
            disabled={disableToggle}
            required  
            onBlur={e => setConfirmPassword(e.target.value)}/>
          <Label>Confirm password</Label>
        </Input>

        <Button
          secondary
          onClick={handleResetPassword}>
          Reset password
        </Button>
      </FormControl>
    </Div> 
  );
  
};

export default ResetPasswordForm;
