import React, { useState } from 'react';
import LowerNav from './lowerNav/lowerNav.container';
import UpperNav from './upperNav/upperNav.container';
import { HeaderPropTypes } from './header.type';

import { Div } from './header.style';

 
const Header: React.FC<HeaderPropTypes> = ({navData}) => {

  return (
    <Div>
      <UpperNav />
      {
        !navData.loginLink 
        ? <LowerNav/> 
        : null
      }
    </Div>
  );
};

export default Header;