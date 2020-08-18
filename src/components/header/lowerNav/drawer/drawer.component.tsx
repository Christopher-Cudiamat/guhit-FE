import React from 'react';
import  {icon} from '../../../../images/imgConst';
import SwitchToDesktop from '../../../globalModals/switchToDesktop/switchToDesktop';

import { DivLink, DivContainer, Container } from './drawer.style';
import { LinkRouter } from '../../../../styleComponents/ui/link.style';



const Drawer = (props:any) => {
  
  let {modalData,setNavValue,changeModalValue,changeNavValue,navData} = props;

  const handleClickLink = (name:string,) => {
    if(name === "drawerToggle"){
      changeModalValue(["drawerModal"], false);
    } else {
      setNavValue();
      changeModalValue(["drawerModal"], false);
      if(name === "homeLink"){
        changeNavValue([name], true);
      } else {
        changeNavValue(["menuLink"], true);
        changeNavValue([name], true);
      }

    }
  }
  
  return (
    <Container>
        <DivContainer toggle={modalData.data.drawerModal}>
          <LinkRouter to="./">
            <DivLink onClick={() => handleClickLink("homeLink")}>
              <p>Publish</p>
              <icon.rightArrow size={22} color={"white"}/>
              <SwitchToDesktop/>
            </DivLink>
          </LinkRouter>

          <LinkRouter to="./about">
            <DivLink 
              linkColor={navData.data.aboutLink} 
              onClick={() => handleClickLink("aboutLink")}>
              <p>About Us</p>
              <icon.rightArrow 
                size={22} 
                color={navData.data.aboutLink ? "#08E5BE" : "FFF"}/>
            </DivLink>
          </LinkRouter>

          <LinkRouter to="/events">
            <DivLink 
              linkColor={navData.data.eventsLink} 
              onClick={() => handleClickLink("eventsLink")}>
              <p>News and Events</p>
              <icon.rightArrow 
                size={22} 
                color={navData.data.eventsLink ? "#08E5BE" : "FFF"}/>
            </DivLink>
          </LinkRouter>

          <LinkRouter to="/contacts">
            <DivLink 
              linkColor={navData.data.contactLink} 
              onClick={() => handleClickLink("contactLink")}>
              <p>Contact Us</p>
              <icon.rightArrow 
              size={22} 
              color={navData.data.contactLink ? "#08E5BE" : "FFF"}/>
            </DivLink>
          </LinkRouter>

        </DivContainer>
    </Container>
  );
};

export default Drawer;