

export const trimEmail= (text:string, symbol:string) => {

  const str = text;
  const newStr = str.split(symbol).shift();
  return newStr;

};
