import {instancePost} from "../configs/axios.config";

interface IAuth{
  email?:string,
  password?:string,
}

export const emailVerify = async (data:IAuth) => {
    const {email,password} = data;

    const config = {headers:{'Content-Type': 'application/json'}}
    let url = '/api/users/email-verification';
    let body = {email,password};

    const res = await instancePost.post(url,body,config );
    console.log("EMAIL VERIFICATION RESPONE",res.data);
    return res.data;
};

interface ISignUp{
  token?:string,
  verificationCode?:string,
}


export const signUp = async (data:ISignUp) => {
  console.log("serviceDATA",data)
  const {token, verificationCode} = data;

  const config = {headers:{'Content-Type': 'application/json'}}
  let url = '/api/users/signup';
  let body = {token,verificationCode};

  const res = await instancePost.post(url,body,config);
  console.log("SIGN UP RESPONE",res.data);
  return res.data;
};


export const signIn = async (data:IAuth) => {
  const {email,password} = data;
  try {
    const config = {headers:{'Content-Type': 'application/json'}}
    let url = '/api/users/signin';
    let body = {email,password};
  
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


