import React, { useEffect, useState } from 'react';
import { getAllSeries } from '../../../../../../services/publish';
import { Div } from './creatorSeriesList.style';
import Button from '../../../../../../styleComponents/ui/button.style';

import { useHistory } from 'react-router-dom';


const CreatorSeriesList = (props:any) => {

  const {listFilter,token,onOpenChapters} = props;
 
  const [seriesArray, setSeriesArray] = useState<Array<any>>([]);
  const [openChapterList, setOpenChapterList] = useState<boolean>(false);

  const history = useHistory();

  useEffect(() => {
    getAllSeries(token)
      .then(res => {
        setSeriesArray(res) 
      })
   
  }, [listFilter]);

  const handleAddChapter = () => {
    history.push("./publish-comic-chapters");
  }

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
                        <Button
                         blackOutline
                          onClick={handleAddChapter}
                         >
                           Add new chapter
                        </Button >
                        <Button 
                          blackOutline
                          onClick={onOpenChapters}
                          >
                            Edit chapters
                        </Button >
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