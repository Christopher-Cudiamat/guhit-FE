import React, { useState } from 'react';
import FilterNav from '../filterNav/filterNav.component';
import Card from '../../../styleComponents/ui/card.style';
import creatorThumb1 from "../../../images/user/avatar/avatar-1.png";
// import creatorThumb2 from "../../images/user/avatar/avatar-2.png";
// import creatorThumb3 from "../../images/user/avatar/avatar-3.png";
import { TitleSection } from '../../../styleComponents/ui/title.syle';
import { Div, Captions} from './creator.style';
import { Input, InputField, Label } from '../../../styleComponents/ui/input.style';




const Creator = (props:any) => {

  const [names, setNames] = useState(false);

  const creatorsArr = [
    {
      image: {creatorThumb1}, 
      userName: "Kaloy_Pogi", 
      series: ["Black Pink", "Twice","Bts", "Crash Landing to You"],
    },
    {
      image: {creatorThumb1}, 
      userName: "Rejik_Pacute", 
      series: ["Black Pink", "Twice","Bts", "Crash Landing to You"],
    },
    {
      image: {creatorThumb1}, 
      userName: "Liq182", 
      series: ["Crash Landing to You", "Twice","Bts", "Crash Landing to You"],
    },
    {
      image: {creatorThumb1}, 
      userName: "-MOnsi-", 
      series: ["Bts", "Twice","Bts", "Crash Landing to You"],
    },
    {
      image: {creatorThumb1}, 
      userName: "Kaloy_Pogi", 
      series: ["Black Pink", "Twice","Bts", "Crash Landing to You"],
    },
    {
      image: {creatorThumb1}, 
      userName: "Kaloy_Pogi", 
      series: ["Black Pink", "Twice","Bts", "Crash Landing to You"],
    },
    {
      image: {creatorThumb1}, 
      userName: "Kaloy_Pogi", 
      series: ["Black Pink", "Twice","Bts", "Crash Landing to You"],
    },
    {
      image: {creatorThumb1}, 
      userName: "Kaloy_Pogi", 
      series: ["Black Pink", "Twice","Bts", "Crash Landing to You"],
    },
    {
      image: {creatorThumb1}, 
      userName: "Kaloy_Pogi", 
      series: ["Black Pink", "Twice","Bts", "Crash Landing to You"],
    },
   
  ];

  
  const navList = [
    { title: 'Popular' },
    { title: 'Name' },
    { title: 'Joined' },
    { title: 'Trending' },
    { title: 'Originals'},
    { title: 'All', last: true },
  ];

  const updateToggle = (val: boolean) => {
    setNames(val);
  }


  // let handleNameSelect = () => {  
  //   setNames(true);
  // };


  return (
    <div>

      <FilterNav  arr={navList} onToggle={updateToggle} style={{marginBottom: "10rem"}}/>

     { names ?
       
          <Div inputBox>
            <p>Search by name:</p>
            <Input>
              <InputField  required/>
              <Label>Creator's name...</Label>
            </Input>
          </Div>: null
    
      } 

      <Div info>
        <TitleSection>Creators</TitleSection>
      </Div>
      
      <Div comicsList>
          <Card containerCenter>
            { creatorsArr.map((el,index) => {
              
               return   <Card container horizontal key={index}>
                          <img src={el.image.creatorThumb1} alt="featured comics"/>
                          <Captions>
                          <p>{el.userName}</p>
                          <p>Series:</p>
                          <ul>
                            {
                              el.series.map((el,index) => {
                                let text = `${el}...`;
                                if(index < 1){
                                  return<li key={index}>{text}</li>
                                }
                              })
                            }
                          </ul>
                          </Captions>
                        </Card>
                        
              })
            }
          </Card>
      </Div>
    </div>
  );
};

export default Creator;