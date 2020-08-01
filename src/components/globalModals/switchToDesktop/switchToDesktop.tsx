import React from 'react';
import { PortalWithState } from 'react-portal';
import { DivInfo } from './switchToDesktop.style';
import { MdClose } from 'react-icons/md';
import { Overlay } from '../../../styleComponents/ui/overlay.style';
import laptop from '../../../images/laptop-chibi.png';
import { Box } from '../../../styleComponents/ui/box.style';

const SwitchToDesktop = (props:any) => {
  
  return (
    
    <PortalWithState 
      closeOnOutsideClick 
      closeOnEsc>
      {({ openPortal, closePortal, portal }) => (
        
        <React.Fragment>
           <button onClick={openPortal} style={{
                position:"absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
                opacity: "0",
                }}>
            Open Portal
          </button>
          {portal(
            <>    
              <Overlay zIndex={"999"} onClick={closePortal}>
              </Overlay>
              <DivInfo>
                <MdClose 
                  onClick={closePortal}
                  color={"black"}
                  fontSize={"3rem"}/>
  
                <Box 
                  secondaryTalkBubble
                  fontSize={"2.4rem"}
                  lineHeight={"3rem"}
                  bottom={"-27%"}>
                  Please switch to a laptop or desktop to continue publishing.
                </Box>
                <img src={laptop} alt="laptop image"/>
              </DivInfo>
            </>
          
          )}
        </React.Fragment>
      )}
    </PortalWithState>
 
  );
};

export default SwitchToDesktop;
