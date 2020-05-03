import React from 'react';
import { Avatar } from '../../../../../styleComponents/ui/avatar.style';
import { Div } from './creatorProfile.style';
import Button from '../../../../../styleComponents/ui/button.style';

import { MdLocationOn } from 'react-icons/md';
import { FaPatreon } from 'react-icons/fa';
import { LinkRouter } from '../../../../../styleComponents/ui/link.style';


const CreatorProfile = (props:any) => {

  const {profile} = props;
  console.log(profile);
  return (

      <Div profileContainer>
        <Avatar 
          // height={"40%"}
          // width={"40%"}
          src={profile.profilePic} 
          alt="Creator profile picture"/>

        <h2>{profile.userName}</h2>
        
        <p><span>Joined:</span>{profile.joinedDate}</p>

        <p><MdLocationOn/> {profile.city}</p>

        <p>{profile.description}</p>

        <p>Tools:</p>

        <ul> 
          {
            profile.tools.map((el:string, index:number) => {
              return <li key={index}>{el}</li>
            })
          }
        </ul>

        <p><FaPatreon fontSize={"10px"}/> {profile.patreon}</p>

        <LinkRouter  to="./publish-creator-info" secondaryOutline>Edit Profile</LinkRouter>
       
      </Div>


  );
};

export default CreatorProfile;