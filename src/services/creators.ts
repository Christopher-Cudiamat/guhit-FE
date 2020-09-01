import {instanceGet} from "../configs/axios.config";


export const getCreatorsList = async () => {
  const config = {
    headers:{
      'Content-Type': 'application/json',
    }
  }

  let url = '/api/creators/lists';
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