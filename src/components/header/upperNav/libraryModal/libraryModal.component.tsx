import React from 'react';

import { Container } from './libraryModal.style';
import { Div } from './libraryModal.style';
import { LinkRouter } from '../../../../styleComponents/ui/link.style';


const LibraryModal = (props:any) => {
 
  return (
    <Container>
      <Div library>
        <p>Your Library</p>

        {/* 

        Note: Novel and comics section filter for future development

        <select>
          <option value="all">All</option>
          <option value="all">Comics</option>
          <option value="all">Novels</option> 
        </select>
        */}

      </Div>
      <Div libraryList>
        <p>You have not subscribed</p>
        <p>to any series yet</p>
      </Div>
      <Div libraryLinks>
        <LinkRouter primary to="./comics">Browse new released Comics</LinkRouter>
      </Div>

      {/*

      Note: Novel and comics link selection for future development

      <Div libraryLinks>
        <p>Browse <LinkRouter primary to=""> Comics </LinkRouter> or <LinkRouter secondary to=""> Novels </LinkRouter> </p>
      </Div>
      */}

    </Container>
  
  );
};

export default LibraryModal;