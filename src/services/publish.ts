import {instancePost, instanceGet} from "../configs/axios.config";

interface IphotoType {
  // name: "heade-logo.png"
  // lastModified: 1584469679828
  // lastModifiedDate: Tue Mar 17 2020 19:27:59 GMT+0100 (Central European Standard Time) {}
  // webkitRelativePath: ""
  // size: 3196
  
  name?: string,
  lastModified?: number
  lastModifiedDate?: Date
  webkitRelativePath?: string,
  size?: number,
  type?: string,
};

interface IPublishSeriesType{
  thumbnailPic?:  
  Array<{
    name?: string,
    lastModified?: number
    lastModifiedDate?:Date
    webkitRelativePath?: string,
    size?: number,
    type?: string,
  }>,
  title?: string,
  url?: string,
  genrePrimary?: string,
  genreSecondary?: string,
  summary?: string,
  tags?: Array<string>,
  bannerPic?: [{}],
  agreedPolicy?: boolean,
  containExplicit?: boolean,
}


interface IPublishChapterType{
  thumbnailPic?:  
  Array<{
    name?: string,
    lastModified?: number
    lastModifiedDate?:Date
    webkitRelativePath?: string,
    size?: number,
    type?: string,
  }>,
  title?: string,
  summary?: string,
  tags?: Array<string>,
  chapters?: [{}],
  bannerPic?: [{}],
  openComments?: boolean,
  matureContents?: boolean,
  date?: string,
}




export const getAllSeries = async (token:string) => {
 
  const config = {
    headers:{
      'Content-Type': 'application/json',
      'Authorization': token
    }
  }

  let url = '/api/series/all-my-series';

  const res = await instanceGet.get(url, config);
  console.log("SECRET RESPONE",res.data);
  return res.data;
};



export const postCreateSeries = async (token:string,data:any) => {

  const config = {
    headers:{
      'Content-Type': 'multipart/form-data',
      'Authorization': token
    }
  }

  let url = '/api/series/create-series';

  const body = new FormData();
  
  body.append("seriesTitle", data.title);
  body.append('seriesCover',data.coverPic);
  body.append('seriesBanner',data.bannerPic);
  body.append('seriesUrl',data.url);
  body.append('genrePrimary',data.genrePrimary);
  body.append('genreSecondary',data.genreSecondary);
  body.append('summary',data.summary);
  body.append('tags',data.tags.toString());
  body.append('condition',data.agreedPolicy.toString());
  body.append('consent',data.containExplicit.toString());

  

  const res = await instancePost.post(url,body,config); 
  console.log("RESPONSE DATA", res.data)
  return res.data;
};



export const postPublishChapter = async (data:IPublishChapterType) => {

  let url = "https://guhit-app.firebaseio.com/publishChapters.json";
 
  let body = {
      //to ask what data we will send in BE?
    
      "thumbnailPic": data.thumbnailPic,
      "title": data.title,
      "summary": data.summary,
      "tags": data.tags,
      "bannerPic": data.bannerPic,
      "openComments": data.openComments,
      "matureContents": data.matureContents,
      "date": data.date,
    }

  const res = await instancePost.post(url, body);
  return res.data;
};
