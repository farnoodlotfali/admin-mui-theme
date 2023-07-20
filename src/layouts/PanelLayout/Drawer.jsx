import {
  Box,
  Collapse,
  Divider,
  Icon,
  Paper,
  Stack,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Fragment, useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { TbChevronUp, TbCircleFilled } from "react-icons/tb";
import { useTheme } from "@emotion/react";
import { DRAWER_TRANSITION, DRAWER_WIDTH, DRAWER_WIDTH_CLOSE } from "./constant";


const Drawer = ({ menus }) => {
  const theme = useTheme();
  const { setDrawer, drawer, showDrawer } = useContext(AppContext);
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const { pathname } = useLocation();

  const [openedItems, setOpenedItems] = useState(drawer || []);

  const handleToggleCollapse = (index) => {
    if (openedItems.includes(index)) {
      setOpenedItems((prev) => prev.filter((item) => item !== index));
    } else {
      setOpenedItems((prev) => [...prev, index]);
    }
  };

  const renderItems = () => {
    return menus.map((menu) => {
      return (
        <Fragment key={menu.id}>
          {showDrawer && (
            <Typography variant="subtitle2" mb={1.5} fontWeight={500}>
              {menu.title}
            </Typography>
          )}
          {menu.items.map((item) => {
            const isActive = pathname.startsWith(item.routeName);
            const isOpen = openedItems.includes(menu.id + "" + item.id);

            const button = (
              <Tooltip
                title={
                  <Box>
                    <ListLinks links={item.children} isTooltip={true} />
                  </Box>
                }
                placement="right"
                disableHoverListener={matches || showDrawer || !item.children}
                componentsProps={{
                  tooltip: {
                    sx: {
                      backgroundColor: (theme) =>
                        theme.palette.background.paper,
                      color: (theme) => theme.palette.text.primary,
                      boxShadow: (theme) => theme.shadows[3],
                      width: 180,
                      border: "1px solid #ffffff30",
                    },
                  },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    py: showDrawer ? 1.75 : 1.5,
                    px: showDrawer ? 2.5 : 1.5,
                    borderRadius: 2,
                    justifyContent: "space-between",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    alignItems: "end",
                    display: "flex",
                    bgcolor: (theme) =>
                      isOpen || isActive
                        ? `${theme.palette.secondary.main}22`
                        : "inherit",
                    cursor: "pointer",
                    color: (theme) =>
                      isOpen || isActive
                        ? "secondary.main"
                        : theme.palette.mode === "dark"
                        ? "grey.400"
                        : "grey.700",
                    transition: "all .3s",
                    ":hover": {
                      bgcolor: (theme) => `${theme.palette.secondary.main}30`,
                      "& .icon-chevron": {
                        transition: "none",
                        color: "secondary.main",
                      },
                      "& .menu-text": {
                        transition: "none",
                        color: "secondary.main",
                      },
                    },
                  }}
                  onClick={() =>
                    item.children &&
                    handleToggleCollapse(menu.id + "" + item.id)
                  }
                >
                  <Icon sx={{ fontSize: showDrawer ? 20 : 24 }}>
                    <item.icon style={{ strokeWidth: 1.5 }} />
                  </Icon>
                  <Typography
                    variant="body2"
                    sx={{
                      textAlign: "left",
                      ml: 1.75,
                      flexGrow: 1,
                      lineHeight: 1,
                    }}
                    className="menu-text"
                  >
                    {item.text}
                  </Typography>
                  {item.children && (
                    <Icon
                      sx={{
                        fontSize: "15px",
                        transition: "all 0.5s",
                        transform: isOpen && "rotate(180deg)",
                      }}
                      className="icon-chevron"
                    >
                      <TbChevronUp />
                    </Icon>
                  )}
                </Box>
              </Tooltip>
            );

            return (
              <Box key={item.id}>
                {!item.children ? (
                  <Link to={item.routeName}>{button}</Link>
                ) : (
                  button
                )}

                {item.children && (
                  <Collapse
                    in={showDrawer && isOpen}
                    sx={{
                      mt: 0,
                      ml: 2,
                      borderLeftWidth: 1,
                      borderLeftStyle: "solid",
                      borderLeftColor: (theme) =>
                        theme.palette.mode === "dark" ? "grey.500" : "grey.400",
                    }}
                  >
                    <ListLinks links={item.children} />
                  </Collapse>
                )}
              </Box>
            );
          })}
          {showDrawer && <Divider sx={{ py: 0.5 }} />}
        </Fragment>
      );
    });
  };

  useEffect(() => {
    setDrawer(openedItems);
  }, [openedItems]);

  return (
    <Paper
      sx={{
        width: {
          md: showDrawer ? DRAWER_WIDTH : DRAWER_WIDTH_CLOSE,
          xs: showDrawer ? DRAWER_WIDTH : 0,
        },
        left: 0,
        height: "100vh",
        transition: DRAWER_TRANSITION,
        position: "fixed",
        boxShadow: 1,
        borderRadius: "0",
        overflowY: "auto",
        overflowX: "hidden",
        zIndex: 15,
        color: "text.primary",
      }}
      elevation={0}
    >
      <Stack direction="row" sx={{ p: 2 }}>
        <Box
          sx={{
            marginX: "auto",
            bgcolor: "white",
            borderRadius: 1,
            p: 1,
          }}
        >
          {/* <img
            style={{
              width: "100%",
              height: "100%",
            }}
            src={truck_text}
            alt="logo"
          /> */}
        </Box>
      </Stack>

      <Stack p={showDrawer ? 2 : 1.5} spacing={1}>
        {renderItems()}
      </Stack>
    </Paper>
  );
};

const ListLinks = ({ links, isTooltip = false }) => {
  const { pathname } = useLocation();

  return (
    <Stack spacing={1} mt={isTooltip ? 0 : 1}>
      {links?.map((child) => {
        const isActive = pathname === child.routeName;

        return (
          <Link key={child.routeName} to={child.routeName}>
            <Box
              sx={{
                width: "100%",
                pl: isTooltip ? 0 : 1,
                py: 0.75,
                color: (theme) =>
                  isActive
                    ? "secondary.main"
                    : theme.palette.mode === "dark"
                    ? "grey.400"
                    : "grey.700",
                ":hover": {
                  "& .child-text": {
                    color: "secondary.main",
                  },
                },
              }}
            >
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  width: "100%",
                  alignItems: "center",
                  px: isTooltip ? 0 : 1,
                  justifyContent: "space-between",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                <Icon
                  sx={{
                    width: "fit-content",
                    height: "fit-content",
                    fontSize: "6px",
                    mr: isTooltip ? 0 : 1,
                  }}
                >
                  <TbCircleFilled />
                </Icon>
                <Typography
                  variant="body2"
                  sx={{ textAlign: "left", ml: isTooltip ? 0 : 1, flexGrow: 1 }}
                  className="child-text"
                >
                  {child.text}
                </Typography>
              </Stack>
            </Box>
          </Link>
        );
      })}
    </Stack>
  );
};

export default Drawer;
