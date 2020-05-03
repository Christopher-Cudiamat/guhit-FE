import React, { useState } from 'react';
import LowerNav from './lowerNav/lowerNav.container';
import UpperNav from './upperNav/upperNav.container';

const Header = (props:any) => {



  const [togglenav, setToggleNav] = useState(true);

  const  handleToggleNav = () => {
    setToggleNav(!togglenav);
  }



  return (
    <div 
      style={{
      background:"#222222", 
      boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
      position: "relative",
      zIndex:100,}}>
      <UpperNav togglenav={handleToggleNav}/>
      <LowerNav/>
    </div>
  );
};

export default Header;