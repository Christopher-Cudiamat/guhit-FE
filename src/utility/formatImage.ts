
//FORMAT IMAGE URL TO BASE64 IMAGE     
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

//FORMAT IMAGE URL TO IMAGE FILE TYPE
export const formatToImageFile = async(url:string,callback:any) => {
    let response = await fetch(url);
    let data = await response.blob();
    let metadata = {
      type: 'image/jpeg'
    };
    let file = new File([data], "test.jpg", metadata);
    console.log("FILEEEEEEE",file)
    callback(file);

    // ... do something with the file or return it
}
