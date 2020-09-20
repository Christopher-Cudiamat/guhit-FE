import {instanceGet} from "../configs/axios.config";


export const getSeriesList = async (
  limit:number,
  skip:number,
  filterType:string,
  genreType:string = "",
  search:string = "",
  ) => { 

  const config = {
    headers:{
      'Content-Type': 'application/json',
    }
  }

  let url = "";

  if(filterType === "Genre") {
    url = `api/series/list?limit=${limit}&skip=${skip}&filterType=${filterType}&genreType=${genreType}`;
  }else if(filterType === "Title") {
    url = `api/series/list?limit=${limit}&skip=${skip}&filterType=${filterType}&seriesTitle=${search}`;
  } else {
    url = `api/series/list?limit=${limit}&skip=${skip}&filterType=${filterType}`;
  }

  console.log("URL",url);  
  

  const res = await instanceGet.get(url,config);
  return res.data;
};

export const getSeriesComics = async (seriesId:any,userId:any) => { 

  const config = {
    headers:{
      'Content-Type': 'application/json',
    }
  }

  let url = `api/series/comics?seriesId=${seriesId}&userId=${userId}`;

  const res = await instanceGet.get(url,config);
  return res.data;
};

export const getChapterComics = async (chapterId:string) => { 

  const config = {
    headers:{
      'Content-Type': 'application/json',
    }
  }

  let url = `api/chapters/chapter?chapterId=${chapterId}`;

  const res = await instanceGet.get(url,config);

  return res.data;
};


