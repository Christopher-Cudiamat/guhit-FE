import React, {useState, useEffect } from 'react';
import { signUpGoogle, signIn } from '../../../services/signUp';
import { getProfile, postInitProfile } from '../../../services/profile';
import { ScrollToTopOnMount } from '../../../utility/scrollToTopOnMount';
import LoginForm from './loginForm/loginForm.component';
import { useHistory, useLocation} from 'react-router-dom';
import LoginSocialMedia from './loginSocialMedia/loginSocialMedia.component';

import { Box } from '../../../styleComponents/ui/box.style';
import { Form, Div, Container } from './login.style';
import { TitleSection } from '../../../styleComponents/ui/title.syle';
import { LinkRouter } from '../../../styleComponents/ui/link.style';


import loginImage from '../../../images/loginImage.png'

const Login = (props:any) => {

  let {
    setCreatorProfile,
    profile,
    setUserProfile,
    setAlert,
    setLogin,
    alert,
    removeAlert,
    setGoogleRegistration,

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
    signUpGoogle(res.accessToken)
      .then(res => {
        setGoogleRegistration(res);
        postInitProfile(res.token,res.email)
          .then( res => {
            setUserProfile(res);
            history.push("./thankyoupage");
          });
      })
    
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

            <LoginForm
              setEmail={setEmail}
              setPassword={setPassword} 
              handleToggleLogin={handleToggleLogin}
              handleLogin={handleLogin}/>
          :
            <LoginSocialMedia
              handleToggleLogin={handleToggleLogin}
              responseGoogle={responseGoogle}/>
  
          }
        </Form>
      </Div>
      <img src={loginImage} alt="footer" />
    </Container>
    
  );
};

export default Login;


