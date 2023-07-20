import {
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  InputAdornment,
  List,
  ListItemButton,
  OutlinedInput,
  Popover,
  Slide,
  Stack,
  Switch,
  Typography,
  useMediaQuery,
  Icon,
} from "@mui/material";
import { useContext, useMemo, useState } from "react";
import ButtonWithIcon from "../../components/ButtonWithIcon";
import logo_user from "../../assets/farnood_lotfali.jpg";
import { useTheme } from "@emotion/react";
import { AppContext } from "../../context/AppContext";

import {
  TbSettings,
  TbUser,
  TbLogout,
  TbMenu2,
  TbBell,
  TbLanguage,
  TbX,
  TbAccessPoint,
  TbDotsVertical,
  TbSearch,
  TbAdjustmentsHorizontal,
} from "react-icons/tb";
import { HEADER_MIN_HEIGHT } from "./constant";


const Header = () => {
  const theme = useTheme();
  const { setDrawer, drawer, showDrawer, toggleShowDrawer } =
    useContext(AppContext);
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const [showSearch, setShowSearch] = useState(false);

  const toggleShowSearch = () => {
    setShowSearch((prev) => !prev);
  };

  const SearchBtn = useMemo(
    () => (
      <OutlinedInput
        fullWidth
        startAdornment={
          <InputAdornment position="start">
            <Icon
              sx={{
                color: (theme) => theme.palette.grey[500],
                fontSize: 16,
              }}
            >
              <TbSearch />
            </Icon>
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            <ButtonWithIcon
              Icon={TbAdjustmentsHorizontal}
              color={"secondary"}
            />
            {!matches && (
              <ButtonWithIcon
                Icon={TbX}
                sx={{ ml: 1 }}
                color={"error"}
                onClick={toggleShowSearch}
              />
            )}
          </InputAdornment>
        }
      />
    ),
    [showSearch, matches]
  );

  return (
    <AppBar
      sx={{
        bgcolor: "background.paper",
        color: "text.primary",
        px: { md: 3, xs: 1 },
        py: 1.5,
        minHeight: HEADER_MIN_HEIGHT,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        gap: 2,
      }}
      elevation={0}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        width={{ md: 228, xs: "auto" }}
        spacing={2}
      >
        {matches && <Box sx={{}}>berry</Box>}

        <ButtonWithIcon
          Icon={TbMenu2}
          color={"secondary"}
          onClick={toggleShowDrawer}
        />
      </Stack>
      {matches && (
        <Box
          sx={{
            width: { lg: 434, md: 250, xs: "100%" },
          }}
        >
          {SearchBtn}
        </Box>
      )}
      {!matches && (
        <Box>
          <ButtonWithIcon
            Icon={TbSearch}
            color={"secondary"}
            onClick={toggleShowSearch}
          />
          <Slide direction="right" in={showSearch}>
            <Box
              sx={{
                bgcolor: "background.paper",
                position: "fixed",
                left: 0,
                top: 0,
                right: 0,
                zIndex: 1,
                padding: 1.5,
              }}
            >
              {SearchBtn}
            </Box>
          </Slide>
        </Box>
      )}
      <Box flexGrow={1} />
      {matches && (
        <>
          <ButtonWithIcon Icon={TbAccessPoint} color={"secondary"} />
          <ButtonWithIcon Icon={TbBell} color={"warning"} />
          <ButtonWithIcon Icon={TbLanguage} color={"primary"} />
        </>
      )}

      <ProfileMenu />
      {!matches && <MoreActions />}
    </AppBar>
  );
};

const MoreActions = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  return (
    <>
      <ButtonWithIcon
        Icon={TbDotsVertical}
        color={"primary"}
        onClick={handleClick}
      />

      <Popover
        anchorReference="anchorPosition"
        open={open}
        anchorPosition={{ top: HEADER_MIN_HEIGHT + 24, left: 0 }}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          sx: {
            boxShadow: 2,
            width: "100%",
            maxWidth: "100%",
            p: 2,
            left: "0 !important",
            right: "0 !important",
            borderRadius: 0,
            borderTop: "1px solid",
          },
        }}
        elevation={0}
      >
        <Stack direction="row" spacing={1.5}>
          <ButtonWithIcon Icon={TbAccessPoint} color={"secondary"} />
          <ButtonWithIcon Icon={TbBell} color={"warning"} />
          <ButtonWithIcon Icon={TbLanguage} color={"primary"} />
        </Stack>
      </Popover>
    </>
  );
};

const ProfileMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Stack
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#00000055" : `primary.light`,
          color: `primary.main`,
          cursor: "pointer",
          transition: "all .3s",
          alignItems: "center",
          py: 1,
          px: 2,
          borderRadius: 31,
          ":hover": {
            bgcolor: `primary.main`,
            color: `primary.light`,
          },
        }}
        spacing={1.5}
        direction="row"
        onClick={handleClick}
        id={open ? "profile-menu-popover" : undefined}
      >
        <Avatar
          sx={{
            ".MuiAvatar-img": {
              objectFit: "fill",
            },
            width: 34,
            height: 34,
          }}
          src={logo_user}
          alt="logo"
        />
        <TbSettings fontSize="23" />
      </Stack>

      <Popover
        id={open ? "profile-menu-popover" : undefined}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          sx: {
            boxShadow: 2,
            width: 290,
            p: 2,
          },
        }}
      >
        <Stack direction="row" spacing={0.5}>
          <Box lineHeight={1}>
            <Typography variant="subtitle1" fontWeight={600}>
              Good Morning,
            </Typography>

            <Typography variant="caption" color="grey.500">
              Project Admin
            </Typography>
          </Box>
          <Typography variant="subtitle1">Farnood Lotfali</Typography>
        </Stack>

        <Divider sx={{ my: 1 }} />
        <Box
          sx={{
            height: "100%",
            maxHeight: "calc(100vh - 250px)",
            overflowY: "scroll",
          }}
        >
          <Card
            sx={{
              position: "relative",
              overflow: "hidden",
              boxShadow: "none",
              borderRadius: 2,
              my: 2,
              bgcolor: (theme) =>
                theme.palette.mode === "dark"
                  ? "background.default"
                  : "warning.light",
              p: 2,
              display: "grid",
              gap: 1,
              ":before": {
                content: '""',
                position: "absolute",
                width: 200,
                height: 200,
                border: (theme) => `3px solid ${theme.palette.warning.main}`,
                borderRadius: "50%",
                top: 98,
                right: -75,
              },
              ":after": {
                content: '""',
                position: "absolute",
                width: 200,
                height: 200,
                border: (theme) => `19px solid ${theme.palette.warning.main}`,
                borderRadius: "50%",
                top: 35,
                right: -172,
              },
            }}
          >
            <Typography variant="caption" fontWeight={600}>
              Upgrade your plan
            </Typography>
            <Typography fontSize={10} color="grey.500">
              70% discount for 1 years <br /> subscriptions.
            </Typography>
            <Button
              variant="contained"
              color="warning"
              sx={{
                width: "fit-content",
                fontSize: 12,
                fontWeight: 500,
              }}
            >
              Go Premium
            </Button>
          </Card>
          <Divider sx={{ my: 1 }} />
          <Card
            sx={{
              position: "relative",
              overflow: "hidden",
              boxShadow: "none",
              borderRadius: 2,
              my: 2,
              bgcolor: (theme) =>
                theme.palette.mode === "dark"
                  ? "background.default"
                  : "primary.light",
              p: 2,
              display: "grid",
              gap: 1,
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="caption">Start DND Mode</Typography>
              <Switch color="primary" defaultChecked size="small" />
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="caption">Allow Notifications</Typography>
              <Switch color="primary" size="small" />
            </Stack>
          </Card>
          <Divider sx={{ my: 1 }} />
          <List>
            {[
              {
                text: "Account settings",
                icon: TbSettings,
              },
              {
                text: "Social Profile",
                icon: TbUser,
              },
              {
                text: "Logout",
                icon: TbLogout,
              },
            ].map((item) => {
              return (
                <ListItemButton
                  key={item.text}
                  sx={{
                    borderRadius: 2,
                    fontSize: 12,
                    display: "flex",
                    gap: 2,
                    color: "grey.400",
                    ":hover": {
                      bgcolor: (theme) => `${theme.palette.secondary.main}20`,
                      "& .icon": {
                        color: "secondary.main",
                      },
                    },
                  }}
                >
                  <item.icon className="icon" fontSize="16" />
                  <Typography fontSize="inherit">{item.text}</Typography>
                </ListItemButton>
              );
            })}
          </List>
        </Box>
      </Popover>
    </>
  );
};

export default Header;
