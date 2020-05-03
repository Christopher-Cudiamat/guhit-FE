import React from 'react';
import { DivLink, DivContainer, Container } from './drawer.style';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { LinkRouter } from '../../../../styleComponents/ui/link.style';




const Drawer = (props:any) => {
  
  let {modalData,setNavValue,changeModalValue,changeNavValue} = props;


  const handleClickLink = (name:string,) => {
    if(name === "drawerToggle"){
      changeModalValue(["drawerModal"], false);
    } else {
      setNavValue();
      changeModalValue(["drawerModal"], false);
      changeNavValue(["menuLink"], true);
    }
  }
  
  return (
    <Container>

        <DivContainer toggle={modalData.data.drawerModal}>
          <LinkRouter to="creator">
            <DivLink onClick={e => handleClickLink("menuLink")}>
              <p>Publish</p>
              <MdKeyboardArrowRight size={22} color={"white"}/>
            </DivLink>
          </LinkRouter>

          <LinkRouter to="creators">
            <DivLink onClick={e => handleClickLink("menuLink")}>
              <p>Creators</p>
              <MdKeyboardArrowRight size={22} color={"white"}/>
            </DivLink>
          </LinkRouter>

          <LinkRouter to="./about">
            <DivLink onClick={e => handleClickLink("menuLink")}>
              <p>About Us</p>
              <MdKeyboardArrowRight size={22} color={"white"}/>
            </DivLink>
          </LinkRouter>

          <LinkRouter to="/events">
            <DivLink onClick={e => handleClickLink("menuLink")}>
              <p>News and Events</p>
              <MdKeyboardArrowRight size={22} color={"white"}/>
            </DivLink>
          </LinkRouter>

          <LinkRouter to="contacts">
            <DivLink onClick={e => handleClickLink("menuLink")}>
              <p>Contact Us</p>
              <MdKeyboardArrowRight size={22} color={"white"}/>
            </DivLink>
          </LinkRouter>

        </DivContainer>
   
    </Container>
  );
};

export default Drawer;