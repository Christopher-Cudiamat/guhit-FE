import React, { useState, useEffect } from 'react';
import Nav from '../../../styleComponents/Nav.style';
import {Ul, Li} from "./filterNav.style";
import FilterTextInput from './filterByText/filterByText.component';


const FilterNav = (props:any) => {

  let {arr,setFilterType,setSearch,setGenre} = props;

  const [linkIndex, setLinkIndex] = useState(0);
  const [filterFlag, setFilterFlag]= useState("Popular");


  useEffect(()=>{
    handleFilter("Popular", 0);
     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const handleFilter = (title:string, num: number) => {
    if(title === "Genre"){
      setGenre(true);
    } else {
      setGenre(false);
    }
    setLinkIndex(num);
    setFilterFlag(title);
    setFilterType(title);
  }
  
  return (
    <>
      <Nav filterNav>
        <Ul>
          {
            arr.map((el:any, index:number) => 
              <Li                       
                active={index === linkIndex ? true : false}
                key={el.filterType}
                onClick={() => handleFilter(el.title,index)}>
                {el.title}
              </Li>     
            )
          }
        </Ul>
      </Nav>

      {filterFlag === "Name" || filterFlag === "Title" ? 
        <FilterTextInput 
        setSearch={setSearch}
        inputType={filterFlag}/> 
        : null
       }

    </>
  );
};

export default FilterNav;





