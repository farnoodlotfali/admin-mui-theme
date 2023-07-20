import { Box, Button, IconButton, Stack } from "@mui/material";
import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";

import { useTheme } from "@mui/material/styles";
import { AppContext } from "../../context/AppContext";

import {
  TbBrightnessUp,
  TbMoon,
  TbDashboard,
  TbDeviceAnalytics,
  TbUserCheck,
} from "react-icons/tb";
import { LightThemes } from "../../Utility/Themes/lightThemes";
import Header from "./Header";
import Drawer, {
  DRAWER_TRANSITION,
  DRAWER_WIDTH,
  DRAWER_WIDTH_CLOSE,
} from "./constant";

const PanelLayout = () => {
  const theme = useTheme();
  const { toggleColorMode, changeTheme, showDrawer } = useContext(AppContext);

  return (
    <Box
      sx={{
        bgcolor: "background.default",
        p: 3,
        color: "text.primary",
        display: "flex",
        justifyContent: "flex-end",
      }}
      className="App"
    >
      <Drawer
        menus={[
          {
            title: "Dashboard",
            id: 10001,
            items: [
              {
                id: 1,
                text: "Default",
                icon: TbDashboard,
                routeName: "/default",
              },

              {
                id: 2,
                text: "Analytics",
                icon: TbDeviceAnalytics,
                routeName: "/analytics",
              },
            ],
          },
          {
            title: "Application",
            id: 10002,
            items: [
              {
                id: 3,
                text: "Users",
                icon: TbUserCheck,
                routeName: "null",
                children: [
                  {
                    text: "Social Profile",
                    icon: null,
                    routeName: "/profile",
                  },
                  {
                    text: "Account Profile",
                    icon: null,
                    routeName: "/x",
                  },
                ],
              },
            ],
          },

          // {
          //   id: 4,
          //   text: "عملیات",
          //   icon: TbMoon,
          //   routeName: "null",
          //   children: [
          //     {
          //       text: "خانه",
          //       icon: null,
          //       routeName: "/",
          //     },
          //     {
          //       text: "تست",
          //       icon: null,
          //       routeName: "/test",
          //     },
          //   ],
          // },
        ]}
        /** */
      />
      <Box
        sx={{
          transition: DRAWER_TRANSITION,
          width: {
            md: showDrawer
              ? `calc(100% - ${DRAWER_WIDTH}px)`
              : `calc(100% - ${DRAWER_WIDTH_CLOSE}px)`,
            xs: "100%",
          },
        }}
      >
        <Header />
        <Box mt={8} sx={{ minHeight: "100vh" }}>
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
            {theme.palette.mode} mode
            <IconButton
              sx={{ ml: 1 }}
              onClick={toggleColorMode}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? <TbBrightnessUp /> : <TbMoon />}
            </IconButton>
            <Button color="primary" variant="contained">
              primary
            </Button>
          </Box>

          <Stack py={5} spacing={3} direction={"row"} bgcolor={"lightgreen"}>
            {Object.entries(LightThemes).map((theme) => {
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
        </Box>
      </Box>
      {/* <Test /> */}
    </Box>
  );
};

export default PanelLayout;
