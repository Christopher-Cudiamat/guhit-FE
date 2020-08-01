import React from 'react';
import Drawer from './drawer/drawer.container';
import { icon } from '../../../images/imgConst';

import Nav from '../../../styleComponents/Nav.style';
import {Ul, List, Container, Menu} from './lowerNav.styled';
import {Icon} from '../../../styleComponents/ui/icon.style';
import { LinkRouter } from '../../../styleComponents/ui/link.style';


const LowerNav =  (props:any) => {

  let { navData,modalData,changeNavValue,setNavValue,setModalValue,changeModalValue } = props;

  const handleToggleMenu = () =>{
    changeModalValue(["drawerModal"], !modalData.data.drawerModal);
  }

  const handleClickNav = (name:string) =>{
    changeModalValue(["drawerModal"], false);
    setNavValue();
    changeNavValue([name], true);
  }

  const handleCloseModals = () => {
    if( modalData.data.notifModal 
        || modalData.data.libraryModal  
        || modalData.data.accountModal 
        || modalData.data.searchModal){
        setModalValue();
    } 
  }


  return (
    <Container onClick={handleCloseModals}>
      <Nav secondary>
        <Ul>
          <List>
            <LinkRouter to="./" togglenav={navData.data.homeLink}>
              <p onClick={() => handleClickNav("homeLink")}>Home</p>
            </LinkRouter> 
          </List>
    
          <List>
            <LinkRouter to="/comics" togglenav={navData.data.comicsLink}>
              <p onClick={(e:any) => handleClickNav("comicsLink")}>Comics</p>
            </LinkRouter>
          </List>

          {/* 
          NOTE: Novel section part will not be available for now

          <List>
            <LinkRouter to="/novels" togglenav={navData.data.novelsLink}>
              <p onClick={() => handleClickNav("novelsLink")}>Novels </p>
            </LinkRouter>
          </List> */}

          <List>
            <LinkRouter to="/creators" togglenav={navData.data.creatorLink}>
              <p onClick={() => handleClickNav("creatorLink")}>Creators</p>
            </LinkRouter>
          </List> 

          <List>
            <LinkRouter to="/publish" togglenav={navData.data.exploreLink}>
              <p onClick={() => handleClickNav("exploreLink")}>Publish</p>
            </LinkRouter>
          </List>
        </Ul>

        {modalData.data.drawerModal ?
          <Menu colorText={navData.data.menuLink}>
            <p onClick={handleToggleMenu}>Close</p>
            <Icon 
              colorMenu={navData.data.menuLink}
              onClick={handleToggleMenu}>
              <icon.closeMenu size={24}/>
            </Icon>
          </Menu>
          :
          <Menu colorText={navData.data.menuLink}>
            <p onClick={handleToggleMenu}>Explore</p>
            <Icon
              colorMenu={navData.data.menuLink}
              onClick={handleToggleMenu}>
              <icon.burgerMenu size={24}/>
            </Icon>
          </Menu>
        }
      </Nav>
      <Drawer toggle={modalData.data.drawerModal}/>
    </Container>  

  );
};

export default LowerNav;
