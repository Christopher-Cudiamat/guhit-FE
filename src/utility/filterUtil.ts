

export const dateSortFilter = (arr:any[],stat:string) => {
  if(stat === "soon"){
    let newArr = arr.sort((a:any, b:any) => (Date.parse(a.date) < Date.parse(b.date)) ? -1 : 1);
    return newArr;
  } else {
    let newArr = arr.sort((a:any, b:any) => (Date.parse(a.date) > Date.parse(b.date)) ? -1 : 1);
    return newArr;
  }
}