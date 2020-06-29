import React from 'react';
import { PortalWithState } from 'react-portal';
import { useHistory } from 'react-router-dom';

import { MdClose } from 'react-icons/md';
import { Overlay } from '../../../styleComponents/ui/overlay.style';
import { Box } from '../../../styleComponents/ui/box.style';

import {MdDeleteForever} from 'react-icons/md';
import { DivInfo } from './deleteChapterModal.style';
import { deleteChapter } from '../../../services/publish';


const DeleteChapterModal = (props:any) => {

  const {token, id} = props;
  console.log("ID CHAPTER IN MODAL", id);

  const history = useHistory();

  const handleDeleteChapter = (cb:any) => {
    cb();
    deleteChapter(token,id)
      .then(res => {
        if(res){
          history.go(0);
        }
      });
  }

  return (
    
    <PortalWithState 
      closeOnOutsideClick 
      closeOnEsc
      >
      {({ openPortal, closePortal, portal }) => (
        
        <React.Fragment>
          <MdDeleteForever onClick={openPortal} />
      
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
                  fontSize={"2.4rem"}
                  lineHeight={"3rem"}
                  bottom={"-27%"}>
                  <p>Are you sure you want to continue deleting this chapter? <span  onClick={e =>handleDeleteChapter(closePortal)}>Delete</span></p>
                </Box>
              </DivInfo>
            </>
          
          )}
        </React.Fragment>
      )}
    </PortalWithState>
 
  );
};

export default DeleteChapterModal;
