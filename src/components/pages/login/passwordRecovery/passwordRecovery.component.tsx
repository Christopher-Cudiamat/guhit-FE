import React, { useState } from 'react';
import EmailForm from './emailForm/emailForm.component';
import OtpForm from './otpForm/otpForm.component';
import ResetPasswordForm from './resetPasswordForm/resetPasswordForm';
import { TitleSection } from '../../../../styleComponents/ui/title.syle';
import {Container} from './passwordRecovery.style'

const PasswordRecovery = (props:any) => {

  let [currentStep, setCurrentStep] = useState<number>(1);

  const getStep = (step:number) => {
    if(step === 1) {
      return <EmailForm setStep={setCurrentStep}/>
    } else if(step === 2){
      return <OtpForm setStep={setCurrentStep}/>
    } else {
      return <ResetPasswordForm setStep={setCurrentStep}/>
    }
  }


  return (
    <Container> 
       <TitleSection>Password Recovery</TitleSection>
      {getStep(currentStep)}
    </Container> 
  );
  
};

export default PasswordRecovery;
