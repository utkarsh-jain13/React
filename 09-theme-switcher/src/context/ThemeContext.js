import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "dark",
  setDarkTheme: () => {},
  setLightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
