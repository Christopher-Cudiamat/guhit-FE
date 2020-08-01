import React from 'react';

import { Container,Div } from './notificationModal.style';
import { LinkRouter } from '../../../../styleComponents/ui/link.style';


const notificationModal = (props:any) => {


  return (

    <Container>
      <Div notif>
        <p>Activity</p>
        <p>Mark all as read</p>
      </Div>
      <Div notifList>
        <p>No recent activities</p>
      </Div>
      <Div notifLinks>
        <LinkRouter primary to="">See all</LinkRouter>
      </Div>
    </Container>
  
  );
};

export default notificationModal;