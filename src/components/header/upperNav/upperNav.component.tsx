import React, { useState} from 'react';
import GlobalSearchModal from './globalSearchModal/globalSearchModal.component';
import NotificationModal from './notificationModal/notificationModal.component';
import LibraryModal from './libraryModal/libraryModal.component';
import AccountModal from './accountModal/accountModal.container';
import { UpperNavPropTypes } from './upperNav.type';

import  {icon} from '../../../images/imgConst';
import { InputField, Input } from '../../../styleComponents/ui/input.style';
import { LinkRouter } from '../../../styleComponents/ui/link.style';
import {Icon} from '../../../styleComponents/ui/icon.style';
import Nav from '../../../styleComponents/Nav.style';
import { Div, Brand, Container, Avatar, Close, DivLink } from './upperNav.style';


const UpperNav: React.FC<UpperNavPropTypes> = ({
    profile,
    registration,
    navData, 
    modalData,
    setNavValue, 
    changeNavValue,
    setModalValue,
    changeModalValue,
  }) => {

 

  const [modalToggle, setModalToggle] = useState(false);

  const handleModal = (name:string) => {
    changeNavValue("drawerToggle", false);
    setModalValue();
    if(name === "searchDesktop"){
      changeModalValue(name, false);
    } else {  
      changeModalValue(name, true);
    }
    setModalToggle(!modalToggle);
  };

  const handleCloseModal = () => {
    setModalValue();
    setModalToggle(!modalToggle);
    changeNavValue("drawerToggle", false);
  }
 
  const handlelinks = (name:string) => {
    setModalValue();
    setNavValue();
    changeNavValue(name, true);
  }
 
  return (
    <Container>
      <Nav primary>
        <LinkRouter to="./" onClick={() => handlelinks("homeLink")}>
          <Brand>Guhit</Brand>
        </LinkRouter>
        
        <Div left alignBaseLine={registration.isAuthenticated}>
          <Div relative>
            <Input onClick={() => handleModal("searchDesktop")}>
              <InputField 
                searchGlobal 
                placeholder="Search comics"/>
            </Input>
            <Div svg>
              <icon.search size={"20"}/>
            </Div>
          </Div>
          <Div searchMobile onClick={() => handleModal("searchModal")}>
            <Icon white>
              <icon.search size={"20"}/>
            </Icon>    
          </Div>      

          {/* PHASE 2
          {registration.isAuthenticated ?
            <>
              <Icon white>
                <icon.bookmark 
                  onClick={() => handleModal("libraryModal")} 
                  size={20}/>
              </Icon>
              <Icon white>
                <icon.notification
                  onClick={() => handleModal("notifModal")} 
                  style={{marginTop:"-2px"}} size={25}/>
              </Icon>
            </> : null
          }  
          */}
       
          {registration.isAuthenticated ?
            <>
              <Avatar 
                onClick={() => handleModal("accountModal")} 
                src={profile.profilePic} alt="thumbnail pic"/> 
            </>
            :
            <DivLink linkColor={navData.loginLink} >
              <LinkRouter 
                to="./login" 
                
                style={{marginRight: "0rem",fontSize: "1.6rem"}}>
                <p onClick={() => handlelinks("loginLink")}>Log in</p>
              </LinkRouter>  
            </DivLink>
          } 
        </Div>
      </Nav>
       
      <Div modalsContainer account>
        
        {modalData.searchModal ?
          <GlobalSearchModal toggle={modalToggle}/>
          : modalData.notifModal
          ? <NotificationModal toggle={modalToggle}/>
          : modalData.libraryModal
          ? <LibraryModal toggle={modalToggle}/>
          : modalData.accountModal
          ? <AccountModal toggle={modalToggle}/>
          : null
        }
      
        {modalData.notifModal || modalData.libraryModal  || modalData.accountModal ?
            <Close onClick={handleCloseModal} modalCloseIcon>x</Close> 
          : 
          modalData.searchModal ?
            <Close onClick={handleCloseModal} searchCloseIcon>x</Close> 
          : null
        } 
      </Div>
    </Container>
  );
};

export default UpperNav;

