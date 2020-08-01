import React, { useState } from 'react';
import LowerNav from './lowerNav/lowerNav.container';
import UpperNav from './upperNav/upperNav.container';

import { Div } from './header.style';
 
const Header = (props:any) => {

  const {navData} = props;

  const [togglenav, setToggleNav] = useState(true);

  const  handleToggleNav = () => setToggleNav(!togglenav);

  return (
    <Div>
      <UpperNav togglenav={handleToggleNav}/>
      {!navData.data.loginLink ? <LowerNav/> : null}
    </Div>
  );
};

export default Header;