import { Box, Button, IconButton, Stack } from "@mui/material";
import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { allAppThemes } from "../../Utility/utils";
import { useTheme } from "@mui/material/styles";
import { AppContext } from "../../context/AppContext";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const PanelLayout = () => {
  const theme = useTheme();
  const { toggleColorMode, changeTheme } = useContext(AppContext);
  return (
    <div style={{ height: "100vh" }} className="App">
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.paper",
          color: "text.primary",
          borderRadius: 1,
          py: 3,
        }}
      >
        {" "}
        {theme.palette.mode} mode
        <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
        <Button color="primary" variant="contained">
          primary
        </Button>
      </Box>

      <Stack py={5} spacing={3} direction={"row"} bgcolor={"lightgreen"}>
        {Object.entries(allAppThemes).map((theme) => {
          return (
            <Button
              key={theme[0]}
              sx={{
                width: 70,
                height: 70,
                background: `linear-gradient(-45deg, ${theme[1].primary.main} 50%, ${theme[1].secondary.main} 50%)`,
              }}
              color="inherit"
              variant="contained"
              onClick={() => changeTheme(theme[1])}
            >
              {theme[0]}
            </Button>
          );
        })}
      </Stack>
      <Outlet />
      {/* <Test /> */}
    </div>
  );
};

export default PanelLayout;
