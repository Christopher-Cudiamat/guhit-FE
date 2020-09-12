import React, { useState, useEffect } from 'react';
import FilterNav from '../filterNav/filterNav.component';
import { ScrollToTopOnMount } from '../../../utility/scrollToTopOnMount';
import { getSeriesList } from '../../../services/comics';
import moment from 'moment';

import Card from '../../../styleComponents/ui/card.style';
import { Div, List, Ul } from './comics.style';
import { LinkRouter } from '../../../styleComponents/ui/link.style';
import { TitleSection } from '../../../styleComponents/ui/title.syle';
import useDebounce from '../../../styleComponents/ui/customHooks/useDebounce';


const Comics = (props:any) => {

  const [limit,setLimit] = useState(8);
  const [skip,setSkip] = useState(0);
  const [genre, setGenre] = useState(false);
  const [genreType, setGenreType] = useState("");
  const [search, setSearch] = useState('');
  const [activeGenre, setActiveGenre] = useState(0);
  const [filterType,setFilterType] = useState('Popular');
  const [results,setResults] = useState(0);
  const [seriesArr,setSeriesArr] = useState([]);

  const debouncedSearchTerm = useDebounce(search, 200);

  useEffect(()=>{
    if(filterType !== "Genre" && filterType !== "Title"){
      getSeriesList(limit,skip,filterType)
        .then(res => {
          setSeriesArr(res.seriesList);
          setResults(res.dataLength);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[filterType]);

  useEffect(()=>{
    getSeriesList(limit,skip,filterType,genreType)
      .then(res => {
        setSeriesArr(res.seriesList);
        setResults(res.seriesList.length);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[genreType]);

  useEffect(() => {
    if(search !== "" && debouncedSearchTerm){
      getSeriesList(limit,skip,filterType,genreType,search)
      .then(res => {
        setSeriesArr(res.seriesList);
        setResults(res.seriesList.length);
        // if(!flag){
        //   setPageCount(Math.ceil(res.allCreatorsList.length/limit));
        // }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);


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
    { title: 'Title' },
    { title: 'New'},
    { title: 'All', last: true },
  ];

  const updateToggle = (val: boolean) => {
    setGenre(val);
  }
 
  let handleGenreSelect = (title:string,index:number) => {  
    setActiveGenre(index);
    setGenreType(title);
  };


  return (
    <div>
         
      <ScrollToTopOnMount/>

      <FilterNav  
        arr={navList}
        setGenre={setGenre}
        setSearch={setSearch}
        onToggle={updateToggle} 
        style={{marginBottom: "10rem"}}
        setFilterType={setFilterType}/>

      { genre ?
        <Ul genre>
          {
            genreArr.map( (el, index) => 
              <List 
                key={index} 
                active={index === activeGenre ? true : false}
                genres
                onClick={() =>handleGenreSelect(el,index)}>
                {el}
              </List>
            )
          }
        </Ul>: null
      }


      <Div info>
        <div>
          <TitleSection>Comics</TitleSection>
        </div>
        <div>
          <p>{results} Results</p>
        </div>
      </Div>
      
      <Div comicsList>
          <Card containerSpaceEvenly>
            {
              // results > 0  ?
              seriesArr.map((el:never|any,index) => 
                <Card grid key={index}>
                  {/* <p>{el.seriesTitle}</p>
                  <p>{moment(el.createdAt).format('L')}</p> */}
                  <LinkRouter to="/chapters">
                    <img src={el.seriesCover} alt="featured comics"/>
                  </LinkRouter>
                  <div>
                    <p>{el.genrePrimary}</p>
                    <p>{el.likes} Likes</p>
                  </div>
                </Card>  
              )
              // :
              // <Div>
              //   <h3>No Creator Found</h3>
              // </Div>
            }
          </Card>
      </Div>
    </div>
  );
};

export default Comics;