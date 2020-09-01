import React, { useState, useEffect } from 'react';
import FilterNav from '../filterNav/filterNav.component';
import PaginationController from '../paginationController/paginationController.component';
import { getCreatorsList, getCreator } from '../../../services/creators';
import { useHistory } from 'react-router-dom';

import Card from '../../../styleComponents/ui/card.style';
import { TitleSection } from '../../../styleComponents/ui/title.syle';
import { Div, Captions, Info} from './creator.style';
import { Input, InputField, Label } from '../../../styleComponents/ui/input.style';





const Creator = (props:any) => {

  const [names, setNames] = useState(false);
  const [rowPerPage, setRowPerPage] = useState(3);
  const [page, setPage] = useState(0);
  let [creatorsArr,setCreatorsArr] = useState([]);
  const history = useHistory();

  console.log("PARAMS", creatorsArr);

  useEffect(() => {
    getCreatorsList()
      .then(res => setCreatorsArr(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateToggle = (val: boolean) => {
    setNames(val);
  }

  const handleGoToCreatorPage = (creatorId:string) => {
    history.push({
      pathname:`/?creatorId=${creatorId}/creator`,
      state:  {creatorId: creatorId}
    });
      
  }

  const navList = [
    { title: 'Popular' },
    { title: 'Name' },
    { title: 'Joined' },
    { title: 'Trending' },
    { title: 'Originals'},
    { title: 'All', last: true },
  ];

  return (
    <>
    <FilterNav  arr={navList} onToggle={updateToggle} style={{marginBottom: "10rem"}}/>
      <Div container>

        { names ?
          <Div inputBox>
            <p>Search by name:</p>
            <Input>
              <InputField  required/>
              <Label>Creator's name...</Label>
            </Input>
          </Div>: null
        } 

        <Info hideShadow={creatorsArr.length < 1}>
          <TitleSection>Creators</TitleSection>
          <p>Results: {creatorsArr.length}</p>
        </Info>
        
        <Div comicsList>
          <Div cardContainer>
            { 
              creatorsArr.length > 0  ?
                  creatorsArr.map((el:never|any,index:number) => 
                    <Card 
                    horizontal 
                    key={index} 
                    onClick={() => handleGoToCreatorPage(el._id)}>
                      <img src={el.profilePic} alt="featured comics"/>
                      <Captions>
                        <p>{el.displayName}</p>
                        <p>Joined: {el.joinedDate}</p>
                        <p>Series: {el.seriesMade.length}</p>
                      </Captions>
                    </Card>
                )
              :
                <Div noResult>
                  <h3>No Results Found</h3>
                </Div>
            } 
          </Div>
          
          { creatorsArr.length > 1  ?
            <PaginationController
              setPage={setPage}
              setRowPerPage={setRowPerPage}
              rowPerPage={rowPerPage}/>
            : null
          }
        </Div> 
      </Div>
    </>
  );
};

export default Creator;