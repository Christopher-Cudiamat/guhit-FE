import React, { useState} from 'react';
import GlobalSearchModal from './globalSearchModal/globalSearchModal.component';
import NotificationModal from './notificationModal/notificationModal.component';
import LibraryModal from './libraryModal/libraryModal.component';
import AccountModal from './accountModal/accountModal.container';
import  {icon} from '../../../images/imgConst';

import { InputField, Input } from '../../../styleComponents/ui/input.style';
import { LinkRouter } from '../../../styleComponents/ui/link.style';
import {Icon} from '../../../styleComponents/ui/icon.style';
import Nav from '../../../styleComponents/Nav.style';
import { Div, Brand, Container, Avatar, Close } from './upperNav.style';


const UpperNav = (props:any) => {

  let {
    profile,
    registration,
    setNavValue, 
    changeNavValue,
    navData,
    modalData,
    setModalValue,
    changeModalValue
  } = props;

  const [modalToggle, setModalToggle] = useState(false);

  const handleModal = (name:string) => {
    changeNavValue(["drawerToggle"], false);
    setModalValue();
    if(name === "searchDesktop"){
      changeModalValue([name], false);
    } else {  
      changeModalValue([name], true);
    }
    setModalToggle(!modalToggle);
  };

  const handleCloseModal = () => {
    setModalValue();
    setModalToggle(!modalToggle);
    changeNavValue(["drawerToggle"], false);
  }
 
  const handlelinks = (name:string) => {
    setModalValue();
    setNavValue();
    changeNavValue([name], true);
  }
 
  return (
    <Container>
      <Nav primary>
        <LinkRouter to="./" onClick={() => handlelinks("homeLink")}>
          <Brand>Guhit</Brand>
        </LinkRouter>
        
        <Div left alignBaseLine={registration.isRegistered}>
          <Div relative>
            <Input onClick={() => handleModal("searchDesktop")}>
              <InputField 
                searchGlobal 
                placeholder="Search.."/>
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
       
          {registration.isAuthenticated ?
            <>
              <Avatar 
                onClick={() => handleModal("accountModal")} 
                src={profile.profilePic} alt="thumbnail pic"/> 
            </>
            :
            <LinkRouter 
              to="./login" 
              togglenav={navData.data.loginLink}
              style={{marginRight: "0rem",fontSize: "1.6rem"}}>
              <p onClick={() => handlelinks("loginLink")}>Log in</p>
            </LinkRouter>  
          } 
        </Div>
      </Nav>
      
      <Div modalsContainer account>
        {modalData.data.searchModal ?
          <GlobalSearchModal toggle={modalToggle}/>
          : modalData.data.notifModal
          ? <NotificationModal toggle={modalToggle}/>
          : modalData.data.libraryModal
          ? <LibraryModal toggle={modalToggle}/>
          : modalData.data.accountModal
          ? <AccountModal toggle={modalToggle}/>
          : null
        }
      
        {modalData.data.notifModal || modalData.data.libraryModal  || modalData.data.accountModal ?
            <Close onClick={handleCloseModal} modalCloseIcon>x</Close> 
          : 
          modalData.data.searchModal ?
            <Close onClick={handleCloseModal} searchCloseIcon>x</Close> 
          : null
        } 
      </Div>
    </Container>
  );
};

export default UpperNav;

