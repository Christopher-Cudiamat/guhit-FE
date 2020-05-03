import React, { useState, useEffect } from 'react';
import FilterNav from '../filterNav/filterNav.component';
import Card from '../../../styleComponents/ui/card.style';
import comics from "../../../images/comics-1.jpg";
// import { TitleSection } from '../../../styleComponents/ui/title.syle';
import { Div, List, Ul } from './comics.style';
// import { Box } from '../../../styleComponents/ui/box.style';
// import Button from '../../../styleComponents/ui/button.style';
// import { LinkRouter } from '../../../styleComponents/ui/link.style';

import comics1 from "../../../images/comics-6.jpg";
import comics2 from "../../../images/comics-2.jpg";
import comics3 from "../../../images/comics-3.jpg";
import comics4 from "../../../images/comics-4.jpg";
import comics5 from "../../../images/comics-5.jpg";
import { LinkRouter } from '../../../styleComponents/ui/link.style';
import { getComics } from '../../../services/getComicsTest';
import { ScrollToTopOnMount } from '../../../utility/scrollToTopOnMount';




const Comics = (props:any) => {

  let {data, setComicsData} = props;
  const [genre, setGenre] = useState(false);
  const [activeGenre, setActiveGenre] = useState(0);
 
  useEffect(()=>{
    handleTest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);


  const comicsArr = [
    {thumb: comics3, genre: "Comedy", likes:4, title: "The Title"},
    {thumb:  comics4, genre: "Action", likes:4, title: "The Title"},
    {thumb:  comics2, genre: "Adventure", likes:1, title: "The Title"},
    {thumb:  comics5, genre: "Horror", likes:9, title: "The Title"},
    {thumb: comics1, genre: "Comedy", likes:4, title: "The Title"},
    {thumb:  comics4, genre: "Action", likes:4, title: "The Title"},
    {thumb:  comics3, genre: "Adventure", likes:1, title: "The Title"},
    {thumb:  comics5, genre: "Horror", likes:9, title: "The Title"},
    {thumb: comics1, genre: "Comedy", likes:4, title: "The Title"},
    {thumb:  comics4, genre: "Action", likes:4, title: "The Title"},
    {thumb:  comics2, genre: "Adventure", likes:1, title: "The Title"},
    {thumb:  comics5, genre: "Horror", likes:9, title: "The Title"},
    {thumb: comics1, genre: "Comedy", likes:4, title: "The Title"},
    {thumb:  comics3, genre: "Action", likes:4, title: "The Title"},
    {thumb:  comics2, genre: "Adventure", likes:6, title: "The Title"},
    {thumb:  comics5, genre: "Horror", likes:9, title: "The Title"},
    {thumb:  comics4, genre: "Action", likes:4, title: "The Title"},
    {thumb:  comics2, genre: "Adventure", likes:1, title: "The Title"},
  ];

  let genreArr = [
   "All genre",
   "Action",
   "Comedy",
   "Horror",
   "Drama",
   "Adventure",
   "Romance",
   "Suspense",
   "Sports",
   "Fantasy",
  ]

  const navList = [
    { title: 'Popular' },
    { title: 'Genre' },
    { title: 'Fresh' },
    { title: 'Trending' },
    { title: 'Originals'},
    { title: 'All', last: true },
  ];

  useEffect(() => {
    getComics()
    .then(res => {
      console.log("Succesful response",res);
    
    })
  }, [])

  const updateToggle = (val: boolean) => {
    setGenre(val);
  }
 
  let handleGenreSelect = (num:number) => {  
    setActiveGenre(num);
  };

  let handleTest = () => {  
    setComicsData(
      [
        {image: {comics}, title: " The day it ends", genre:"comedy", likes: 4, trending: true,original:false},
        {image: {comics}, title: " The day it ends", genre:"action", likes: 5, trending: true,original:false},
        {image: {comics}, title: " The day it ends", genre:"adventure", likes: 4, trending: true,original:false}
      ]
    );
    console.log("DATA RES",data);
  };

  return (
    <div>
        
      <ScrollToTopOnMount/>

      <FilterNav  arr={navList} onToggle={updateToggle} style={{marginBottom: "10rem"}}/>
{/* 
      <Button onClick={handleTest}>TEST FOR REDUX COMICS STORE</Button> */}
      { genre ?
        <Ul genre>
          {
            genreArr.map( (el, index) => {
              return  <List 
                        key={index} 
                        active={index === activeGenre ? true : false}
                        genres
                        onClick={(e) =>handleGenreSelect(index)}
                      >{el}</List>
            })
          }
        </Ul>: null
      }

      <Div info>
        <div>
          <p>{comicsArr.length} Results</p>
        </div>
        <div>
          <p>All</p>
          <p>Free</p>
          <p>Premium</p>
        </div>
      </Div>
      
      <Div comicsList>
          
          <Card containerSpaceEvenly>
            {comicsArr.map((el,index) => {
                 
              return  <Card grid key={index}>
                        <LinkRouter to="/chapters">
                          <img src={el.thumb} alt="featured comics"/>
                        </LinkRouter>
                        {/* <p>{el.title}</p> */}
                        <div>
                          <p>{el.genre}</p>
                          <p>{el.likes}k Likes</p>
                        </div>
                      </Card>  
              })
            }
          </Card>
      </Div>
    </div>
  );
};

export default Comics;