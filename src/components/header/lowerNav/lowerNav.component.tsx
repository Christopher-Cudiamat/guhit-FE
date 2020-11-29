import React from 'react';
import Drawer from './drawer/drawer.container';
import { icon } from '../../../images/imgConst';

import Nav from '../../../styleComponents/Nav.style';
import {Ul, List, Container, Menu} from './lowerNav.styled';
import {Icon} from '../../../styleComponents/ui/icon.style';
import { LinkRouter } from '../../../styleComponents/ui/link.style';
import { LowerNavPropTypes } from './lowerNav.type';

const LowerNav: React.FC<LowerNavPropTypes> =  ({
  navData,
  modalData,
  changeNavValue,
  setNavValue,
  setModalValue,
  changeModalValue
  }) => {

  const handleToggleMenu = () =>{
    changeModalValue("drawerModal",!modalData.drawerModal);
  }

  const handleClickNav = (name:string) =>{
    changeModalValue("drawerModal", false);
    setNavValue();
    changeNavValue(name, true);
  }

  const handleCloseModals = () => {
    if( modalData.notifModal 
        || modalData.libraryModal  
        || modalData.accountModal 
        || modalData.searchModal){
        setModalValue();
    } 
  }


  return (
    <Container onClick={handleCloseModals}>
      <Nav secondary>
        <Ul>
          <List>
            <LinkRouter to="./" togglenav={navData.homeLink}>
              <p onClick={() => handleClickNav("homeLink")}>Home</p>
            </LinkRouter> 
          </List>
    
          <List>
            <LinkRouter to="/comics" togglenav={navData.comicsLink}>
              <p onClick={() => handleClickNav("comicsLink")}>Comics</p>
            </LinkRouter>
          </List>

          {/* 
          PHASE 3

          <List>
            <LinkRouter to="/novels" togglenav={navData.data.novelsLink}>
              <p onClick={() => handleClickNav("novelsLink")}>Novels </p>
            </LinkRouter>
          </List> */}

          <List>
            <LinkRouter to="/creators" togglenav={navData.creatorLink}>
              <p onClick={() => handleClickNav("creatorLink")}>Creators</p>
            </LinkRouter>
          </List> 

          <List>
            <LinkRouter to="/publish" togglenav={navData.exploreLink}>
              <p onClick={() => handleClickNav("exploreLink")}>Publish</p>
            </LinkRouter>
          </List>
        </Ul>

        {
          modalData.drawerModal ?
          <Menu colorText={navData.menuLink}>
            <p onClick={handleToggleMenu}>Close</p>
            <Icon 
              colorMenu={navData.menuLink}
              onClick={handleToggleMenu}>
              <icon.closeMenu size={24}/>
            </Icon>
          </Menu>
          :
          <Menu colorText={navData.menuLink}>
            <p onClick={handleToggleMenu}>Explore</p>
            <Icon
              colorMenu={navData.menuLink}
              onClick={handleToggleMenu}>
              <icon.burgerMenu size={24}/>
            </Icon>
          </Menu>
        }
      </Nav>
 
      <Drawer/> 

    </Container>  

  );
};

export default LowerNav;
