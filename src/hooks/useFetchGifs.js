import { useEffect, useState } from "react";
import { GetGifs, GetStickers } from "../helpers/GetGifs-Stickers";

export const useFetchGifs = (category,opcion) => {
    
    const [images, setimages] = useState([]);
    const [isLoading, setisLoading] = useState(true);

      const getImages =async()=>{
        let NewImages=null;
        if(opcion=="gifs"){
          NewImages= await GetGifs(category);
        }
         else{
          NewImages= await GetStickers(category);
         }
         setimages(NewImages);
         setisLoading(false);
      }
      useEffect(()=>{
         getImages();
      },[])


    return{
        images,
        isLoading
    }
}
