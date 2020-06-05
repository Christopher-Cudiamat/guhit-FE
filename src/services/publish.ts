import {instancePost, instanceGet, instanceDelete} from "../configs/axios.config";

// interface IphotoType {

//   name?: string,
//   lastModified?: number
//   lastModifiedDate?: Date
//   webkitRelativePath?: string,
//   size?: number,
//   type?: string,
// };

// interface IPublishSeriesType{
//   thumbnailPic?:  
//   Array<{
//     name?: string,
//     lastModified?: number
//     lastModifiedDate?:Date
//     webkitRelativePath?: string,
//     size?: number,
//     type?: string,
//   }>,
//   title?: string,
//   url?: string,
//   genrePrimary?: string,
//   genreSecondary?: string,
//   summary?: string,
//   tags?: Array<string>,
//   bannerPic?: [{}],
//   agreedPolicy?: boolean,
//   containExplicit?: boolean,
// }


// interface IPublishChapterType{
//   thumbnailPic?:  
//   Array<{
//     name?: string,
//     lastModified?: number
//     lastModifiedDate?:Date
//     webkitRelativePath?: string,
//     size?: number,
//     type?: string,
//   }>,
//   title?: string,
//   summary?: string,
//   tags?: Array<string>,
//   chapters?: [{}],
//   bannerPic?: [{}],
//   openComments?: boolean,
//   matureContents?: boolean,
//   date?: string,
// }


///////////////////////////////////////////////////////////
//GET
///////////////////////////////////////////////////////////

export const getAllSeries = async (token:string) => {
 
  const config = {
    headers:{
      'Content-Type': 'application/json',
      'Authorization': token
    }
  }

  let url = '/api/series/all-my-series';

  const res = await instanceGet.get(url, config); 
  return res.data;
};

///////////////////////////////////////////////////////////
//GET
///////////////////////////////////////////////////////////

export const getSeries = async (token:string,seriesID:string|any) => {
 
  const config = {
    headers:{
      'Content-Type': 'application/json',
      'Authorization': token,
      // 'Params': {id:"5ec79ed1a6834a21e4d1fbc2"}
    }
  }

  let url = `/api/series/my-series?id=${seriesID}`;

  const res = await instanceGet.get(url, config); 
  return res.data;
};


export const getChapter = async (token:string,chapterID:string|any) => {
 
  const config = {
    headers:{
      'Content-Type': 'application/json',
      'Authorization': token,
      // 'Params': {id:"5ec79ed1a6834a21e4d1fbc2"}
    }
  }

  let url = `/api/chapters/my-chapter?id=${chapterID}`;

  const res = await instanceGet.get(url, config); 
  return res.data;
};




///////////////////////////////////////////////////////////
//GET
///////////////////////////////////////////////////////////

export const getAllChapters = async (token:string,seriesId:string) => {
 
  const config = {
    headers:{
      'Content-Type': 'application/json',
      'Authorization': token,
    }
  }

  let url = `/api/chapters/all-my-chapters?id=${seriesId}`;

  const res = await instanceGet.get(url, config);
  return res.data;
};




///////////////////////////////////////////////////////////
//POST
///////////////////////////////////////////////////////////
export const postCreateSeries = async (token:string,data:any) => {

  const config = {
    headers:{
      'Content-Type': 'multipart/form-data',
      'Authorization': token
    }
  }

  let url = '/api/series/create-series';

  const body = new FormData();
  body.append("isNewSeries",data.isNewSeries)
  body.append("seriesTitle", data.title);
  body.append('seriesCover',data.coverPic);
  body.append('seriesBanner',data.bannerPic);
  body.append('seriesUrl',data.url);
  body.append('genrePrimary',data.genrePrimary);
  body.append('genreSecondary',data.genreSecondary);
  body.append('summary',data.summary);
  // body.append('seriesId',data.seriesId);
  body.append('tags',data.tags.toString());
  body.append('condition',data.agreedPolicy.toString());
  body.append('consent',data.containExplicit.toString());

  const res = await instancePost.post(url,body,config); 
  return res.data;
};




///////////////////////////////////////////////////////////
//POST
///////////////////////////////////////////////////////////
export const postCreateChapter = async (token:string,data:any) => {
 
  let {
    chapterCover,
    chapterTitle,
    chapterDescription,
    tags,
    openForComments,
    matureContents,
    chapterPages,
    seriesId,
    chapterId,
    
  } = data;

  const config = {
    headers:{
      'Content-Type': 'multipart/form-data',
      'Authorization': token
    }
  }

  let url = '/api/chapters/create-chapter';

  
  const body = new FormData();
  
  body.append("seriesId",seriesId);
  body.append("chapterId",chapterId);
  body.append("chapterTitle",chapterTitle);
  body.append("chapterCover",chapterCover);
  body.append("chapterDescription",chapterDescription);
  body.append("tags",tags.toString());
  body.append("openForComments",openForComments.toString());
  body.append("matureContents",matureContents.toString());
  {chapterPages.map((el:any) => {
    body.append("chapterPages",el);
  })}

  const res = await instancePost.post(url,body,config); 
  return res.data;
};



///////////////////////////////////////////////////////////
//POST
///////////////////////////////////////////////////////////
export const deleteSeries = async (token:string,seriesID:string|any) => {
 
  const config = {
    headers:{
      'Content-Type': 'application/json',
      'Authorization': token,
    }
  }

  let url = `/api/series/delete-series?id=${seriesID}`;

  const res = await instanceDelete.delete(url, config); 
  return res.data;
};




