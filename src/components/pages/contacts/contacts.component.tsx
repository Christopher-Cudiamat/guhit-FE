import React from 'react';
import {icon} from "../../../images/imgConst";
import {image} from "../../../images/imgConst";

import {Div} from "./contacts.style";
import { TitleSection } from '../../../styleComponents/ui/title.syle';



const Contacts = () => {
  return (
    <Div>
      <ul>
        <li><TitleSection>Get in touch</TitleSection></li>
        <li>
          <icon.map/>
          <a href="https://www.google.com/maps/place/Makati,+Metro+Manila,+Philippines/@14.5545901,120.9981703,13z/data=!3m1!4b1!4m5!3m4!1s0x3397c90264a0ed01:0x2b066ed57830cace!8m2!3d14.554729!4d121.0244452">Makati 344, NCR</a>
        </li>
        <li>
          <icon.cellphone/>
          <a href="tel:guhit@gmail.com">344-4556-0021</a>
        </li>
        <li>
          <icon.email/>
          <a href="mailto:guhit@gmail.com">guhit@gmail.com</a>
        </li>
      </ul> 
  
      <img src={image.house} alt="Guhit Studi Illustration"/>
    </Div>
  );
};

export default Contacts;


