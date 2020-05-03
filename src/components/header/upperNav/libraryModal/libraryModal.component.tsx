import React from 'react';
import { Container } from './libraryModal.style';
import { Div } from './libraryModal.style';
import { LinkRouter } from '../../../../styleComponents/ui/link.style';



const LibraryModal = (props:any) => {

 
  return (

    <Container>
      <Div library>
        <p>Your Library</p>
        <select>
          <option value="all">All</option>
          <option value="all">Comics</option>
          <option value="all">Novels</option>
        </select>
      </Div>
      <Div libraryList>
        <p>You havent Subscribe to any series yet</p>
      </Div>
      <Div libraryLinks>
        <p>Browse <LinkRouter primary to=""> Comics </LinkRouter> or <LinkRouter secondary to=""> Novels </LinkRouter> </p>
      </Div>
    </Container>
  
  );
};

export default LibraryModal;