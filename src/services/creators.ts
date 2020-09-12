import {instanceGet} from "../configs/axios.config";


export const getCreatorsList = async (
  limit:number,
  skip:number,
  filterType:string,
  creatorName:string = "") => { 

  
  const config = {
    headers:{ 
      'Content-Type': 'application/json',
    }
  }

  let url = "";

  if(creatorName === ""){
    url = `/api/creators/lists?isCreator=true&limit=${limit}&skip=${skip}&filterType=${filterType}`;
  } else {
    url = `/api/creators/lists?isCreator=true&limit=${limit}&skip=${skip}&filterType=${filterType}&creatorName=${creatorName}`;
  }
 
  const res = await instanceGet.get(url,config);
  return res.data;
};


export const getCreator = async (creatorId:string | undefined) => {
  const config = {headers:{
      'Content-Type': 'application/json',
    }
  }

  let url = `/api/creators/?id=${creatorId}`;
  const res = await instanceGet.get(url,config);
  return res.data;
};