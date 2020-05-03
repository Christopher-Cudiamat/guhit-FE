import {instanceGet} from "../configs/axios.config";

interface getComics {
  email?: string,
  title?: string,
  summary?: string,
}

export const getComics = async () => {

    let url = "https://guhit-app.firebaseio.com/publish.json";
   
    const res = await instanceGet.get(url);
    return res.data;
};
