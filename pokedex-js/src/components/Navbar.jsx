import { Link, useNavigate } from "react-router-dom"
import style from "./Navbar.module.css"
import {BiSearchAlt2} from 'react-icons/bi'
import { useState } from "react";

export function Navbar () {

    const [search , setSearch] = useState(" ");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) return;
        navigate(`/search?q=${search}`);
        setSearch("");
    }
    return (
        <nav className={style.navigation}>
            <h2>
             <Link to="/">Pokedex</Link>
            </h2>
            <form onSubmit={handleSubmit} className={style.search}>
                <input 
                type="text" 
                placeholder="Procure um Pokemon"
                onChange={(e) => setSearch(e.target.value)}
                value={search} />
                <button type="submit">
                <BiSearchAlt2/>
                </button>
            </form>
        </nav>
    )
}
export default Navbar