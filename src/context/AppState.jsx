import { useMemo, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AppContext } from "./AppContext";
import { darkBackgrounds } from "../Utility/Themes/backgrounds";
import { DarkThemes } from "../Utility/Themes/darkThemes";
import { LightThemes } from "../Utility/Themes/lightThemes";

const LIGHT_BACKGROUND = { paper: "#fff", default: "#EEF2F6" };

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
      : LightThemes.theme1
  );

  const toggleColorMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("mode", newMode);
    // change theme according to mode
    changeTheme(themeColors);
  };

  const changeTheme = (aTheme) => {
    let chosenTheme;
    if (mode === "light") {
      chosenTheme = LightThemes[aTheme.name];
    } else {
      chosenTheme = DarkThemes[aTheme.name];
    }
    localStorage.setItem("theme", JSON.stringify(chosenTheme));
    setThemeColors(chosenTheme);
    setBackground(darkBackgrounds[aTheme.name]);
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                ...themeColors,
                background: LIGHT_BACKGROUND,
              }
            : {
                ...themeColors,
                background: background,
              }),
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: "none",
              },
            },
          },
          MuiTab: {
            styleOverrides: {
              root: {
                textTransform: "none",
              },
            },
          },
          MuiCardContent: {
            styleOverrides: {
              root: {
                "&:last-child": {
                  paddingBottom: 8,
                },
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
      <ThemeProvider theme={theme}>
        {props.children}
      
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default AppState;
