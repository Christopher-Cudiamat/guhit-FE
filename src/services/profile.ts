import {instanceGet, instancePatch, instancePost} from "../configs/axios.config";


export const getProfile = async (token:string) => {
  const config = {
    headers:{
      'Content-Type': 'application/json',
      'Authorization': token
    }
  }

  let url = '/api/profiles/me';
 

  const res = await instanceGet.get(url, config);
  return res.data;
};


export const postInitProfile = async (token:string,email:any) => {
  
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
  console.log("TOKEN VERIFY",token);
  const config = {
    headers:{
      'Content-Type': 'multipart/form-data',
      'Authorization': token
    }
  }

  let url = '/api/profiles';

  const body = new FormData();
  
 
  body.append('displayName',data.displayName);
  body.append('city',data.city);
  body.append('description',data.description);
  body.append('patreon',data.patreon);
  body.append('tools',data.tools.toString());
  body.append("profilePic", data.profilePic);

  const res = await instancePost.post(url,body,config);
  return res.data;
};



// export const updateProfile = async (token:string,data:any) => {
//   console.log("TOKEN VERIFY",data);
//   const config = {
//     headers:{
//       'Content-Type': 'application/json',
//       'Authorization': token
//     }
//   }

//   let url = '/api/profiles/udpate';

//   const body = data;
  
//   const res = await instancePatch.patch(url,body,config);
//   return res.data;
// };

export const updateProfile = async (token:string,data:any) => {

  const config = {
    headers:{
      'Content-Type': 'multipart/form-data',
      'Authorization': token
    }
  }

  let url = '/api/profiles/update';

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
