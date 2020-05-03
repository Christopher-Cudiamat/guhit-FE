import React from 'react';
import {Div} from "./events.style";
import { TitleSection } from '../../../styleComponents/ui/title.syle';
// import { MdSettingsCell } from 'react-icons/md';
// import { MdLocalPostOffice } from 'react-icons/md';
// import { MdPlace } from 'react-icons/md';

// import award1 from '../../../images/about/award3.jpg';
// import award2 from '../../../images/about/award2.jpg';
// import award3 from '../../../images/about/award1.jpg';
import award4 from '../../../images/about/award4.png';


const newsEventsArr = [
  
  {image: award4},
  {image: award4},
  {image: award4},
  {image: award4},
 
]


const Events = (props:any) => {
  return (
    <>
      <Div >
      <TitleSection>
        News & Events
      </TitleSection>
      {/* <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, itaque aliquid neque porro aperiam aut maxime iusto ipsa sed explicabo animi! Cum nesciunt, natus dolorum libero illo nam a hic?
      </p>
         */}
      {
        newsEventsArr.map((el,index) => {
             return <div key={index}>
                        <img src={el.image} alt="events posters"/> 
                      </div>
                    })
        } 
      </Div>
    </>
  );
};

export default Events;


