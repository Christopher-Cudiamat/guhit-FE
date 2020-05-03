

export const isRequired = (value:any):boolean => {
  let result: boolean = true;
  if (value === null)
    result = false;
  if  (value != null && value.length===0)
    result =false;
  return result;
}

export const isEmpty = (value:any):boolean =>{
  let result:boolean = true;
  if(value==="")
      result = false;
  return result;
};

export const isLengthCorrect = (value:any):boolean =>{
  let result:boolean = true;
  if(value.length <= 7 )
      result = false;
  return result;
};


export const isMail = (value:string):boolean => {
  let regexp = new RegExp('([ABCDEFGHIJKLMNOPQRSTUVWXYZÇĞİÖŞÜIabcdefghijklmnopqrstuvwxyzçğiöşüı0-9@_.&\\-])*[ABCDEFGHIJKLMNOPQRSTUVWXYZÇĞİÖŞÜIabcdefghijklmnopqrstuvwxyzçğiöşüı0-9_.&\\-]+(?:\\.[ABCDEFGHIJKLMNOPQRSTUVWXYZÇĞİÖŞÜIabcdefghijklmnopqrstuvwxyzçğiöşüı0-9_.&\\-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$');
  return regexp.test(value);
};

