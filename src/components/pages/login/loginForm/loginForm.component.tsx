import React from 'react';
import { LinkRouter } from '../../../../styleComponents/ui/link.style';

import { Div } from './loginForm.style';
import { Input, InputField, Label } from '../../../../styleComponents/ui/input.style';
import Button from '../../../../styleComponents/ui/button.style';


const LoginForm = (props:any) => {

  let {handleToggleLogin, setEmail,setPassword,handleLogin} = props;
  
  return (
    <>
      <Input>
        <InputField 
          required 
          onBlur={e => setEmail(e.target.value)}/>
        <Label>Email</Label>
      </Input>

      <Input>
        <InputField 
          required 
          onBlur={e => setPassword(e.target.value)}/>
        <Label>Password</Label>
      </Input>
      
      <Button
        type="button"
        onClick={handleLogin} 
        secondary>
        Login
      </Button>

      <Div loginOptions>
        <LinkRouter passRecLink to="password-recovery">Forgot your password?</LinkRouter>
        <p onClick={handleToggleLogin}>or<span>Login</span> with Google or Facebook</p>
      </Div>
    </>
  );
};

export default LoginForm;









