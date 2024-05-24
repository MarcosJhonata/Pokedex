import { useEffect , useState } from "react";
import {useSearchParams} from "react-router-dom";
import Pokemon from "../components/Pokemon";
import style from "./Home.module.css"
import axios from "axios";

export function Search () {
  const [searchParams] = useSearchParams();
  const [pokemon,setPokemon] = useState([]);
  const query = searchParams.get("q");

  useEffect(() => {
      axios.get('https://pokeapi.co/api/v2/pokemon/name')
      .then((response) => setPokemon (response.name.results))
  },[]);   

    return (
      <div className={style.container}>
        <h2>Resultados para: <span>{query}</span></h2>
             {pokemon.map((item) => (
            <Pokemon key={item.data} data={item}/>
        ))}      
        </div> 
     ) ;
}
export default Search