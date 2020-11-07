import React from 'react';
import  {icon} from '../../../../images/imgConst';
import SwitchToDesktop from '../../../globalModals/switchToDesktop/switchToDesktop';

import { DivLink, DivContainer, Container } from './drawer.style';
import { LinkRouter } from '../../../../styleComponents/ui/link.style';
import { DrawerPropTypes } from './drawer.type';


const Drawer: React.FC<DrawerPropTypes> = ({
    modalData,
    setNavValue,
    changeModalValue,
    changeNavValue,
    navData
  }) => {
  

  const handleClickLink = (name:string,) => {
    if(name === "drawerToggle"){
      changeModalValue("drawerModal", false);
    } else {
      setNavValue();
      changeModalValue("drawerModal", false);
      if(name === "homeLink"){
        changeNavValue(name, true);
      } else {
        changeNavValue("menuLink", true);
        changeNavValue(name, true);
      }

    }
  }
  
  return (
    <Container>
        <DivContainer toggle={modalData.drawerModal}>
          <LinkRouter to="./">
            <DivLink onClick={() => handleClickLink("homeLink")}>
              <p>Publish</p>
              <icon.rightArrow size={22} color={"white"}/>
              <SwitchToDesktop/>
            </DivLink>
          </LinkRouter>

          <LinkRouter to="./about">
            <DivLink 
              linkColor={navData.aboutLink} 
              onClick={() => handleClickLink("aboutLink")}>
              <p>About Us</p>
              <icon.rightArrow 
                size={22} 
                color={navData.aboutLink ? "#08E5BE" : "FFF"}/>
            </DivLink>
          </LinkRouter>

          <LinkRouter to="/events">
            <DivLink 
              linkColor={navData.eventsLink} 
              onClick={() => handleClickLink("eventsLink")}>
              <p>Events</p>
              <icon.rightArrow 
                size={22} 
                color={navData.eventsLink ? "#08E5BE" : "FFF"}/>
            </DivLink>
          </LinkRouter>

          <LinkRouter to="/contacts">
            <DivLink 
              linkColor={navData.contactLink} 
              onClick={() => handleClickLink("contactLink")}>
              <p>Contact Us</p>
              <icon.rightArrow 
              size={22} 
              color={navData.contactLink ? "#08E5BE" : "FFF"}/>
            </DivLink>
          </LinkRouter>

        </DivContainer>
    </Container>
  );
};

export default Drawer;