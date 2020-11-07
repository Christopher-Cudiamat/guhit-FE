import React, { useEffect } from 'react';

import Button from '../../../../../styleComponents/ui/button.style';
import { Select } from '../../../../../styleComponents/ui/select.style';
import {Form} from './chapterHeaderNav.style';


const ChapterHeaderNav = (props:any) => {

  let {chapterList,setChapterId,chapterId} = props;

  let currentIndex: number = chapterList.findIndex((el:any) => chapterId === el._id);

  const handleChangeChapter = (id: string) => {
    setChapterId(id);
  }

  const handleButton = (e:any, type: string, index:number) => {
    e.preventDefault();
    if  (type === "prev") {
      setChapterId(chapterList[index - 1]._id)
    } else {
      setChapterId(chapterList[index + 1]._id);
    }
  }

  return (
    <Form chapterNav>
    
        <Button 
          disabled={currentIndex === 0}
          blackOutline
          onClick={(e) => handleButton(e,"prev",currentIndex)}>
          Previous
        </Button>

        <Select  
          blackOutline
          onChange={(e:any) => handleChangeChapter(e.target.value)}>
           
            {
              chapterList.map((el:any, index:number) => 
                <option 
                  selected={el._id === chapterId}
                  value={el._id}
                  key={index}>
                    {`Chapter ${index + 1}: ${el.chapterTitle}`}
                </option>
              )
            }
        </Select>

        <Button 
          disabled={currentIndex === (chapterList.length - 1)}
          blackOutline
          onClick={(e) => handleButton(e,"next",currentIndex)}>
          Next
        </Button>
      
    </Form>
  );
};

export default ChapterHeaderNav;