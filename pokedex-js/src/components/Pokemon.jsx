import { useState, useEffect } from "react"
import axios from "axios";


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
         <div >        
                <img src={details.sprites.front_default} alt="" />
                <b>{details.name} </b> 
                - EXP {details.base_experience}                   
        </div>
      ) ;
  
};
export default Pokemon