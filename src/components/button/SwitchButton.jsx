import { useContext } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { ThemeContext } from "../context/ThemeContext";

function SwitchButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      className={`text-2xl p-1 ${theme === "dark" && "text-blue-700"}`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <MdOutlineDarkMode />
    </button>
  );
}

export default SwitchButton;
