import React, { useState} from 'react';
import CreatorSeriesList from './creatorSeriesList/creatorSeriesList.component';
import CreatorNoSeries from './creatorNoSeries/creatorNoSeries.component';

import { Div } from './creatorDashboard.style';


const CreatorDashboard = (props:any) => {

  const {profile,registration} = props;

  const [listFilter, setListFilter] = useState<string>("all");

  return (
    
    <Div dashboardContainer>
      <div>
        <select onChange={e => setListFilter(e.target.value)}>
          <option selected value="all">My Series</option>
          <option value="comics">Comics</option>
          <option value="novels">Novels</option>
        </select>
        <h4>Library</h4>
      </div>
     
      { profile.seriesMade === 0 ?
        <CreatorNoSeries/>
        :
        <CreatorSeriesList token={registration.token} listFilter={listFilter}/>
      }

    </Div>
  );
};

export default CreatorDashboard;