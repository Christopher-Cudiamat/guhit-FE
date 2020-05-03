import React from 'react';
import { LinkRouter } from '../../../../styleComponents/ui/link.style';
import { Container, Div } from './accountModal.style';

import { IoMdLogOut } from 'react-icons/io';
import { FiSettings } from 'react-icons/fi';
import { MdHelpOutline } from 'react-icons/md';
import { AiOutlineShop } from 'react-icons/ai';
import { MdPublish} from 'react-icons/md';


const accountModal = (props:any) => {

  const {
    profile,
    removeUserProfile,
    logout,
    setModalValue,
    setNavValue,
    changeNavValue} = props;

  const handleLogout = (name:string) => {
    logout();
    setModalValue();
    setNavValue();
    changeNavValue([name], true);
    removeUserProfile();
  }

  return (

    <Container>
      <Div account>
        <p>{profile.userName}</p>
      </Div>
      <Div accountList>
        <nav>
          <ul>
            <LinkRouter dark to="./creator-account">
              <li>
                <a>Account</a>
                <AiOutlineShop fontSize={"2.2rem"}/>
              </li>
            </LinkRouter>
            <LinkRouter dark to=""> 
              <li>
                <a>Publish</a>
                <MdPublish fontSize={"2.2rem"}/>
              </li>
            </LinkRouter>
            <LinkRouter  dark  to="">
              <li>
                <a>Settings</a>
                <FiSettings fontSize={"2.2rem"}/>
              </li>
            </LinkRouter>
            <LinkRouter dark to="">
              <li>
                <a>Help</a>
                <MdHelpOutline fontSize={"2.2rem"}/>
              </li>
            </LinkRouter>
            

          </ul>
        </nav>
      </Div>
      <Div accountLogout onClick={(e:any) => handleLogout("loginLink")}>
        <LinkRouter dark to="./login">
          <div>
            <p>Log out</p>
            <IoMdLogOut fontSize={"2.2rem"}/>
          </div>
        </LinkRouter>
      </Div>
    </Container>
  
  );
};

export default accountModal;