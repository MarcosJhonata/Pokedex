
import { useEffect , useState } from "react";
import axios from "axios";
import Pokemon from "../components/Pokemon";

export function Home () {
    const [list , setList] = useState([]);
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then((response) => setList (response.data.results))
    },[]);

    return(

     <div>  
        {list.map((item) => (
        <Pokemon key={item.data} data={item}/>
        ))}      
     </div>

    )
}
export default Home