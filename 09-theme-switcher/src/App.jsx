import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import ThemeBtn from "./components/ThemeBtn/ThemeBtn";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [themeMode, setThemeMode] = useState("dark");

  const setDarkTheme = () => {
    setThemeMode("dark");
  };

  const setLightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    const htmlClasses = document.querySelector("html").classList;
    htmlClasses.remove("light", "dark");
    htmlClasses.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, setDarkTheme, setLightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
