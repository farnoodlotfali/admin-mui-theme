import {
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import logo_user from "../../assets/farnood_lotfali.jpg";
import react_background from "../../assets/react_background.png";
import Diversity2RoundedIcon from "@mui/icons-material/Diversity2Rounded";
import FilterDramaRoundedIcon from "@mui/icons-material/FilterDramaRounded";
import { Fragment, useState } from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import CollectionsIcon from "@mui/icons-material/Collections";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import PortraitIcon from "@mui/icons-material/Portrait";
import GroupIcon from "@mui/icons-material/Group";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import PeopleOutlineRoundedIcon from "@mui/icons-material/PeopleOutlineRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import ChatBubbleTwoToneIcon from "@mui/icons-material/ChatBubbleTwoTone";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import CameraAltRoundedIcon from "@mui/icons-material/CameraAltRounded";
import ThumbUpTwoToneIcon from "@mui/icons-material/ThumbUpTwoTone";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import { Link } from "react-router-dom";

const PROFILE_TABS = [
  { title: "Profile", icon: PortraitIcon },
  { title: "Followers", icon: GroupIcon },
  { title: "Friends", icon: Diversity1Icon, count: 100 },
  { title: "Gallery", icon: CollectionsIcon },
  { title: "Friend Request", icon: GroupAddIcon },
];

const Profile = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <>
      <Paper elevation={0} sx={{ mb: 3 }}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Typography component={Link} to="/">
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          </Typography>
          <Typography
            sx={{
              cursor: "pointer",
              ":hover": {
                textDecoration: "underline !important",
              },
              color: "red",
            }}
            component={Link}
            to="/"
          >
            <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Core1
          </Typography>
          <Typography
            sx={{
              cursor: "pointer",
              ":hover": {
                textDecoration: "underline !important",
              },
              color: "red",
            }}
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Breadcrumb
          </Typography>
        </Breadcrumbs>
      </Paper>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card elevation={0}>
            <CardContent
              sx={{
                p: 1,
                "&:last-child": {
                  paddingBottom: 0,
                },
              }}
            >
              <CardMedia
                component="img"
                image={react_background}
                alt="Paella dish"
                sx={{
                  objectFit: "fill",
                  mb: 3,
                  borderRadius: 2,
                  height: { xs: 150, sm: 220, md: 300 },
                }}
              />
              <Grid container spacing={3}>
                <Grid item xs={12} md={3}>
                  <Avatar
                    src={logo_user}
                    sx={{
                      width: { xs: 72, sm: 100, md: 140 },
                      height: { xs: 72, sm: 100, md: 140 },
                      borderRadius: 2,
                      mr: { xs: "auto", md: 0 },
                      ml: "auto",
                      mt: "-70px",
                      border: "2px solid white",
                      ".MuiAvatar-img": {
                        objectFit: "fill",
                      },
                    }}
                    variant="rounded"
                  />
                </Grid>
                <Grid item xs={12} md={9}>
                  <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={{ xs: 2, md: 0 }}
                    alignItems={{ xs: "center", md: "end" }}
                    justifyContent={"space-between"}
                  >
                    <Box>
                      <Typography
                        variant="body2"
                        component="h5"
                        sx={{ fontWeight: 500 }}
                      >
                        Farnood Lotfali
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: 12,
                          color: "grey.500",
                        }}
                      >
                        React Developer
                      </Typography>
                    </Box>
                    <Stack
                      direction={"row"}
                      gap={1}
                      flexWrap="wrap"
                      justifyContent="center"
                    >
                      <Button
                        variant="outlined"
                        sx={{
                          minHeight: 35,
                        }}
                      >
                        Message
                      </Button>
                      <Button
                        variant="contained"
                        sx={{
                          minHeight: 35,
                        }}
                        startIcon={<PersonAddOutlinedIcon fontSize="small" />}
                      >
                        Send Request
                      </Button>
                    </Stack>
                  </Stack>
                  <Stack direction="row" justifyContent="end">
                    <Tabs
                      sx={{
                        height: 56,
                        display: "flex",
                      }}
                      value={value}
                      onChange={handleChange}
                      variant="scrollable"
                      scrollButtons="auto"
                      textColor="secondary"
                      indicatorColor="secondary"
                    >
                      {PROFILE_TABS.map((item, i) => {
                        return (
                          <Tab
                            label={
                              <Stack
                                direction="row"
                                spacing={1}
                                fontSize={12}
                                fontWeight={700}
                                alignItems="end"
                              >
                                <Typography
                                  fontSize="inherit"
                                  fontWeight="inherit"
                                >
                                  {item.title}
                                </Typography>
                                {item.count && (
                                  <Typography
                                    fontSize="inherit"
                                    fontWeight={600}
                                    bgcolor="secondary.light"
                                    color="secondary.main"
                                    px={0.8}
                                    borderRadius={2}
                                  >
                                    {item.count}
                                  </Typography>
                                )}
                              </Stack>
                            }
                            icon={<item.icon sx={{ fontSize: 15 }} />}
                            iconPosition="start"
                          />
                        );
                      })}
                    </Tabs>
                  </Stack>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          {/* 1 */}
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={4}>
              <Stack spacing={3}>
                <Card elevation={0} sx={{ p: 1, borderRadius: 2 }}>
                  <CardContent>
                    {SOCIAL_STATS.map((item, i) => {
                      return (
                        <Fragment key={item.title}>
                          <Stack direction="row" gap={3} flexWrap="wrap">
                            <Box
                              sx={{
                                borderRadius: 2,
                                minWidth: 48,
                                height: 48,
                                border: "1px solid",
                                borderColor: `${item.color}.main`,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                bgcolor: (theme) =>
                                  theme.palette[item.color].main + "20",
                                fontSize: 25,
                              }}
                            >
                              <item.icon
                                color={item.color}
                                fontSize="inherit"
                              />
                            </Box>
                            <Box flex={1}>
                              <Typography
                                variant="h6"
                                color={`${item.color}.main`}
                                fontWeight={700}
                              >
                                {item.count}
                              </Typography>
                              <Typography variant="body2">
                                {item.title}
                              </Typography>
                            </Box>
                            <Box alignSelf="center">
                              <IconButton>
                                <ChevronRightRoundedIcon />
                              </IconButton>
                            </Box>
                          </Stack>

                          {SOCIAL_STATS.length - 1 !== i && (
                            <Divider sx={{ my: 2, borderBottomWidth: "2px" }} />
                          )}
                        </Fragment>
                      );
                    })}
                  </CardContent>
                </Card>

                <Card elevation={0} sx={{ p: 1, borderRadius: 2 }}>
                  <CardContent>
                    <Stack spacing={1}>
                      <Typography variant="body1" fontWeight={700}>
                        About
                      </Typography>
                      <Typography variant="body2" component="p">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </Typography>
                    </Stack>
                    <Divider sx={{ my: 2, borderBottomWidth: "2px" }} />
                    <Stack spacing={1}>
                      {SOCIAL_LINKS.map((item) => {
                        return (
                          <Stack
                            direction="row"
                            spacing={1}
                            alignItems="center"
                          >
                            <item.icon color={item.color} />
                            <Typography
                              variant="subtitle2"
                              component="a"
                              target="_blank"
                              href={item.link}
                              sx={{
                                color: "inherit",
                                ":hover": {
                                  color: "primary.main",
                                },
                              }}
                            >
                              {item.link}
                            </Typography>
                          </Stack>
                        );
                      })}
                    </Stack>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <Card elevation={0} sx={{ borderRadius: 2, p: 1 }}>
                <CardContent>
                  <Box gap={3} display="flex" flexDirection="column">
                    <Grid container spacing={1} alignItems="center">
                      <Grid item>
                        <Avatar
                          sx={{
                            ".MuiAvatar-img": {
                              objectFit: "fill",
                            },
                          }}
                          src={logo_user}
                          alt="logo"
                        />
                      </Grid>
                      <Grid item xs={true}>
                        <Stack direction="row" alignItems="center">
                          <Typography>Farnood Lotfali</Typography>
                          <FiberManualRecordRoundedIcon
                            sx={{
                              fontSize: 10,
                              ml: 2,
                              mr: 1,
                              color: "grey.600",
                            }}
                          />
                          <Typography sx={{ fontSize: 12, color: "grey.500" }}>
                            now
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item>
                        <IconButton
                          size="small"
                          sx={{
                            bgcolor: "background.default",
                            ":hover": {
                              bgcolor: "secondary.800",
                            },
                          }}
                        >
                          <MoreVertRoundedIcon fontSize="inherit" />
                        </IconButton>
                      </Grid>
                    </Grid>
                    <Typography component={"p"}>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. There are many variations of passages.
                    </Typography>
                    <Grid
                      container
                      spacing={1}
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Grid item gap={2} display="flex">
                        <Button
                          variant="text"
                          startIcon={<ThumbUpTwoToneIcon color="primary" />}
                          color="inherit"
                        >
                          Likes
                        </Button>
                        <Button
                          variant="text"
                          startIcon={
                            <ChatBubbleTwoToneIcon color="secondary" />
                          }
                          color="inherit"
                        >
                          Comments
                        </Button>
                      </Grid>

                      <Grid item>
                        <IconButton>
                          <ShareOutlinedIcon fontSize="small" />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

const SOCIAL_STATS = [
  {
    count: "239k",
    title: "Friends",
    icon: PeopleOutlineRoundedIcon,
    color: "primary",
  },
  {
    count: "219k",
    title: "Followers",
    icon: Diversity2RoundedIcon,
    color: "secondary",
  },
];

const SOCIAL_LINKS = [
  {
    link: "https://www.google.com",
    color: "secondary",
    icon: PublicRoundedIcon,
  },
  {
    link: "https://www.instagram.com",
    color: "error",
    icon: CameraAltRoundedIcon,
  },
  {
    link: "https://www.facebook.com",
    color: "primary",
    icon: FacebookRoundedIcon,
  },
  {
    link: "https://www.google.com",
    color: "inherit",
    icon: FilterDramaRoundedIcon,
  },
];

export default Profile;
