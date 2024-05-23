import { Link } from "react-router-dom"
import style from "./Navbar.module.css"
import {BiSearchAlt2} from 'react-icons/bi'

export function Navbar () {
    return (
        <nav className={style.navigation}>
            <h2>
             <Link to="/">Pokedex</Link>
            </h2>
            <form className={style.search}>
                <input type="text" placeholder="Procure um Pokemon" />
                <button type="submit">
                <BiSearchAlt2/>
                </button>
            </form>
        </nav>
    )
}
export default Navbar