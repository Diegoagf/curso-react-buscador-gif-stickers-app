export const GetGifs= async(category) =>{
    const urlGifs = `https://api.giphy.com/v1/gifs/search?api_key=BGmqGbhlX5vXA0HsspuyXsdXK0KKeAFi&q=${category}&limit=10`;
    const resp = await fetch(urlGifs);
    const {data} = await resp.json();
 
    const gifs = data.map(img =>({
       id:img.id,
       title: img.title,
       url: img.images.downsized_medium.url
    }));

    return gifs;
   }


   export const GetStickers= async(category) =>{
  
    const urlStickers = `https://api.giphy.com/v1/stickers/search?api_key=BGmqGbhlX5vXA0HsspuyXsdXK0KKeAFi&q=${category}&limit=10`;
    const resp = await fetch(urlStickers);
    const {data} = await resp.json();
    const stickers = data.map(img =>({
       id:img.id,
       title: img.title,
       url: img.images.downsized_medium.url
    }));

    return stickers;
   }