import React from 'react';
// import { Div } from './creatorDashboard.style';
import Button from '../../../../../../styleComponents/ui/button.style';
import { MdCreate } from 'react-icons/md';





const CreatorNoSeries = (props:any) => {



  return (
    <div>
      <h2>No series created yet</h2>
        <Button secondary>
          <MdCreate 
            fontSize={"2rem"}
          />
          Create a series
        </Button>
    </div>    
   
  );
};

export default CreatorNoSeries ;