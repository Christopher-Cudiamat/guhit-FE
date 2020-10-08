import React, { useEffect, useState } from 'react';
import { getCreator } from '../../../../services/creators';
import { useLocation} from 'react-router-dom';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

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

  const history = useHistory();
  const location = useLocation<{creatorId?:string}>();
  const creatorId = location.state.creatorId;
 
  useEffect(() => {
    getCreator(creatorId)
      .then(res => {
        console.log(res);
        setData(res)}
        );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGoToSeries = (seriesId:string,userId:string) => {
    history.push({pathname:"./series",state:{seriesId,userId}});
  } 

  return (
    
    <Div container>

      <ScrollToTopOnMount/>

      <Div 
        creatorDetails
        marginRight={data.seriesMade.length > 0 ? true : false}>
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

      {
        data.seriesMade.length > 0 ?
        <Div creatorSeriesLists>
          <h2>Series</h2>
          {data.seriesMade.map((el:any,index:number) => 
              <div key={index}>
                <img src={el.seriesCover} alt="Series Cover"/>
                <div>
                  <p>{el.seriesTitle}</p>
                  <p>{el.genrePrimary}</p>
                  <Button 
                    onClick={() => handleGoToSeries("5f666dbcc135c42ba4f5ec15",el.user)}
                    secondary>
                    Read Now
                  </Button>
                </div>
              </div>
            ) 
          }
        </Div>
        : null
      }
            
    </Div>
  );
};

export default CreatorPage;
