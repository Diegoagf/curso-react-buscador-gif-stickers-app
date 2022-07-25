import { useState } from "react"

export const AddCategory = ({OnNewCategory}) => {
   const [InputValue, setInputValue] = useState(" ")
   const OnInputChange=(e)=>{
    setInputValue(e.target.value)
   }
   const OnSumbit= (e)=>{
    e.preventDefault();
    console.log(opcion);
    const NewInputValue = InputValue.trim()
    if(NewInputValue.length<=1) return;
   //  setcategories(categories=>[InputValue,...categories]);
    OnNewCategory(NewInputValue)
    setInputValue("");
   }
  return (
   <form onSubmit={(e)=>OnSumbit(e)}>
          <input 
             type="text" 
             placeholder="Buscar"
             value={InputValue}
        onChange={OnInputChange}
            />
       <p>

         Opcion:

            <select id="opcion">

            <option value="gifs">Gifs</option>

            <option value="stickers">Stickers</option>

         </select>
      </p>   
   </form>
  )
}
