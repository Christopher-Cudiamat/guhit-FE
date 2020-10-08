

//Sign up and login profile validation functions
export const isRequired = (value:any):boolean => {
  let result: boolean = true;
  if (value === null) result = false;
  if  (value != null && value.length===0) result =false;
  return result;
}

export const isEmpty = (value:any):boolean =>{
  let result:boolean = true;
  if(value==="") result = false;
  return result;
};

export const isLengthCorrect = (value:any):boolean =>{
  let result:boolean = true;
  if(value.length <= 7 ) result = false;
  return result;
};


export const isMail = (value:string):boolean => {
  let regexp = new RegExp('([ABCDEFGHIJKLMNOPQRSTUVWXYZÇĞİÖŞÜIabcdefghijklmnopqrstuvwxyzçğiöşüı0-9@_.&\\-])*[ABCDEFGHIJKLMNOPQRSTUVWXYZÇĞİÖŞÜIabcdefghijklmnopqrstuvwxyzçğiöşüı0-9_.&\\-]+(?:\\.[ABCDEFGHIJKLMNOPQRSTUVWXYZÇĞİÖŞÜIabcdefghijklmnopqrstuvwxyzçğiöşüı0-9_.&\\-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$');
  return regexp.test(value);
};


//Publish and edit profile validation functions

export const isWrongImageType = (value:string):boolean => {
  let result = false;
  if(value !== "image/jpeg") result = true;
  return result;
}

export const isWrongPixelSize = (height: number, width:number,uploadType:string) => {
  if(uploadType === "profilePic"){
    if ((height < 250 || height > 300) && (width < 250 || width > 300)){
      return true;
    } else {
      return false;
    }
  }


}