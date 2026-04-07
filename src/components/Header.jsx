import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

function Header() {
  return (
    <header>
      <h1><b>My Blog</b></h1>
      <nav>
        <ul className="navigation">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/settings">Settings</Link></li>
          <li><ThemeSwitcher /></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;