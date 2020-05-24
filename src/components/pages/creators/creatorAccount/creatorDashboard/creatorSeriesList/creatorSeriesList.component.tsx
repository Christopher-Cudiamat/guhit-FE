import React, { useEffect, useState } from 'react';
import { getAllSeries } from '../../../../../../services/publish';
import { Div } from './creatorSeriesList.style';
import Button from '../../../../../../styleComponents/ui/button.style'; 

import { useHistory } from 'react-router-dom';


const CreatorSeriesList = (props:any) => {

  const {listFilter,token,onOpenChapters} = props;
 
  const [seriesArray, setSeriesArray] = useState<Array<any>>([]);
  const [seriesId, setSeriesId] = useState<string>('');

  const history = useHistory();

  useEffect(() => {
    getAllSeries(token)
      .then(res => {
        // console.log(res);
        // res.map((el:any) => console.log(el._id));
        setSeriesArray(res) 
      })
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listFilter]);

  const handleAddChapter = (seriesId:string) => {
    history.push({
      pathname:"./publish-comic-chapters",
      state:  seriesId 
    }); 
  }

  const handleEditSeries = (seriesId:string) => {
    history.push({
      pathname:"./publish-comic-series",
      state:  seriesId 
    }); 
  }

  return (
    
    <>
      {
        seriesArray.map((el,index) => {
          console.log("ID",el._id);
          
          return  <>
                    <Div seriesCard key={index}> 
                      <img src={el.seriesCover} alt="Series cover"/>
                      <div>
                        <h2>{el.seriesTitle}</h2>
                        <Div genre>
                          <p>{el.genrePrimary}</p>
                          <p>{el.genreSecondary}</p>
                        </Div>
                        <p>Date published:{el.seriesDateCreated}</p>
                        <p>chapters: 0</p>
                        <Div buttons>
                          <Button
                          blackOutline
                            onClick={e => handleAddChapter(el._id)}>
                            Add new chapter
                          </Button>
                          <Button 
                            blackOutline
                            onClick={e => onOpenChapters(el._id)}>
                              Edit chapters
                          </Button >
                          <Button 
                            blackOutline
                            onClick={e => handleEditSeries(el._id)}>
                            Edit Series</Button >
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