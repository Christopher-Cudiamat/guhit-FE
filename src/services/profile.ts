import {instanceGet, instancePost} from "../configs/axios.config";


export const getProfile = async (token:string) => {
  // console.log(token)
  const config = {
    headers:{
      'Content-Type': 'application/json',
      'Authorization': token
    }
  }

  let url = '/api/profiles/me';
 

  const res = await instanceGet.get(url, config);
  // console.log("SECRET RESPONE",res.data);
  return res.data;
};



export const postInitProfile = async (token:string,email:any) => {
  
  console.log("PST INIT TOKEN",token);

  const config = {
    headers:{
      'Content-Type': 'application/json',
      'Authorization': token
    }
  }

  let body = {
    displayName: email
  }

  let url = '/api/profiles/init';

  const res = await instancePost.post(url,body,config);
  return res.data;
};


export const postProfile = async (token:string,data:any) => {
  // console.log("DATA",data);
  const config = {
    headers:{
      'Content-Type': 'multipart/form-data',
      'Authorization': token
    }
  }

  let url = '/api/profiles';

  const body = new FormData();
  
  body.append("profilePic", data.profilePic);
  body.append('displayName',data.displayName);
  body.append('city',data.city);
  body.append('description',data.description);
  body.append('patreon',data.patreon);
  body.append('tools',data.tools.toString());

  const res = await instancePost.post(url,body,config);
  return res.data;
};


