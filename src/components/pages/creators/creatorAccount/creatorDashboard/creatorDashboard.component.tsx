import React, { useState} from 'react';
import CreatorSeriesList from './creatorSeriesList/creatorSeriesList.component';
import CreatorNoSeries from './creatorNoSeries/creatorNoSeries.component';
import CreatorChapterList from './creatorChapterList/creatorChapterList.component';
import { useHistory} from 'react-router-dom';

import { Div } from './creatorDashboard.style';
import {TiArrowBack} from 'react-icons/ti';
import { MdClose } from 'react-icons/md';
import { AiOutlineFileAdd } from 'react-icons/ai';

const CreatorDashboard = (props:any) => {

  const {profile,registration} = props;

  const [listFilter, setListFilter] = useState<string>("all");
  const [goToChaptersLists, setgoToChaptersLists] = useState<boolean>(false);
  const [showPublishOption, setShowPublishOption] = useState<boolean>(false);
  const [seriesId, setSeriesId] =  useState<string>("");
  console.log("SERIES ID",seriesId);

  const history = useHistory();

  const handleChapterLists = (id:string) => {
    setgoToChaptersLists(!goToChaptersLists);
    setSeriesId(id);
  }

  // const handleChapterLists = (id:string) => {

  //   setSeriesId(id);
  // }


  const handPublishRoute = (name:string) => {
    if(name === "publish-comic-series"){
      history.push({
        pathname:"./publish-comic-series",
        state:  "isNewSeries"
      }); 
    } else if(name === "publish-comic-chapters"){
      history.push({
        pathname:"./publish-comic-chapters",
        state: {seriesId:seriesId, chapterId:"undefined", isNewChapter: true }
      }); 
    } else {
      history.push("./novels")
    }
  }

  return (
    
    <Div dashboardContainer>
      { profile.isCreator ?
          <Div dashboardNav>
            { 
              goToChaptersLists 
              ? <h4 
                  onClick={(e:any) => setgoToChaptersLists(!goToChaptersLists)}>
                  <TiArrowBack/>Back to series
                </h4> 
              : <select onChange={e => setListFilter(e.target.value)}>
                  <option selected value="all">My Series</option>
                  <option value="comics">Comics</option>
                  <option value="novels">Novels</option>
                </select>
            }

            { 
              goToChaptersLists  ?
              <h4 onClick={e => handPublishRoute("publish-comic-chapters")}>
                <AiOutlineFileAdd fontSize={"2rem"}/>
                Add new chapter
              </h4>
              :
              <h4 onClick={(e:any) => setShowPublishOption(!showPublishOption)}>
                { showPublishOption ? <MdClose fontSize={"2rem"}/> :  <AiOutlineFileAdd fontSize={"2rem"}/>}
                Add new series
              </h4>
            }

            { 
              showPublishOption ?
              <Div publishOption>
                <h4 onClick={e => handPublishRoute("publish-comic-series")}>Comics</h4>
                <h4 onClick={e => handPublishRoute("novels")}>Novels</h4>
              </Div>
              :
              null
            }
          </Div> :null
      }
     
      { 
        profile.comicsSeriesMade === 0 && !goToChaptersLists
          ? <CreatorSeriesList
              token={registration.token} 
              listFilter={listFilter} 
              onOpenChapters={handleChapterLists}/>
          : goToChaptersLists || profile.comicsChaptersMade === 0 
          ? <CreatorChapterList
              token={registration.token} 
              seriesId={seriesId}
              onOpenChapters={handleChapterLists}
              // onGetSerieId={handleGetSeriesId}
              />
          : <CreatorNoSeries/>
      }

    </Div>
  );
};

export default CreatorDashboard;