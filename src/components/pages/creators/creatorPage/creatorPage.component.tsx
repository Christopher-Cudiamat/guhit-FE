import React, { useEffect, useState } from 'react';
import { getCreator } from '../../../../services/creators';
import { useLocation} from 'react-router-dom';
import moment from 'moment';

import { MdLocationOn } from 'react-icons/md';
import { FaPatreon } from 'react-icons/fa';

import { Div } from './creatorPage.style';
import { Avatar } from '../../../../styleComponents/ui/avatar.style';
import { ScrollToTopOnMount } from '../../../../utility/scrollToTopOnMount';
import Button from '../../../../styleComponents/ui/button.style';

const CreatorPage = () => {

  interface IDataTypes {
    city: string,
    description: string,
    displayName: string,
    createdAt: string,
    patreon: string,
    profilePic: string,
    seriesMade: Array<string>,
    tools: Array<string>
  }

  const [data,setData] = useState<IDataTypes>({
    city: "",
    description: "",
    displayName: "",
    createdAt: "",
    patreon: "",
    profilePic: "",
    seriesMade: [],
    tools: [],
  });

  console.log("DATA",data);
  const location = useLocation<{creatorId?:string}>();
  const creatorId = location.state.creatorId;
 
  useEffect(() => {
    getCreator(creatorId)
      .then(res => setData(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    
    <Div container>

      <ScrollToTopOnMount/>

      <Div creatorDetails>
        <Avatar src={data.profilePic} alt="Creator profile picture"/>
        <h2>{data.displayName}</h2>
        <p><span>Joined:</span>{moment(data.createdAt).format('L')}</p>
        <p><MdLocationOn/> {data.city}</p>
        <p>{data.description}</p>
        <p>Tools:</p>
        <ul>
          {data.tools.map((el:string, index:number) => <li key={index}>{el}</li>)}
        </ul>
        <p><FaPatreon fontSize={"10px"}/>{data.patreon}</p>
      </Div>

      <Div creatorSeriesLists>
        <h2>Series</h2>
        {data.seriesMade.map((el:any,index:number) => 
            <div key={index}>
              <img src={el.seriesCover} alt="Series Cover"/>
              <div>
                <p>{el.seriesTitle}</p>
                <p>{el.genrePrimary}</p>
                <Button secondary>Read Now</Button>
              </div>
            </div>
          ) 
        }
      </Div>
            
    </Div>
  );
};

export default CreatorPage;
