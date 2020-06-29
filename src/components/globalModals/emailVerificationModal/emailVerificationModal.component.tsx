import React from 'react';
import { PortalWithState } from 'react-portal';
import { useHistory } from 'react-router-dom';

import { MdClose } from 'react-icons/md';
import { Overlay } from '../../../styleComponents/ui/overlay.style';
import { Box } from '../../../styleComponents/ui/box.style';

import { DivInfo } from './emailVerificationModal.style';
import Button from '../../../styleComponents/ui/button.style';



const EmailVerificationModal = (props:any) => {


  const handleConfirmation = (cb:any) => {
  
  }

  return (
    
    <PortalWithState 
      closeOnOutsideClick 
      closeOnEsc
      >
      {({ openPortal, closePortal, portal }) => (
        
        <React.Fragment>
          <Button 
            onClick={openPortal}
            secondary> 
            Sign up
          </Button>
      
          {portal(
            <>    
              <Overlay globalModal zIndex={"999"}  onClick={closePortal}>
                
              </Overlay>
              <DivInfo>  
                <MdClose 
                onClick={closePortal}
                color={"black"}
                fontSize={"3rem"}
                />
  
                <Box 
                  secondaryTalkBubble
                  fontSize={"1.8rem"}
                  lineHeight={"3rem"}
                  bottom={"-27%"}>
                  <p>We have sent you an email with a verification code, insert the numbers here and click confirm</p>
                </Box>
                <Button primary> 
                    Confirm
                </Button>
              </DivInfo>
            </>
          
          )}
        </React.Fragment>
      )}
    </PortalWithState>
 
  );
};

export default EmailVerificationModal;
