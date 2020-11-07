import React, { useEffect } from 'react';
import  {icon} from '../../../../images/imgConst'; 

import {Div, Container} from './globalSearchModal.style';
import { Icon } from '../../../../styleComponents/ui/icon.style';
import { Input, InputField } from '../../../../styleComponents/ui/input.style';
import GlobalSearchListMobile from './globalSearchListMobile/globalSearchListMobile.container';
import { getSeriesList } from '../../../../services/comics';
import useDebounce from '../../../../styleComponents/ui/customHooks/useDebounce';
import { useState } from 'react';


const GlobalSearchModal = (props:any) => {

  const limit:number = 6;
  const skip:number = 0;
  const filterType: string = "Title";
  const [searchedListArr,setSearchedListArr] = useState<any>([{}]);
  const [search, setSearch] = useState('');
  const debouncedSearchTerm = useDebounce(search, 200);

  console.log("SEARCH",search)

  useEffect(() => {
    // if(search !== "" && debouncedSearchTerm){
      getSeriesList(limit,skip,filterType,"",search)
      .then(res => {
        setSearchedListArr(res.seriesList);
      });
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);


  return (
    <>
      <Container>
        <Div searchContainer>
          <Icon gray>
            <icon.search color={"#aaa"} size={18}/>
          </Icon>
          <Input>
            <InputField 
              globalSearchInput 
              noBorder 
              placeholder={"Search comics or creators"}
              onChange={(e) => setSearch(e.target.value as string)}/>
          </Input>
        </Div>
        {
        search.length > 0 ?
        <GlobalSearchListMobile searchedListArr={searchedListArr}/>
        : null
      }
      </Container>
    </>
  );
};

export default GlobalSearchModal;