import React, { useState, useEffect } from 'react';
import Button from '../../../../styleComponents/ui/button.style';
import { Input, InputField, Label } from '../../../../styleComponents/ui/input.style';
import { Box } from '../../../../styleComponents/ui/box.style';
import { Form } from './verifyToken.style';
import { TitleSection } from '../../../../styleComponents/ui/title.syle';
import { useLocation } from 'react-router';
import { signUp } from '../../../../services/signUp';
import { postInitProfile } from '../../../../services/profile';
import { useHistory } from 'react-router-dom';
import { Div } from './verifyToken.style';

const VerifyToken = (props:any) => {

  const {alert,setAlert,removeAlert,setRegistration,setUserProfile} = props;
  

  const [verificationCode, setVerificationCode] = useState<string>("");
  const history = useHistory();
  const location = useLocation<{token?:string}>();
  const token = location.state.token; 

  console.log("Old Token", token);

  useEffect(() => {  
    removeAlert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const handleVerifyCode = (e:any) => {
    e.preventDefault();
    e.persist();
    
    const data = {token,verificationCode};

    signUp(data)
    .then(res => {
      setRegistration(res);
      postInitProfile(res.newToken,res.email)
      .then( res => {
        setUserProfile(res);
      });

        //WILL USE THIS WHEN THE USER REGISTER COMING FROM CLICKING PUBLISH
        // if(continueToPublish){
        //   history.push('/publish-creator-info');
        // }else{
        //   history.push("./thankyoupage");
        // }

        history.push("./thankyoupage");

    })
    .catch(err => {
      setAlert("Invalid verification code.");
    })
    
  }
  
  return (
    <Div>
        {alert.length > 0 ?  
          <Box errorTalkBubble>{alert[0].msg}</Box> : null       
        } 
        <Form>
          <TitleSection>We sent you an email with a verification code. Please confirm to continue sign up.</TitleSection>
          
          <>
            <Input>
              <InputField 
                type="text"
                onBlur={e => setVerificationCode(e.target.value)}
                />
              <Label>Verification code</Label>
            </Input>
            <Button 
              secondary 
              onClick={handleVerifyCode}>
              Confirm
            </Button>
          </>
        </Form>
      </Div>
  );
}

export default VerifyToken;
