import {
  AppBar,
  Avatar,
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Popover,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ButtonWithIcon from "../../components/ButtonWithIcon";
import TranslateRoundedIcon from "@mui/icons-material/TranslateRounded";
import WifiTetheringRoundedIcon from "@mui/icons-material/WifiTetheringRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import logo_user from "../../assets/farnood_lotfali.jpg";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
const Header = () => {
  return (
    <AppBar
      sx={{
        bgcolor: "background.paper",
        color: "text.primary",
        px: 3,
        py: 1.5,
        minHeight: 50,
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
        <Box>berry</Box>

        <ButtonWithIcon Icon={MenuRoundedIcon} color={"secondary"} />
      </Stack>
      <Box sx={{ width: { lg: 434, md: 250, xs: "100%" } }}>
        <OutlinedInput
          fullWidth
          startAdornment={
            <InputAdornment position="start">
              <SearchRoundedIcon
                sx={{
                  color: (theme) => theme.palette.grey[500],
                }}
              />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <ButtonWithIcon Icon={TuneRoundedIcon} color={"secondary"} />
            </InputAdornment>
          }
        />
      </Box>
      <Box flexGrow={1} />

      <ButtonWithIcon Icon={WifiTetheringRoundedIcon} color={"secondary"} />
      <ButtonWithIcon Icon={NotificationsRoundedIcon} color={"warning"} />
      <ButtonWithIcon Icon={TranslateRoundedIcon} color={"primary"} />
      <ProfileMenu />
    </AppBar>
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
        id={open ? "simple-popover" : undefined}
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
        <SettingsOutlinedIcon fontSize="medium" />
      </Stack>

      <Popover
        id={open ? "simple-popover" : undefined}
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

            <Typography variant="caption" color="grey.500" >
              Project Admin
            </Typography>
          </Box>
          <Typography variant="subtitle1">Farnood Lotfali</Typography>
        </Stack>
      </Popover>
    </>
  );
};

export default Header;
