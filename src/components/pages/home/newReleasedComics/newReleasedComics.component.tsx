import React from 'react';

import { Div } from "./newReleasedComics.style"
import Card from '../../../../styleComponents/ui/card.style';
import Link from '../../../../styleComponents/ui/link.style';
import { TitleSection } from '../../../../styleComponents/ui/title.syle';

const NewReleasedComics = (props:any) => {

  let {handleButtons,newComArr} = props;

  return (
    <Div featuredSection>
        <Div featuredTitle>
          <TitleSection marginBottom={"0rem"}>New Released Comics</TitleSection>
          <Link  onClick={e => handleButtons("comicsLink")}>See all</Link>
        </Div>
        <Card containerSpaceAround>
          {newComArr.map((el:any,index:number) => {
              return  <Card primary key={index}>
                        <img src={el.thumb} alt="new released comics comics"/>
                        <div>
                          <p>{el.genre}</p>
                          <p>{el.likes}k Likes</p>
                        </div>
                      </Card>     
            })
          }
        </Card>
    </Div>
  );
}

export default NewReleasedComics;
