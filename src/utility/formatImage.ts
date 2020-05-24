
      
export const formatToDataUrl = (url:string, callback:any) => {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
      var reader = new FileReader();
      reader.onloadend = function() {
          callback(reader.result);
      }
      reader.readAsDataURL(xhr.response);
  };
  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.send();
}

// toDataUrl(profile.profilePic, function(myBase64:string) {

//   setPrevProfile(myBase64);
// });
