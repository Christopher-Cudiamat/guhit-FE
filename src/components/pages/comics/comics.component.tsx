import React, { useState, useEffect } from 'react';
import FilterNav from '../filterNav/filterNav.component';
import { ScrollToTopOnMount } from '../../../utility/scrollToTopOnMount';
import { getSeriesList } from '../../../services/comics';
import moment from 'moment';
import PaginationController from '../paginationController/paginationController.component';
import { useHistory } from 'react-router-dom';

import Card from '../../../styleComponents/ui/card.style';
import { Div, List, Ul } from './comics.style';
import { LinkRouter } from '../../../styleComponents/ui/link.style';
import { TitleSection } from '../../../styleComponents/ui/title.syle';
import useDebounce from '../../../styleComponents/ui/customHooks/useDebounce';



const Comics = (props:any) => {

  const [limit,setLimit] = useState(6);
  const [skip,setSkip] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [genre, setGenre] = useState(false);
  const [genreType, setGenreType] = useState("");
  const [search, setSearch] = useState('');
  const [activeGenre, setActiveGenre] = useState(-1);
  const [filterType,setFilterType] = useState('Popular');
  const [results,setResults] = useState(0);
  const [seriesArr,setSeriesArr] = useState([]);
  const [flag,setFlag] = useState(false);
  const debouncedSearchTerm = useDebounce(search, 200);
  const history = useHistory();


  useEffect(()=>{
    if(filterType !== "Genre" && filterType !== "Title"){
      getSeriesList(limit,skip,filterType)
        .then(res => {
          setSeriesArr(res.seriesList);
          setResults(res.dataLength);
          setPageCount(Math.ceil(res.dataLength/limit));
        });
    } else {
      setActiveGenre(-1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[skip,filterType]);

  useEffect(()=>{
    setFlag(true);
    getSeriesList(limit,skip,filterType,genreType)
      .then(res => {
        setSeriesArr(res.seriesList);
        setResults(res.dataLength);
        if(flag){
          setPageCount(Math.ceil(res.dataLength/limit));
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[skip,genreType]);

  useEffect(() => {
    if(search !== "" && debouncedSearchTerm){
      getSeriesList(limit,skip,filterType,genreType,search)
      .then(res => {
        setSeriesArr(res.seriesList);
        setResults(res.seriesList.length);
        setPageCount(Math.ceil(res.seriesList.length/limit));
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  let genreArr = [
   "Action",
   "Adventure",
   "Comedy", 
   "Drama",
   "Fantasy",
   "Horror",
   "Mystery",
   "Romance",
   "Spice Of Life",
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

  const handleGoToSeries = (seriesId:string,userId:string) => {
    history.push({pathname:"./series",state:{seriesId,userId}});
  } 


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
        <div><TitleSection>Comics</TitleSection></div>
        <div><p>{results} Results</p></div>
      </Div>
      
      <Div comicsList>
        {
          results > 0  ?
          <Card containerSpaceEvenly>
            {seriesArr.map((el:never|any,index) => 
              <Card 
                grid  
                key={index}
                onClick={() => handleGoToSeries(el._id,el.user)}>
                <LinkRouter to="/chapters">
                  <img src={el.seriesCover} alt="featured comics"/>
                </LinkRouter>
                <div>
                  <p>{el.genrePrimary}</p>
                  <p>{el.likes.length} Likes</p>
                </div>
              </Card>  
              )}
          </Card>
          :
          <Div noResult>
            <h3>No comics Found</h3>
          </Div>
        }

        {
          results > limit  ?
          <PaginationController
            pageCount={pageCount}
            limit={limit}
            setSkip={setSkip}
            filterType={filterType}/>
          : null
        }
      </Div>
    </div>
  );
};

export default Comics;


 {/* <p>{el.seriesTitle}</p>
                <p>{moment(el.createdAt).format('L')}</p> */}