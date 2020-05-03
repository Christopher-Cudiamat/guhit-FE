import React from 'react';
import {Div, Container} from './globalSearchModal.style';
import { FaSearch } from 'react-icons/fa';
import { Icon } from '../../../../styleComponents/ui/icon.style';
import { Input, InputField } from '../../../../styleComponents/ui/input.style';



const GlobalSearchModal = (props:any) => {

  return (
    <>
      <Container>
        <Div searchContainer>
          <Icon gray>
            <FaSearch color={"#aaa"} size={18}/>
          </Icon>
          <Input>
            <InputField noBorder placeholder={"Search here..."}/>
          </Input>
        </Div>
      </Container>
    </>
  );
};

export default GlobalSearchModal;