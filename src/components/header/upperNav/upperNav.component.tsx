import React, { useState} from 'react';
import Nav from "../../../styleComponents/Nav.style"
import { FaSearch } from 'react-icons/fa';
import { Div, Brand, Container, Avatar } from './upperNav.style';
import {Icon} from '../../../styleComponents/ui/icon.style';

import { InputField, Input } from '../../../styleComponents/ui/input.style';
import { FaBookmark } from 'react-icons/fa';
import { IoMdNotifications } from 'react-icons/io';
import { LinkRouter } from '../../../styleComponents/ui/link.style';
import creator3 from "../../../images/user/avatar/avatar-3.png";
import GlobalSearchModal from './globalSearchModal/globalSearchModal.component';
import NotificationModal from './notificationModal/notificationModal.component';
import LibraryModal from './libraryModal/libraryModal.component';
import AccountModal from './accountModal/accountModal.container';


const UpperNav = (props:any) => {

  let {
    profile,
    registration,
    setNavValue, 
    changeNavValue,
    navData,
    modalData,
    setModalValue,
    changeModalValue} = props;

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
        <LinkRouter to="./" onClick={e => handlelinks("homeLink")}>
          <Brand>
            Guhit
          </Brand>
        </LinkRouter>
        
        <Div left alignBaseLine={registration.isRegistered}>
          <Div relative>
            <Input onClick={e => handleModal("searchDesktop")}>
              <InputField 
              searchGlobal 
              placeholder="Search"
              />
            </Input>
            <Div svg>
              <FaSearch size={20}/>
            </Div>
          </Div>
          <Div searchMobile onClick={e => handleModal("searchModal")}>
            <Icon white >
                <FaSearch size={20}/>
            </Icon>    
          </Div>      

          
          {registration.isAuthenticated ?
            <>
              <Icon white>
                <FaBookmark 
                  onClick={e => handleModal("libraryModal")} 
                  size={20}/>
              </Icon>
              <Icon white>
                <IoMdNotifications 
                  onClick={e => handleModal("notifModal")} 
                  style={{marginTop:"-2px"}} size={25}/>
              </Icon>
            </> : null
          }
       
          {registration.isAuthenticated ?
            <>
              <Avatar 
                onClick={e => handleModal("accountModal")} 
                src={profile.profilePic} alt="thumbnail pic"/> 
            </>
            :
            <LinkRouter 
              to="./login" 
              togglenav={navData.data.loginLink}
              style={{marginRight: "0rem",fontSize: "1.6rem"}}>
              <p onClick={(e:any) => handlelinks("loginLink")}>Log in</p>
            </LinkRouter>  
          } 
        
        </Div>
      </Nav>
      
   
      <Div modalsContainer account>

        { 
          modalData.data.searchModal ?
          <GlobalSearchModal toggle={modalToggle}/>
          : modalData.data.notifModal
          ? <NotificationModal toggle={modalToggle}/>
          : modalData.data.libraryModal
          ? <LibraryModal toggle={modalToggle}/>
          : modalData.data.accountModal
          ? <AccountModal account toggle={modalToggle}/>
          : null
        }
      
       
        {  
          modalData.data.notifModal || modalData.data.libraryModal  || modalData.data.accountModal ?
            <h1 onClick={handleCloseModal} style={{position: "absolute", top: "0%", right: "2%", opacity: "0.6"}}>x</h1> 
          : 
          modalData.data.searchModal ?
            <h1 onClick={handleCloseModal} style={{position: "absolute", top: "11%", right: "2%", opacity: "0.6"}}>x</h1> 
          :null
        } 
      
       
      </Div>
      
    </Container>
  );
};

export default UpperNav;

{/* <GlobalSearchModal toggleSearch={modalToggle} onToggle={setModalToggle} /> */}