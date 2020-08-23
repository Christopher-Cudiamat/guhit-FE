import React from 'react';
import GoogleLogin from 'react-google-login';
// import FacebookLogin from 'react-facebook-login';
import { icon } from '../../.././../images/imgConst';

import { Div } from './loginSocialMedia.style';
import Button from '../../../../styleComponents/ui/button.style';


const LoginSocialMedia = (props:any) => {

  let {handleToggleLogin, responseGoogle} = props;
  
  return (
    <>
      <Div socialContainer>
        <Button loginFaceBook>
          Continue with Facebook
        </Button>
        <icon.facebookIcon
          color={"white"}
          size={"32px"} 
          style={{position:"absolute", right:"5%", top:"12%"}}/>
      </Div>


      <GoogleLogin
        clientId="37421698326-su5uk9dg2842l636g5s9ugvajtbh0k3o.apps.googleusercontent.com"
        buttonText="Continue with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        render={renderProps => (
          <Div socialContainer>
            <Button 
              loginGoogle 
              onClick={renderProps.onClick } 
              disabled={renderProps.disabled}>
              Continue with Google
            </Button>
            <icon.googleIcon 
              color={"white"}
              size={"32px"} 
              style={{position:"absolute", right:"5%", top:"12%"}}/>
          </Div>
        )}
      />
  
      <Div loginOptions>
        <p onClick={handleToggleLogin}>or<span>Login</span>with account</p>
      </Div>
    </>
  );
};

export default LoginSocialMedia;















