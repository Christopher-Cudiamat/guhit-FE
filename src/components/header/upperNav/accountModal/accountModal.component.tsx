import React from 'react';
import  {icon} from '../../../../images/imgConst';

import { LinkRouter } from '../../../../styleComponents/ui/link.style';
import { Container, Div } from './accountModal.style';


const AccountModal = (props:any) => {
 
  const {
    profile,
    removeUserProfile,
    logout,
    setModalValue,
    setNavValue,
    changeNavValue
  } = props;

  let profileName = profile.userName.split("@")[0];

  const handleLogout = (name:string) => {
    logout();
    setModalValue();
    setNavValue();
    changeNavValue([name], true);
    removeUserProfile();
  }

  const handleListsClick = () => {
    setModalValue();
    setNavValue();
  }

  return (

    <Container>
      <Div account>
        <p>{profileName}</p>
      </Div>
      <Div accountList>
        <nav onClick={handleListsClick}>
          <ul>
            <LinkRouter dark to="./account">
              <li>
                <a>Account</a>
                <icon.account fontSize={"2.2rem"}/>
              </li>
            </LinkRouter>
            {/* Missing Link for Settings - to be added */}
            <LinkRouter  dark  to="">
              <li>
                <a>Settings</a>
                <icon.settings fontSize={"2.2rem"}/>
              </li>
            </LinkRouter>
            {/* Missing Link for Help - to be added */}
            <LinkRouter dark to="">
              <li>
                <a>Help</a>
                <icon.help fontSize={"2.2rem"}/>
              </li>
            </LinkRouter>
          </ul>
        </nav>
      </Div>
      <Div accountLogout onClick={() => handleLogout("loginLink")}>
        <LinkRouter dark to="./login">
          <div>
            <p>Log out</p>
            <icon.logout fontSize={"2.2rem"}/>
          </div>
        </LinkRouter>
      </Div>
    </Container>
  
  );
};

export default AccountModal;