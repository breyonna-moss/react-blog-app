import React, { useContext } from "react";
import '../App.css';
import { ThemeContext } from "./ThemeContext";

function ThemeSwitcher(){
    const {theme, toggleTheme} = useContext(ThemeContext);
    return(
        <div className="theme-section">
            <button onClick={toggleTheme} className="theme-btn">Toggle Theme</button>
            <p className="theme-text">The current theme is: <b>{theme}</b></p>
        </div>

    )
}

export default ThemeSwitcher