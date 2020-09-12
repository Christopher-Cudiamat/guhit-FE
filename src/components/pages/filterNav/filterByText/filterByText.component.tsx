import React from 'react';

import { Input, InputField, Label } from '../../../../styleComponents/ui/input.style';
import { Div } from './filterByText';

const FilterTextInput = (props:any) => {

  let {setSearch,inputType} = props;
  return (

      <Div inputBox> 
        <Input>
          <InputField 
            onChange={(e) => setSearch(e.target.value)}
            noTransparent
            required/>
          <Label>
            {
              inputType === "Name" 
              ? "Search creator's name"
              : "Search comics title"
            }
          </Label>
        </Input>
      </Div>

  );
};

export default FilterTextInput;





