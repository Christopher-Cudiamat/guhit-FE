import React from 'react';
import CreatorProfile from './creatorProfile/creatorProfile.container';
// import CreatorDashboard from './creatorDashboard/creatorDashboard.container';
import { DivProfile, DivDashboard, DivAccount } from './creatorAccount.style';
import CreatorDashboard from './creatorDashboard/creatorDashboard.container';

const CreatorAccount = (props:any) => {

  return (

    <DivAccount>
      <DivProfile>
        <CreatorProfile/>
      </DivProfile>
      <DivDashboard>
        <CreatorDashboard/>
      </DivDashboard>
    </DivAccount>

  );
};

export default CreatorAccount;