import React, {useState, useEffect } from 'react';
import { LinkRouter } from '../../../styleComponents/ui/link.style';
// import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { useHistory, useLocation } from 'react-router-dom';

import { Box } from '../../../styleComponents/ui/box.style';
import { Input, InputField, Label } from '../../../styleComponents/ui/input.style';
import { Form, Div, Container } from './login.style';
import { TitleSection } from '../../../styleComponents/ui/title.syle';
import Button from '../../../styleComponents/ui/button.style';

import { FaGooglePlus } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import loginImage from '../../../images/loginImage.png'
import { signUpGoogle, signIn } from '../../../services/signUp';
import { getProfile } from '../../../services/profile';
import { ScrollToTopOnMount } from '../../../utility/scrollToTopOnMount';

const Login = (props:any) => {

  // let {setRegFacebook, setRegGoogle,setLogin} = props;
  // const {goBackToProfile} = props.location.state;

  let {
    setCreatorProfile,
    profile,
    setUserProfile,
    setAlert,
    setLogin,
    alert,
    removeAlert,
    setRegGoogle,
  } = props;

  
  const [showForm, setshowForm] = useState<boolean>(false); 
  let [email,setEmail] = useState<string>("");
  let [password,setPassword] = useState<string>("");
  const history = useHistory();
  const location = useLocation();
  const continueToPublish = location.state;
 
  useEffect(() => {  
    removeAlert();
  },[showForm]);

  const handleLogin = (e:any) => {
    e.preventDefault()
 
    const data = {email,password}   
    signIn(data)
      .then((res) =>{
        setLogin(res);
        getProfile(res.token)
          .then( res => {
            if(profile.isCreator){
              setUserProfile(res);
            } else{
              setCreatorProfile(res);
            }
          });
        if(continueToPublish && !profile.isCreator){
          history.push('/publish-creator-info');
        } else if(continueToPublish && profile.isCreator){
          history.push('/creator-account');
        } else {
          history.push('./');
        }    
      }) 
      .catch(() => {
        setAlert("Invalid Credentials","danger");
      });
  }

  const handleToggleLogin = () => {
    setshowForm(!showForm)
  };

  const responseFacebook = (res:any) => {
    // console.log("REACT",res.accessToken);
    // setRegFacebook(res.accessToken)
  }

  const responseGoogle = (res:any) => {
    // console.log("GOOGLE")
    // console.log("REACTGOOGLE",res.accessToken);
    // setRegGoogle(res.accessToken);
  }

  return (
    <Container>   
      <Div main>

        <ScrollToTopOnMount/>
        
        { alert.length > 0 
          ?  <Box errorTalkBubble>{alert[0].msg}</Box> 
          : continueToPublish
          ? <Box secondaryTalkBubble>Please login or sign-up first before continuing to publish</Box>
          : null       
        } 

        <Form>
          <TitleSection>Login</TitleSection>
          <Div loginOptions signUp>
            <p>Dont have an account?<span>
            <LinkRouter 
              secondary 
              to={
                continueToPublish 
                ? {pathname:"/signup" , state:true}
                : "/signup"
              }
              >Sign up now!
            </LinkRouter></span></p>
          </Div>
      
          { showForm ?

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
              <p onClick={handleToggleLogin}>or<span>Login</span> with Google or Facebook</p>
            </Div>
          </>
          :
          <>
            <Div socialContainer>
              <Button loginFaceBook>
                Continue with Facebook
              </Button>
              <FaFacebook
                color={"white"}
                size={"32px"} 
                style={{position:"absolute", right:"10%", top:"12%"}}/>
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
                  <FaGooglePlus 
                    color={"white"}
                    size={"32px"} 
                    style={{position:"absolute", right:"10%", top:"12%"}}/>
                </Div>
              )}
            />
            <Div loginOptions>
              <p onClick={handleToggleLogin}>or<span>Login</span>with account</p>
            </Div>
          </>
          }
        </Form>
      </Div>
      <img src={loginImage} alt="footer" />
    </Container>
  );
};

export default Login;





// <Div socialContainer>
//               <Button loginFaceBook>
//                 Continue with Facebook
//               </Button>
//               <FaFacebook
//                 color={"white"}
//                 size={"32px"} 
//                 style={{position:"absolute", right:"10%", top:"12%"}}/>
//             </Div>
//             <Div socialContainer>
//               <Button loginGoogle>
//                 Continue with Google
//               </Button>
//               <FaGooglePlus  
//                 color={"white"}
//                 size={"32px"} 
//                 style={{position:"absolute", right:"10%", top:"12%"}}/>
//             </Div>




{/* <FacebookLogin
              appId="2504905576489719"
              autoLoad={true}
              textButton="Continue with Facebook"
              fields="id, displayName, name, gender, photos"
              callback={responseFacebook} */}
              {/* // render={(renderProps: any) => ( */}
              //   <Div socialContainer>
              //     <Button 
              //       loginFaceBook
              //       onClick={renderProps.onClick } 
              //       disabled={renderProps.disabled}>
              //       Continue with Facebook
              //     </Button>
              //     <FaFacebook
              //       color={"white"}
              //       size={"32px"} 
              //       style={{position:"absolute", right:"10%", top:"12%"}}/>
              //   </Div>
              // )}
            // />
