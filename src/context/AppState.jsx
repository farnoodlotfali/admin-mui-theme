import { useMemo, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AppContext } from "./AppContext";
import { allAppThemes, darkBackgrounds } from "../Utility/utils";

const LIGHT_BACKGROUND = { paper: "#fff", default: "#fff" };

const AppState = (props) => {
  const [mode, setMode] = useState(localStorage.getItem("mode") ?? "light");
  const [background, setBackground] = useState(
    localStorage.getItem("theme")
      ? darkBackgrounds[JSON.parse(localStorage.getItem("theme")).name]
      : darkBackgrounds.theme1
  );
  const [themeColors, setThemeColors] = useState(
    localStorage.getItem("theme")
      ? JSON.parse(localStorage.getItem("theme"))
      : allAppThemes.theme1
  );

  const toggleColorMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("mode", newMode);
  };

  const changeTheme = (aTheme) => {
    localStorage.setItem("theme", JSON.stringify(aTheme));
    setThemeColors(aTheme);
    setBackground(darkBackgrounds[aTheme.name]);
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? themeColors
            : { ...themeColors, background: background }),
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: "none",
              },
            },
          },
        },
      }),
    [mode, themeColors]
  );
  return (
    <AppContext.Provider
      value={{ toggleColorMode, changeTheme, themeColors, mode }}
    >
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </AppContext.Provider>
  );
};

export default AppState;
