import React, { useState, useEffect } from 'react';
import {Div, InfoBox} from "./events.style";
import { TitleSection } from '../../../styleComponents/ui/title.syle';
import {eventsArr} from './events.json'
import Button from '../../../styleComponents/ui/button.style';
import { Select } from '../../../styleComponents/ui/select.style';


const Events = () => {

  const [linkIndex, setLinkIndex] = useState<number | null>(null);
  const [filteredData, setFilteredData]= useState(eventsArr);
  
  useEffect(() => {
    
    return () => {
      setFilteredData(eventsArr.sort((a, b) => (Date.parse(a.date) < Date.parse(b.date)) ? -1 : 1));
    };
  }, []);

  const handleToggleInfo = (index:number,status:string) => {
    if(status === "show"){
      setLinkIndex(index);
    } else {
      setLinkIndex(null);
    }
  };

  const handleFilterEvents = (value:any) => {
    let newArr = filteredData;
    if(value === "soon"){
      newArr = eventsArr.sort((a, b) => (Date.parse(a.date) < Date.parse(b.date)) ? -1 : 1);
    } else {
      newArr = eventsArr.sort((a, b) => (Date.parse(a.date) > Date.parse(b.date)) ? -1 : 1);
    }
    setFilteredData(newArr);
  };

  return (
    <>
      <Div>
        <div>
          <TitleSection>Events</TitleSection>
          <Select onChange={(e:any) => handleFilterEvents(e.currentTarget.value)}>
            <option value="soon">Events coming up sooner</option>
            <option value="later">Events coming up later</option>
          </Select>
        </div>

        {
          filteredData.map((el,index) => 
            <div key={index}>
                <img src={el.image} alt="events posters"/> 
                <InfoBox view={index === linkIndex ? true : false}>
                  <h3>{el.title}</h3>
                  <caption>{el.date}</caption>
                  <p>{el.desc}</p>
                </InfoBox>
                {
                  linkIndex === index ?
                  <Button 
                    noFill
                    onClick={() => handleToggleInfo(index,"hide")}>
                    Hide info
                  </Button>
                  :
                  <Button 
                    noFill
                    onClick={() => handleToggleInfo(index,"show")}>
                    More info
                  </Button>
                }
            </div>
          )
        } 
      </Div>
    </>
  );
};

export default Events;


