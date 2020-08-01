import React from 'react';
import  {icon} from '../../../../images/imgConst';
import SwitchToDesktop from '../../../globalModals/switchToDesktop/switchToDesktop';

import { DivLink, DivContainer, Container } from './drawer.style';
import { LinkRouter } from '../../../../styleComponents/ui/link.style';



const Drawer = (props:any) => {
  
  let {modalData,setNavValue,changeModalValue,changeNavValue} = props;

  const handleClickLink = (name:string,) => {
    if(name === "drawerToggle"){
      changeModalValue(["drawerModal"], false);
    } else {
      setNavValue();
      changeModalValue(["drawerModal"], false);
      changeNavValue([name], true);
    }
  }
  
  return (
    <Container>
        <DivContainer toggle={modalData.data.drawerModal}>
          <LinkRouter to="./">
            <DivLink onClick={e => handleClickLink("homeLink")}>
              <p>Publish</p>
              <icon.rightArrow size={22} color={"white"}/>
              <SwitchToDesktop/>
            </DivLink>
          </LinkRouter>

          <LinkRouter to="./about">
            <DivLink onClick={e => handleClickLink("menuLink")}>
              <p>About Us</p>
              <icon.rightArrow size={22} color={"white"}/>
            </DivLink>
          </LinkRouter>

          <LinkRouter to="/events">
            <DivLink onClick={e => handleClickLink("menuLink")}>
              <p>News and Events</p>
              <icon.rightArrow size={22} color={"white"}/>
            </DivLink>
          </LinkRouter>

          <LinkRouter to="contacts">
            <DivLink onClick={e => handleClickLink("menuLink")}>
              <p>Contact Us</p>
              <icon.rightArrow size={22} color={"white"}/>
            </DivLink>
          </LinkRouter>

        </DivContainer>
    </Container>
  );
};

export default Drawer;