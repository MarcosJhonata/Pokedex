import { useState, useEffect } from "react"
import axios from "axios";
import style from "./Pokemon.module.css";

export function Pokemon ({data}) {

 const [details,setDetails] = useState(null);
 useEffect(() => {
    axios.get(data.url)
    .then((response) => setDetails(response.data));
},[]);

    if(details===null){
        return <div>-</div>
    }
      return (
         <div className={style.card} >        
                <img src={details.sprites.front_default} alt="" />
                <b>{details.name} </b> 
                EXP {details.base_experience}                  
        </div>
      ) ;
  
};
export default Pokemon