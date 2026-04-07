
import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

function Header(){
    return(
        <header>
            <h1><b>My Blog</b></h1>
            <nav>
                <ul className="navigation">
                    <li><Link to="/">Home</Link></li>
                    <li><a href="#">About</a></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><a href="#">Settings</a></li>
                    <li><ThemeSwitcher></ThemeSwitcher></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header