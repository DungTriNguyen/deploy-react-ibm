import React, { useContext } from "react";

const ThemContext = React.createContext("dark");
function ThemeContext() {
  const theme = useContext(ThemContext);
  return (
    <button style={{ background: theme === "dark" ? "#333" : "#fff" }}>
      Button
    </button>
  );
}
export default ThemeContext;
