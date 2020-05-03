import React, { useEffect, useState } from 'react';
import { getAllSeries } from '../../../../../../services/publish';
import { Div } from './creatorSeriesList.style';
import Button from '../../../../../../styleComponents/ui/button.style';


const CreatorSeriesList = (props:any) => {

  const {listFilter,token} = props;
 
  const [seriesArray, setSeriesArray] = useState<Array<any>>([]);

  useEffect(() => {
    getAllSeries(token)
      .then(res => {
        setSeriesArray(res) 
      })
   
  }, [listFilter]);

  return (
    
    <>
      {
        seriesArray.map((el,index) => {
          console.log("MAP EL",el.seriesTitle)
          
          return  <>
                  <Div seriesCard key={index}> 
                    <img src={el.seriesCover} alt="Series cover"/>
                    <div>
                      <h2>{el.seriesTitle}</h2>
                      <Div genre>
                        <p>{el.genrePrimary}</p>
                        <p>{el.genreSecondary}</p>
                      </Div>
                      <p>{el.seriesDateCreated}</p>
                      <p>chapters: 0</p>
                      <Div buttons>
                        <Button blackOutline>Add chapter</Button >
                        <Button blackOutline>View chapters</Button >
                        <Button blackOutline>Edit Series</Button >
                      </Div>
                    </div>
                  </Div>
                  
                  </>
        })
      }
    </>
   
  );
};

export default CreatorSeriesList;