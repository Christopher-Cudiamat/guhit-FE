import React from 'react';

import { featuredComicsTypes, featComArrTypes } from './featuredComics.d.type';

import { Div } from "./featuredComics.style"
import Card from '../../../../styleComponents/ui/card.style';
import Link from '../../../../styleComponents/ui/link.style';
import { TitleSection } from '../../../../styleComponents/ui/title.syle';


const FeaturedComics: React.FC<featuredComicsTypes> = props => {

  let {handleButtons,featComArr} = props;

  return (
    <Div featuredSection>

        <Div featuredTitle>
          <TitleSection marginBottom={"0rem"}>Featured Comics</TitleSection>
          <Link  onClick={() => handleButtons("comicsLink")}>See all</Link>
        </Div>

        <Card containerSpaceAround>
          {featComArr.map((el: featComArrTypes,index:number) => 
              <Card primary key={index}>
                <img src={el.thumb} alt="featured comics"/>
                <div>
                  <p>{el.genre}</p>
                  <p>{el.likes}k Likes</p>
                </div>
              </Card>     
            )
          }
        </Card>
    </Div>
  );
}

export default FeaturedComics;
