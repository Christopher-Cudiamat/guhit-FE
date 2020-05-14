import React, { useState} from 'react';
import CreatorSeriesList from './creatorSeriesList/creatorSeriesList.component';
import CreatorNoSeries from './creatorNoSeries/creatorNoSeries.component';
import CreatorChapterList from './creatorChapterList/creatorChapterList.component';
import { useHistory} from 'react-router-dom';

import { Div } from './creatorDashboard.style';
import {TiArrowBack} from 'react-icons/ti';
import { MdClose } from 'react-icons/md';
import { AiOutlineFileAdd } from 'react-icons/ai';
// import { LinkRouter } from '../../../../../styleComponents/ui/link.style';




const CreatorDashboard = (props:any) => {

  const {profile,registration} = props;

  const [listFilter, setListFilter] = useState<string>("all");
  const [goToChaptersLists, setgoToChaptersLists] = useState<boolean>(false);
  const [showPublishOption, setShowPublishOption] = useState<boolean>(false);

  const history = useHistory();

  const handleChapterLists = () => {
    setgoToChaptersLists(!goToChaptersLists);
  }

  const handPublishRoute = (name:string) => {
    if(name === "comics"){
      history.push("./publish-comic-series")
    } else {
      history.push("./novels")
    }
  }

  return (
    
    <Div dashboardContainer>
      
      <div>
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
        <h4 onClick={(e:any) => setShowPublishOption(!showPublishOption)}>
          { showPublishOption ?
            <MdClose fontSize={"2rem"}/>
            :
            <AiOutlineFileAdd fontSize={"2rem"}/>
          }
          Add new series
        </h4>

        { 
          showPublishOption ?
          <Div publishOption>
            <h4 onClick={e => handPublishRoute("comics")}>Comics</h4>
            <h4 onClick={e => handPublishRoute("novels")}>Novels</h4>
          </Div>
          :
          null
        }
      </div>
     
      { profile.seriesMade > 0 && !goToChaptersLists ?
        <CreatorSeriesList
          token={registration.token} 
          listFilter={listFilter} 
          onOpenChapters={handleChapterLists}/>
        : goToChaptersLists
        ? <CreatorChapterList/>
        : <CreatorNoSeries/>
      }

    </Div>
  );
};

export default CreatorDashboard;