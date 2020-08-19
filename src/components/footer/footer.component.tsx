import React from 'react';
import { icon } from '../../images/imgConst';

import { Div, Ul, List, Brand } from './footer.style';
import Link, { LinkRouter } from '../../styleComponents/ui/link.style';

import logo from "../../images/logos/heade-logo.png"


const upperFooterArr = [
  {name: "Home", route: "./",linkName:"homeLink"},
  {name: "Comics", route: "./comics",linkName:"comicsLink"},
  {name: "Creators", route: "./creators",linkName:"creatorLink"},
  // {name: "Publish", route: "./publish"},
  {name: "About Us", route: "./about",linkName:"aboutLink"},
  {name: "News and Events", route: "./events",linkName:"eventsLink"},
  {name: "Contact Us", route: "./contacts",linkName:"contactLink"},
];

const socialFooterArr = [
  {icon: icon.facebook, route: "www.google.com",target:"_blank"},
  {icon: icon.instagram, route: "www.google.com",target:"_blank"},
  {icon: icon.linkedIn, route: "www.google.com",target:"_blank"},
];

const lowerFooterArr = [
  {name: "@Guhit 2020", route: "./"},
  {name: "Privacy", route: "./error"},
  {name: "Help", route: "./error"},
  {name: "Terms & Conditions", route: "./error"},
]

interface IupperFooter {
  name:string,
  route:string,
  linkName: string,
}

interface IlowerFooter {
  name:string,
  route:string,
}


const Footer = (props:any) => {

  let {changeNavValue, setNavValue} = props;

  const handleLinkNav = (name:string) => {
    setNavValue();
    changeNavValue([name], true);
    if((name === "aboutLink" || name === "eventsLink") || name === "contactLink"){
      changeNavValue(["menuLink"], true);
    }
  }
  

  return (
    <>
      <Div>
        <Brand>
            <img src={logo} alt="logo"/>
            <p>Guhit</p>
        </Brand>

        <Ul upperFooter>
          {
            upperFooterArr.map((el:IupperFooter,index:number) => {
              return  <List key={index} onClick={() => handleLinkNav(el.linkName)}>
                        <LinkRouter footer to={el.route}>
                          {el.name}
                        </LinkRouter>
                      </List>
            })
          }
        </Ul>

        <Ul socialFooter>
          {
            socialFooterArr.map((el:any,index:number) => {
              return  <List social key={index}>
                        <Link footer href={el.route} target={el.target}>
                          <el.icon size={40}/>
                        </Link>
                      </List>
            })
          }
        </Ul>

        <Ul lowerFooter>
          {
            lowerFooterArr.map((el:IlowerFooter,index:number) => {
              return  <List key={index}>
                        <LinkRouter footer to={el.route}>
                          {el.name}
                        </LinkRouter>
                      </List>
            })
          }
        </Ul>
      </Div>
    </>
  );
};

export default Footer;
