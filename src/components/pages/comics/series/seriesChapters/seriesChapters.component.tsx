import React from 'react';
import moment from 'moment';

import Card from '../../../../../styleComponents/ui/card.style';
import { Div} from './seriesChapters.style';
import { TitleSection } from '../../../../../styleComponents/ui/title.syle';



const SeriesChapters = (props:any) => {

  let {
    series,
    chapters,
    handleGoToChapter,
    registration,
    handleUpdateLikes,
    seriesTitle
  } = props;

  return (
    <div>
      <Div titleContainer>
        <TitleSection>Chapters</TitleSection>
        <p>{chapters.length} results</p>
        {/* <p onClick={() => handleUpdateLikes(registration.token,series._id,series.user)}>LIKE</p> */}
      </Div>
      <Card containerCenter>
        { 
          chapters.length > 0 ?
          chapters.map((el:any,index:number) => 
            <Card
              onClick={() => handleGoToChapter(el._id,seriesTitle)}
              chapters  
              horizontalSquare 
              key={index}>
              <img src={el.chapterCover} alt="featured comics"/>
              <div>
                <p>{el.chapterTitle}</p>
                <p>{moment(el.createdAt).format('L')}</p>
                <p>#{index + 1}</p>
              </div>
            </Card>)
          :
          <Div noResult>
            <h3>No chapters created</h3>
          </Div>
        }
      </Card>
    </div>
    )
}

export default SeriesChapters;