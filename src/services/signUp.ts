import {instancePost} from "../configs/axios.config";

interface auth{
  email?:string,
  password?:string,
}

export const signUp = async (data:auth) => {

    const config = {
      headers:{
        'Content-Type': 'application/json'
      }
    }

    let url = '/api/users/signup';
   
    let body = {
        //to ask what data we will send in BE?
        "email": data.email,
        "password": data.password,
    };

    const res = await instancePost.post(url,body,config );
    console.log("SERVICE RESPONE",res.data);
    return res.data;
};


export const signIn = async (data:auth) => {

  try {
    const config = {
      headers:{
        'Content-Type': 'application/json'
      }
    }
  
    let url = '/api/users/signin';
   
    let body = {
        //to ask what data we will send in BE?
        "email": data.email,
        "password": data.password,
    };
  
    const res = await instancePost.post(url,body,config);
    
    return res.data;
  } catch (error) {

    console.log("THE ERROR",error)
  }

};



export const signUpFacebook = async (accessToken:any) => {

  let url = "/api/users/oauth/facebook";
  let body = {
    accessToken
  }

  const res = await instancePost.post(url,body);
  console.log("FB REG RESPONSE", res);
  return res.data;
};



export const signUpGoogle = async (accessToken:any) => {
  console.log(typeof accessToken);

  try {
    const config = {
      headers:{
        'Content-Type': 'application/json'
      }
    }
  
    let url = "/api/users/oauth/google";
  
    let body = {
      access_token:accessToken
    }
  
    // let body = {
    //   access_token:"ya29.a0Ae4lvC2fGOEDpyLzQntVJZFy6ivNVCDPwi5PpDPAKfJjeMxQouVx_9IHAT6sd7iuaVLR0X4nyAgC6Vm88OpFmwDZtn2HygDUunXdKEu5RIf8cAyiHEbpIJMiq0nOMLj5B7QhN19AsBqrcxskxdTYuVpcVDQwhDgbmJU"
    // }
  
    const res = await instancePost.post(url,body,config);
    console.log("GOOGLE REG RESPONSE", res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
  
};


