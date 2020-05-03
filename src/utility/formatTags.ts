

export const formatTags = (e:any) => {

  //this function will disable space and hashtag key
 
  // e = e || window.event;
  var key = e.which || e.keyCode; // keyCode detection

  
  if(e.keyCode === 35 || e.keyCode === 51 || e.keyCode === 32){ 
    // entered key is a number
    return e.preventDefault();

  } else {
    return true;
  }


};
