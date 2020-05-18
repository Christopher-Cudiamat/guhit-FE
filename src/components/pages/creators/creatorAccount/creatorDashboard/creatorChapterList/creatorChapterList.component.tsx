import React, { useEffect, useState } from 'react';
import { getAllChapters } from '../../../../../../services/publish';

import { Div } from './creatorChapterList.style';
import Button from '../../../../../../styleComponents/ui/button.style';

// import chapterSample from "../../../../../../images/chapter-3.jpg";

const CreatorChapterList = (props:any) => {

  const {token,seriesTitle} = props;

  const [chaptersArray, setChaptersArray] = useState<Array<any>>([]);

  useEffect(() => {
    getAllChapters(token,seriesTitle)
      .then(res => {
        setChaptersArray(res);
      }) 
   
  }, []);

  return (
    <React.Fragment>
      
      {
        chaptersArray.map((el,index) => {
          return <Div chapterCard key={index}> 
                  <img src={el.chapterCover} alt="Series cover"/>
                  <div>
                    <h2>{el.chapterTitle}</h2>
                    <p>Date created: {el.chapterDateCreated}</p>
                    <p>chapter: {el.chapterNumber} </p>
                    <Div buttons>
                      <Button blackOutline>
                        Edit pages
                      </Button >
                      <Button blackOutline>
                        View Chapters
                      </Button >
                    </Div>
                  </div>
                </Div>
        })
      }
    </React.Fragment>

  );
};

export default CreatorChapterList;