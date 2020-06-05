import React from 'react';
// import { Div } from './creatorDashboard.style';
import Button from '../../../../../../styleComponents/ui/button.style';
import { MdCreate } from 'react-icons/md';
import { ScrollToTopOnMount } from '../../../../../../utility/scrollToTopOnMount';





const CreatorNoSeries = (props:any) => {



  return (
    <div style={{height: "30rem",textAlign: "center"}}>
        <ScrollToTopOnMount/>
      <h2 style={{color: "#ccc",margin: "auto"}}>No series created yet</h2>
        {/* <Button secondary>
          <MdCreate 
            fontSize={"2rem"}
          />
          Create a series
        </Button> */}
    </div>    
   
  );
};

export default CreatorNoSeries ;