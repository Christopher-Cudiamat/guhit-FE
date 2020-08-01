import React from 'react';
import  {icon} from '../../../../images/imgConst'; 

import {Div, Container} from './globalSearchModal.style';
import { Icon } from '../../../../styleComponents/ui/icon.style';
import { Input, InputField } from '../../../../styleComponents/ui/input.style';


const GlobalSearchModal = (props:any) => {

  return (
    <>
      <Container>
        <Div searchContainer>
          <Icon gray>
            <icon.search color={"#aaa"} size={18}/>
          </Icon>
          <Input>
            <InputField globalSearchInput noBorder placeholder={"Search comics or creators"}/>
          </Input>
        </Div>
      </Container>
    </>
  );
};

export default GlobalSearchModal;