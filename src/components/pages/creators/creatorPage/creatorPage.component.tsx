import React, { useEffect, useState } from 'react';
import { getCreator } from '../../../../services/creators';
import { useLocation, useParams } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';
import { FaPatreon } from 'react-icons/fa';

import { Div } from './creatorPage.style';
import { TitleSmall } from '../../../../styleComponents/ui/title.syle';
import { Avatar } from '../../../../styleComponents/ui/avatar.style';

const CreatorPage = () => {

  interface IDataTypes {
    city: string,
    description: string,
    displayName: string,
    joinedDate: string,
    patreon: string,
    profilePic: string,
    seriesMade: Array<string>,
    tools: Array<string>
  }

  const [data,setData] = useState<IDataTypes>({
    city: "",
    description: "",
    displayName: "",
    joinedDate: "",
    patreon: "",
    profilePic: "",
    seriesMade: [],
    tools: [],
  });
  const location = useLocation<{creatorId?:string}>();
  const creatorId = location.state.creatorId;
 
  useEffect(() => {
    getCreator(creatorId)
      .then(res => setData(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    
    <Div container>
      <Avatar src={data.profilePic} alt="Creator profile picture"/>

      <h2>{data.displayName}</h2>
      
      <p><span>Joined:</span>{data.joinedDate}</p>

      <p><MdLocationOn/> {data.city}</p>

      <p>{data.description}</p>

      <p>Tools:</p>

      <ul>
        {data.tools.map((el:string, index:number) => <li key={index}>{el}</li>)}
      </ul>

      <p><FaPatreon fontSize={"10px"}/>{data.patreon}</p>
            
    </Div>
  );
};

export default CreatorPage;


{/* <img src={data.profilePic} alt="Creator profile pic"/> 
      
      <h3>{data.displayName}</h3>

      <p>{data.city}</p>

      <p>{data.joinedDate}</p>

      <p>{data.description}</p>

      <TitleSmall marginBottom={"1rem"}>Tools</TitleSmall>
      <ul>
        {data.tools.map((el:string, index:number) => <li key={index}>{el}</li>)}
      </ul>

      <TitleSmall marginBottom={"1rem"}>Support Creator</TitleSmall>
      <a href={data.patreon}>Donate</a> */}