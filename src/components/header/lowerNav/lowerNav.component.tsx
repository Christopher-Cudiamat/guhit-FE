import React, {useState, useEffect} from 'react';
import Nav from '../../../styleComponents/Nav.style';
import {Ul, List, Container, Menu} from './lowerNav.styled';
import {Icon} from '../../../styleComponents/ui/icon.style';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
import Drawer from './drawer/drawer.container';
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
    if(modalData.data.notifModal || modalData.data.libraryModal  || modalData.data.accountModal || modalData.data.searchModal){
      setModalValue();
    } 
  }



  return (
    <Container onClick={handleCloseModals}>
      <Nav secondary>
        <Ul>

          <List>
            <LinkRouter 
              to="./"  
              togglenav={navData.data.homeLink}
              >
              <p 
                style={{marginRight: "1.5rem", fontSize: "1.6rem", fontWeight: 500,}}
                onClick={(e:any) => handleClickNav("homeLink")}
                >
                Home 
            </p>
            </LinkRouter> 
          </List>
    
          <List>
            <LinkRouter 
              to="/comics"   
              togglenav={navData.data.comicsLink}
              >
              <p 
                style={{marginRight: "1.5rem", fontSize: "1.6rem", fontWeight: 500,}}
                onClick={(e:any) => handleClickNav("comicsLink")}
                >
                Comics  
            </p>
            </LinkRouter>
          </List>

          <List>
            <LinkRouter 
              to="/novels"   
              togglenav={navData.data.novelsLink}
              >
              <p 
                style={{marginRight: "1.5rem", fontSize: "1.6rem", fontWeight: 500,}}
                onClick={(e:any) => handleClickNav("novelsLink")}
                >
                Novels 
            </p>
            </LinkRouter>
          </List>
          <List>
            <LinkRouter 
              to="/publish"   
              togglenav={navData.data.exploreLink}
              >
              <p 
                style={{marginRight: "1.5rem", fontSize: "1.6rem", fontWeight: 500,}}
                onClick={(e:any) => handleClickNav("exploreLink")}
                >
                Publish
            </p>
            </LinkRouter>
          </List>
        </Ul>

        {  navData.data.drawerToggle ?
          <Menu>
            <p
              color={navData.data.menuLink}
              onClick={handleToggleMenu}>
              Explore
            </p>
            <Icon 
              colorMenu={navData.data.menuLink}
              onClick={handleToggleMenu}>
              <AiOutlineClose size={24}/>
            </Icon>
          </Menu>
          :
          <Menu>
            <p 
              color={navData.data.menuLink}
              onClick={handleToggleMenu}>
              Explore
            </p>
            <Icon
              colorMenu={navData.data.menuLink}
              onClick={handleToggleMenu}>
              <AiOutlineMenu size={24}/>
            </Icon>
          </Menu>
        }
        
      </Nav>
      
      <Drawer toggle={modalData.data.drawerModal}/>
    </Container>  

  );
};

export default LowerNav;

    
  // useEffect(() => {
  //   handleToggleMenu();
  //   // setToggleMenu(false);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [ navData.data.menuLink]);

  // //persist hook state value after refresh using local storage
  // useEffect(() => {
  //   const com = localStorage.getItem('comicsLink');
  //   const nov = localStorage.getItem('novelsLink');
  //   if(com||nov){
  //     changeNavValue(["comicsLink"], com);
  //     changeNavValue(["novelsLink"], nov);
  //   }
  // }, [])
  
  // useEffect(() => {
  //   localStorage.setItem('comicsLink',navData.data.comicsLink.toString());
  //   localStorage.setItem('novelsLink',navData.data.novelsLink.toString());
  
  // });













  // useEffect(() =>{

  // },[navData]);



  // {
  //   iconLinkArr.map((el,index) => {
  //     return  <List key={index}>
  //                <LinkRouter 
  //                   to={el.url}   
  //                   toggleNav={el.linkName === linkName ? true : false}
  //                 >
  //                 <p 
  //                   style={{marginRight: "2rem", fontSize: "2rem", fontWeight: 500,}}
  //                   onClick={(e:any) => handleClickNav(el.linkName,index)}
  //                   >
  //                   {el.icon}
  //                 </p>

                  
  //               </LinkRouter>
  //             </List>

  //             //link old style with icons 

  //             {/* <List key={index}>
  //             <Link to={el.url}>
  //             <Icon 
  //               style={{marginRight: "2rem", fontSize: "2rem"}}
  //               onClick={(e:any) => handleClickNav(index)}
  //               toggleNav={index === linkIndex ? true : false}
  //               >
  //               {el.icon}
                
  //             </Icon>

              
  //             </Link>
  //             </List> */}
  //   })
  // }
