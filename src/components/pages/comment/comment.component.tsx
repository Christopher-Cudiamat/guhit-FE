import React, { useState } from 'react';
import {Div} from "./comment.style";
import { AiFillLike } from 'react-icons/ai';
import creator1 from "../../../images/user/avatar/avatar-1.png";
import creator2 from "../../../images/user/avatar/avatar-2.png";
import creator3 from "../../../images/user/avatar/avatar-3.png";


let chapterComments = [
  {
    thumbnail: creator1,
    name: "Rejik_10",
    date: "Dec 01, 2020",
    id: 12343,
    commentDetail: "This chapter is awesome!!! but next week the artist will be taking a break, what a shame :(",
    likesCount: 20,
    replies:[
      {
        thumbnail: creator2,
        name: "Rejik_10",
        date: "Dec 01, 2020",
        id: 12343,
        replyDetail: "Hannah and Veronica are cuteee",
        likesCount: 12,
      },
      {
        thumbnail: creator3,
        name: "K@loysky",
        date: "Dec 04, 2020",
        id: 1212343,
        replyDetail: "I wass surprised in the end",
        likesCount: 3,
      },
    ]
  },
  {
    thumbnail: creator2,
    name: "Rejik_10",
    date: "Dec 01, 2020",
    id: 12343,
    commentDetail: "This chater is awesome!!!",
    likesCount: 20,
    replies:[
      
    ]
  },
  {
    thumbnail: creator1,
    name: "Rejik_10",
    date: "Dec 01, 2020",
    id: 12343,
    commentDetail: "This chater is awesome!!!",
    likesCount: 20,
    replies:[
      
    ]
  }



]


const Comment = (props:any) => {

  const [openReply, setOpenReply] = useState(null);
  const [replyDetail, setReplyDetail] = useState("");


  const handleSaveReply = (value:any) => {
    setReplyDetail(value);
  }

  const handleSendReply = (index:number) => {
    setOpenReply(null);
    chapterComments[index].replies.push({
      thumbnail: creator2,
      name: "Rejik_10",
      date: "Dec 01, 2020",
      id: 123456,
      replyDetail: replyDetail,
      likesCount: 0,
    })
    console.log(replyDetail);
  }

  const handleReply = (name:string,index:any) => {
    console.log(index);
    if(name === "open"){
      setOpenReply(index);
    } else{
      setOpenReply(null);
    }
    
  };

  return (
    <div>

      { 
        chapterComments.map((el, indexmain) => {
          
          return <Div 
                  key={indexmain}
                  container>
                    <Div comment>
                      <div>  
                        <div>
                          <img src={el.thumbnail} alt="thumbnail pic"/>
                        </div>
                        <div>
                          <p>{el.name}</p>
                          <p>{el.date}</p>
                        </div>
                      </div>
                      <div>
                        <p>{el.commentDetail}</p>
                      </div>
                      <div>
                        <p>like</p>
                        <p>reply</p>
                        <p><AiFillLike color={"#08E5BE"}/>{el.likesCount}</p>
                      </div>

                    </Div>

                    {
                      el.replies.length > 0 ?
                      el.replies.map((el, index) => {
                        return  <Div 
                                  key={index}
                                  reply
                                  >
                                  <div> 
                                    <div>
                                      <img src={el.thumbnail} alt="thumbnail pic"/> 
                                    </div>
                                    <div>
                                      <p>{el.name}</p>
                                      <p>{el.date}</p>
                                    </div>
                                  </div>

                                  <div>
                                    <p>{el.replyDetail}</p>
                                  </div>
                                  <div>
                                    <p>like</p>
                                    <p onClick={e => handleReply("open",index)}>reply</p>
                                    <p>
                                    <AiFillLike fontSize={"2rem"} color={"#08E5BE"}/>{el.likesCount}</p>
                                  </div>

                                  {
                                    openReply === index ?
                                    <div>
                                      <input 
                                      defaultValue={`@${el.name}`} 
                                      onChange={e => handleSaveReply(e.target.value)}/>
                                      <p onClick={e => handleReply("close",index)}>close</p>
                                      <p onClick={e => handleSendReply(indexmain)}>send</p>
                                    </div>
                                     : null
                                  }
                                </Div>
                      }) : null
                    }

                  </Div>
        })
    }
      
    </div>
  );
};

export default Comment;


