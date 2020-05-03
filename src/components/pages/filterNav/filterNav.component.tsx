import React, { useState, useEffect } from 'react';
import Nav from '../../../styleComponents/Nav.style';
import {Ul, Li} from "./filterNav.style";
import comics from "../../../images/comics-1.jpg";


const FilterNav = (props:any) => {

  const [linkIndex, setLinkIndex] = useState(0)

  const [filteredData, setFilteredData]= useState([{}])

  

  const dataArr = [
    {image: {comics}, title: " The day it ends", genre:"comedy", likes: 4, trending: true,original:false},
    {image: {comics}, title: " The day it ends", genre:"action", likes: 5, trending: true,original:false},
    {image: {comics}, title: " The day it ends", genre:"adventure", likes: 4, trending: true,original:false},
    {image: {comics}, title: " The day it ends", genre:"comedy", likes: 8, trending: true,original:false},
    {image: {comics}, title: " The day it ends", genre:"comedy", likes: 45, trending: true,original:false},
    {image: {comics}, title: " The day it ends", genre:"comedy", likes: 123, trending: true,original:false},
    {image: {comics}, title: " The day it ends", genre:"comedy", likes: 786, trending: true,original:false},
    {image: {comics}, title: " The day it ends", genre:"comedy", likes: 8768, trending: true,original:false},
    {image: {comics}, title: " The day it ends", genre:"comedy", likes: 23, trending: true,original:false},
    {image: {comics}, title: " The day it ends", genre:"comedy", likes: 56, trending: true,original:false},
    {image: {comics}, title: " The day it ends", genre:"comedy", likes: 1, trending: true,original:false},
    {image: {comics}, title: " The day it ends", genre:"comedy", likes: 467, trending: true,original:false},
    {image: {comics}, title: " The day it ends", genre:"comedy", likes: 55, trending: true,original:false},
    {image: {comics}, title: " The day it ends", genre:"comedy", likes: 765, trending: true,original:false},
    {image: {comics}, title: " The day it ends", genre:"comedy", likes: 324, trending: true,original:false},
    {image: {comics}, title: " The day it ends", genre:"comedy", likes: 1234, trending: true,original:false},
    {image: {comics}, title: " The day it ends", genre:"comedy", likes: 4324, trending: true,original:false},
    {image: {comics}, title: " The day it ends", genre:"comedy", likes: 456, trending: true,original:false},
    {image: {comics}, title: " The day it ends", genre:"comedy", likes: 134, trending: true,original:false},
    {image: {comics}, title: " The day it ends", genre:"comedy", likes: 454, trending: true,original:false},
    {image: {comics}, title: " The day it ends", genre:"comedy", likes: 51, trending: true,original:false},
    {image: {comics}, title: " The day it ends", genre:"comedy", likes: 22, trending: true,original:false},
   
  ];
  
  useEffect(()=>{
    handleFilter("Popular", 0);
     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);



  const handleFilterPopular = () => {
    const newArr =  dataArr.sort((a, b) => (a.likes > b.likes) ? -1 : 1); 
    setFilteredData(newArr);
    console.log(filteredData);
  }



  //to call filter services in the future
  const handleFilter = (title:string, num: number) => {
    props.onToggle(false);
    setLinkIndex(num);
    switch(title){
      case "Popular":
        handleFilterPopular();
        console.log("call popular service");
        break;
      case "Genre":
        console.log("call popular service");
        props.onToggle(true);
        break;
      case "Fresh":
        console.log("call fresh service");
        break;
      case "Trending":
        console.log("call Trending service");
        break;
      case "Guhit Originals":
        console.log("call Guhit originals");
        break;
      case "Name":
          props.onToggle(true);
          break;
      default:
        break;
    }
  }
  
  return (
    <>
      <Nav filterNav>
        <Ul>
          {
            props.arr.map((el:any, index:number) => {

            return  <Li                       
                      active={index === linkIndex ? true : false}
                      key={index}
                      onClick={e => handleFilter(el.title,index)}
                      >
                      {el.title}
                    </Li>     
            })
          }
        </Ul>
      </Nav>
    </>
  );
};

export default FilterNav;





