import React from 'react';
import {Div} from "./contacts.style";
import { MdSettingsCell } from 'react-icons/md';
import { MdLocalPostOffice } from 'react-icons/md';
import { MdPlace } from 'react-icons/md';


const Contacts = (props:any) => {
  return (
    <div style={{	overflowX: "hidden"}}>
      <Div>
        <div>
          <ul>
            <li><h2>Get in touch</h2></li>
            <li>
              <MdPlace 
              color={"#bbb"} 
              fontSize={"2rem"} 
              style={{marginRight:"1rem"}}
              />
              Makati 344, NCR
            </li>
            <li>
              <MdSettingsCell 
                color={"#bbb"} 
                fontSize={"2rem"} 
                style={{marginRight:"1rem"}}
                />
                344-4556-0021
            </li>
            <li>
              <MdLocalPostOffice 
              color={"#bbb"} 
              fontSize={"2rem"} 
              style={{marginRight:"1rem"}}
              />
              www.guhit@information.com
              </li>
          </ul> 
        </div>  
      </Div>
    </div>
  );
};

export default Contacts;


