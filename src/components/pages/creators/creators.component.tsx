import React, { useState, useEffect } from 'react';
import FilterNav from '../filterNav/filterNav.component';
import PaginationController from '../paginationController/paginationController.component';
import { getCreatorsList } from '../../../services/creators';
import { useHistory } from 'react-router-dom';
import moment from 'moment'; 
import { ScrollToTopOnMount } from '../../../utility/scrollToTopOnMount';
import useDebounce from '../../../styleComponents/ui/customHooks/useDebounce';


import Card from '../../../styleComponents/ui/card.style';
import { TitleSection } from '../../../styleComponents/ui/title.syle';
import { Div, Captions, Info} from './creator.style';

import{ BiLike } from 'react-icons/bi';


const Creator = (props:any) => {

  const limit:number = 6;
  const [skip,setSkip] = useState(0);
  const [filterType,setFilterType] = useState('Popular');
  const [search, setSearch] = useState('');
  const [flag,setFlag] = useState(false);
  const [results,setResults] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  let [creatorsArr,setCreatorsArr] = useState([]);
  const [genre, setGenre] = useState(false);
  const debouncedSearchTerm = useDebounce(search, 200);
  const history = useHistory();

  useEffect(() => {
    setFlag(true);
    setFilterType('Popular')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if(filterType !== "Name"){
      getCreatorsList(limit,skip,filterType,search)
      .then(res => {
        setCreatorsArr(res.allCreatorsList);
        setResults(res.dataLength);
        if(!flag){
          setPageCount(Math.ceil(res.dataLength/limit));
        }
      });
    } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skip,filterType]);

  useEffect(() => {
    if(search !== "" && debouncedSearchTerm){
      getCreatorsList(limit,skip,filterType,debouncedSearchTerm)
      .then(res => {
        setCreatorsArr(res.allCreatorsList);
        setResults(res.allCreatorsList.length);
        if(!flag){
          setPageCount(Math.ceil(res.allCreatorsList.length/limit));
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);


  const handleGoToCreatorPage = (creatorId:string) => {
    history.push({
      pathname:"./creator",
      state:  {creatorId: creatorId}
    });
  }

  const handleGoBackToSeries = (seriesId:string,userId:string) => {
    history.push({pathname:"./series",state:{seriesId,userId}});
  } 
 
  const navList = [
    { title: 'Popular' },
    { title: 'Name' },
    { title: 'Joined', last: true },
    { title: 'All'},
  ];

  return (
    <>
    <ScrollToTopOnMount/>
    
    <FilterNav  
      arr={navList} 
      setGenre={setGenre}
      style={{marginBottom: "10rem"}}
      setFilterType={setFilterType}
      setSearch={setSearch}/>

      <Div container>

        <Info hideShadow={creatorsArr.length < 1}>
          <TitleSection>Creators</TitleSection>
          <p>{results} {results <= 1 ? "Result" : "Results"}</p>
        </Info>
        
        <Div comicsList>
          <Div cardContainer>
            { 
              results > 0  ?
                  creatorsArr.map((el:never|any,index:number) => 
                    <Card 
                    horizontal 
                    key={index} 
                    onClick={() => handleGoToCreatorPage(el.user)}>
                      <img src={el.profilePic} alt="featured comics"/>
                      <Captions>
                        <h4>{el.displayName}</h4>
                        <p>Joined: {moment(el.createdAt).format('L')}</p>
                        <p>Series: {el.seriesMade.length}</p>
                        <div>
                          <p>Likes: {el.likes}</p> 
                          <BiLike color={"light blue"}/>
                        </div>
                      </Captions>
                    </Card>
                )
              :
                <Div noResult>
                  <h3>No Creator Found</h3>
                </Div>
            } 
          </Div>
          
          { results > 6  ?
            <PaginationController
              pageCount={pageCount}
              limit={limit}
              setSkip={setSkip}
              filterType={filterType}/>
            : null
          }
        </Div> 
      </Div>
    </>
  );
};

export default Creator;