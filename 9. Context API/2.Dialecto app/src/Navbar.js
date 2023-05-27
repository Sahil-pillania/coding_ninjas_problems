import { useContext } from "react";
import themeContext from "./themeContext";
import languageContext from "./languageContext";

export const Navbar = () => {
  // get theme and lanauge contexts here
  const { theme, setTheme } = useContext(themeContext);
  const { language } = useContext(languageContext);

  const toggleTheme = () => {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    console.log(theme);
  };

  return (
    <div className="navbar">
      <span>Dialecto</span>
      <div className="right">
        <button onClick={toggleTheme}>
          {theme == "light" ? "Dark" : "Light"} theme
        </button>
        <span>{language}</span>
      </div>
    </div>
  );
};
