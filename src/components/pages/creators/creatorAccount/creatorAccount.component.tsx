import React from 'react';
import CreatorProfile from './creatorProfile/creatorProfile.container';
// import CreatorDashboard from './creatorDashboard/creatorDashboard.container';
import { DivProfile, DivDashboard, DivAccount } from './creatorAccount.style';
import CreatorDashboard from './creatorDashboard/creatorDashboard.container';
import { TitlePage } from '../../../../styleComponents/ui/title.syle';

const CreatorAccount = (props:any) => {

  return (
    <React.Fragment>
    
    <DivAccount>
      <TitlePage>Account</TitlePage>
      <DivProfile>
        <CreatorProfile/>
      </DivProfile>
      <DivDashboard>
        <CreatorDashboard/>
      </DivDashboard>
    </DivAccount>
    </React.Fragment>

  );
};

export default CreatorAccount;