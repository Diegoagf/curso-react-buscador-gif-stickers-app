import {useState} from 'react'
import { AddCategory,GifGrid } from './components';


export const GifExpertApp = () => {
  const [categories, setcategories] = useState([]);

  const OnAddCategory =(NewCategory) =>{
    if(categories.includes(NewCategory)) return;
    setcategories([NewCategory,...categories,]);
  }

  return (
    <>
    <h1> GifExpertApp</h1>

          <AddCategory 
              OnNewCategory={OnAddCategory}
             />
  
        { 
          categories.map(category =>
            (
              <GifGrid 
              key={category}
              category={category}
              opcion={document.getElementById("opcion").value}
              /> 
            )
          )}
    </>
  )
}
