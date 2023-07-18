import { useTheme } from "@mui/material/styles";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TextField,
  Box,
} from "@mui/material";
import MonetizationOnTwoToneIcon from "@mui/icons-material/MonetizationOnTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import Charttt from "./Charttt";
import { Fragment, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { COUNTRY_FLAGS } from "../../Utility/utils";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import SensorsIcon from "@mui/icons-material/Sensors";
import SpokeOutlinedIcon from "@mui/icons-material/SpokeOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
const Analytics = () => {
  const theme = useTheme();
  const { toggleColorMode, changeTheme } = useContext(AppContext);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
          borderRadius: 1,
          py: 3,
        }}
      >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={8}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card
                elevation={0}
                sx={{
                  flex: "1 0 auto",
                  overflow: "visible",
                }}
              >
                <CardContent
                  sx={{
                    "&:last-child": {
                      padding: 0,
                    },
                    boxShadow: 0,
                  }}
                  component={Paper}
                >
                  <Box p={4} height={"100%"}>
                    <Grid container spacing={1} alignItems="center">
                      <Grid item>
                        <Typography variant="h6" fontWeight={600}>
                          Market Share
                        </Typography>
                      </Grid>
                      <Grid item xs={true}></Grid>
                      <Grid item>
                        <TrendingDownIcon color="error" fontSize="large" />
                      </Grid>
                      <Grid item>
                        <Typography variant="h6" fontWeight={600}>
                          27, 695.65
                        </Typography>
                      </Grid>
                    </Grid>
                    <Typography variant="subtitle1" color="text.secondary">
                      Department wise monthly sales report
                    </Typography>
                    <Grid container spacing={3} alignItems="center" mt={0}>
                      {MarketShareArray.map((item, i) => {
                        return (
                          <Grid item key={i}>
                            <MarketShareItem {...item} />
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Box>
                  <Charttt />
                </CardContent>
              </Card>
            </Grid>
            {CardDataArray.map((item, i) => {
              return (
                <Grid key={i} item lg={6} xs={12}>
                  <CardData {...item} />
                </Grid>
              );
            })}
            <Grid item xs={12}>
              <Card>
                <CardHeader
                  title={
                    <Typography variant="body1" fontWeight={600}>
                      Latest Customers
                    </Typography>
                  }
                  subheader={
                    <Typography variant="caption" color={"grey.500"}>
                      September 14, 2016
                    </Typography>
                  }
                />
                <Divider />

                <Box
                  sx={{
                    height: "400px",
                    overflow: "scroll",
                  }}
                >
                  <TableContainer component={Paper}>
                    <Table
                      sx={{
                        minWidth: 650,
                      }}
                      aria-label="simple table"
                    >
                      <TableHead>
                        <TableRow>
                          {LatestCustomersHead.map((cell) => {
                            return <TableCell key={cell}>{cell}</TableCell>;
                          })}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {LatestCustomersArray.map((row, i) => (
                          <TableRow
                            key={i}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell>
                              <Box width={30}>
                                <img
                                  src={COUNTRY_FLAGS[row.country]}
                                  alt="flag"
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                  }}
                                />
                              </Box>
                            </TableCell>
                            <TableCell>{row.country}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.average}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>

                <Divider />
                <CardActions
                  sx={{
                    justifyContent: "flex-end",
                  }}
                >
                  <Button>
                    <Typography
                      variant="caption"
                      color="primary.200"
                      fontWeight={600}
                    >
                      View all Latest Customers
                    </Typography>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card>
                <Grid container spacing={3} m={0}>
                  {SmallInfoArray.map((info, i) => {
                    return (
                      <Grid
                        item
                        key={i}
                        xs={12}
                        sm={6}
                        p={3}
                        sx={{
                          borderBottom: i % 2 === i ? "1px solid" : "none",
                          borderRight: i % 2 === 0 ? "1px solid" : "none",
                          borderColor: "grey.300",
                        }}
                      >
                        <Grid container spacing={1}>
                          <Grid item>
                            <Box
                              padding={1.5}
                              borderRadius={3}
                              bgcolor={`primary.light`}
                            >
                              <Typography
                                display="flex"
                                color={`secondary.main`}
                              >
                                <info.icon color="inherit" fontSize="medium" />
                              </Typography>
                            </Box>
                          </Grid>
                          <Grid
                            item
                            xs={true}
                            textAlign={"center"}
                            alignSelf="center"
                          >
                            <Typography sx={{ fontSize: 13 }} fontWeight={600}>
                              {info.numb}
                            </Typography>
                            <Typography
                              sx={{ fontSize: 10, color: "grey.500" }}
                            >
                              {info.text}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    );
                  })}
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardHeader
                  title={
                    <Typography variant="body1" fontWeight={600}>
                      Total Revenue
                    </Typography>
                  }
                />
                <Divider />

                <Box
                  sx={{
                    height: "370px",
                    overflow: "scroll",
                  }}
                >
                  <Stack>
                    {CoinsArray.map((coin, i) => {
                      return (
                        <Fragment key={i}>
                          <Button color="secondary">
                            <Typography>
                              {coin.increase ? (
                                <ArrowDropUpRoundedIcon color={"success"} />
                              ) : (
                                <ArrowDropDownRoundedIcon color={"error"} />
                              )}
                            </Typography>
                            <Stack
                              direction="row"
                              width="100%"
                              spacing={1}
                              justifyContent="space-between"
                              mx={2}
                            >
                              <Typography
                                textTransform={"none"}
                                fontSize="10px"
                                color="text.primary"
                              >
                                {coin.name}
                              </Typography>
                              <Typography
                                fontSize="13px"
                                color={
                                  coin.increase ? "success.main" : "error.main"
                                }
                              >
                                {coin.increase ? "+ " : "- "}${coin.price}
                              </Typography>
                            </Stack>
                          </Button>
                          <Divider />
                        </Fragment>
                      );
                    })}
                  </Stack>
                </Box>
              </Card>
            </Grid>

            {CardReviewDataArray.map((card, i) => {
              return (
                <Grid item xs={12} key={i}>
                  <CardReviewData {...card} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Analytics;

const CardReviewDataArray = [
  {
    topText: "1,658",
    bottomText: "Daily user",
    bgcolor: "secondary.main",
    Icon: AccountCircleTwoToneIcon,
  },
  {
    topText: "1K",
    bottomText: "Daily page view",
    bgcolor: "primary.main",
    Icon: DescriptionOutlinedIcon,
  },
];

const CardReviewData = ({ topText, bottomText, Icon, bgcolor }) => {
  return (
    <Card elevation={0} sx={{ flex: "1 0 auto", bgcolor: bgcolor }}>
      <CardContent
        sx={{
          position: "relative",
        }}
      >
        <Typography
          variant="body2"
          color="white"
          sx={{
            position: "absolute",
            left: "-19px",
            bottom: "-29px",
            transform: "rotate(25deg)",
          }}
        >
          {
            <Icon
              fontSize="inherit"
              sx={{ height: 100, width: 100, opacity: 0.5 }}
            />
          }
        </Typography>
        <Stack textAlign={"center"}>
          <Typography variant="h6" color="white" fontWeight={600}>
            {topText}
          </Typography>

          <Typography color="white">{bottomText}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

const CoinsArray = [
  {
    name: "Bitcoin",
    price: "145.85",
    increase: true,
  },
  {
    name: "Ethereum",
    price: "4.33",
    increase: true,
  },
  {
    name: "Ripple",
    price: "15.315",
    increase: false,
  },
  {
    name: "FarnoodCoin",
    price: "43145.435",
    increase: true,
  },
  {
    name: "Neo",
    price: "4.05",
    increase: false,
  },
  {
    name: "Shiba",
    price: "245.85",
    increase: true,
  },
  {
    name: "TRX",
    price: "105.45",
    increase: false,
  },
  {
    name: "Sol",
    price: "165.65",
    increase: true,
  },
  {
    name: "Ava",
    price: "65.31",
    increase: true,
  },
  {
    name: "Tet",
    price: "121.21",
    increase: false,
  },
];

const SmallInfoArray = [
  {
    icon: ShareOutlinedIcon,
    numb: "1000",
    text: "SHARES",
  },
  {
    icon: SensorsIcon,
    numb: "600",
    text: "NETWORK",
  },
  {
    icon: SpokeOutlinedIcon,
    numb: "3550",
    text: "RETURNS",
  },
  {
    icon: PaymentOutlinedIcon,
    numb: "100%",
    text: "ORDER",
  },
];

const LatestCustomersHead = ["#", "Country", "Name", "Average"];
const LatestCustomersArray = [
  {
    country: "Germany",
    name: "Jenifer Vintage",
    average: "44.45%",
  },
  {
    country: "USA",
    name: "Angelina Jolly",
    average: "12.45%",
  },
  {
    country: "Brazil",
    name: "Lori Moore",
    average: "32.41%",
  },
  {
    country: "England",
    name: "Allianz Dacron",
    average: "56.23%",
  },
  {
    country: "Australia",
    name: "John Deo",
    average: "90.41%",
  },
  {
    country: "Germany",
    name: "Jenifer Vintage",
    average: "44.45%",
  },
  {
    country: "USA",
    name: "Angelina Jolly",
    average: "12.45%",
  },
  {
    country: "Brazil",
    name: "Lori Moore",
    average: "32.41%",
  },
  {
    country: "England",
    name: "Allianz Dacron",
    average: "56.23%",
  },
  {
    country: "Australia",
    name: "John Deo",
    average: "90.41%",
  },
];

const MarketShareArray = [
  {
    Icon: FacebookOutlinedIcon,
    number: "+ 45.36%",
    color: "secondary",
  },
  {
    Icon: PublicOutlinedIcon,
    number: "- 50.69%",
    color: "primary",
  },
  {
    Icon: OndemandVideoOutlinedIcon,
    number: "+ 16.85%",
    color: "error",
  },
];

const MarketShareItem = ({ Icon, number, color }) => {
  // console.log(color);
  return (
    <Stack direction="row" alignItems={"center"} spacing={1}>
      <Box
        padding={1}
        borderRadius={3}
        bgcolor={(theme) =>
          theme.palette.mode === "dark" ? "background.paper" : `${color}.light`
        }
      >
        <Typography display="flex" color={`${color}.main`}>
          <Icon color="inherit" />
        </Typography>
      </Box>
      <Typography variant="subtitle1" fontWeight={600}>
        {number}
      </Typography>
    </Stack>
  );
};

const CardDataArray = [
  {
    topText: "Revenue",
    mainText: "$42,562",
    bottomText: "$50,032 Last Month",
    bgcolor: "secondary.main",
    Icon: MonetizationOnTwoToneIcon,
  },
  {
    topText: "Orders Received",
    mainText: "486",
    bottomText: "20% Increase",
    bgcolor: "primary.main",
    Icon: AccountCircleTwoToneIcon,
  },
];

const CardData = ({ topText, mainText, bottomText, Icon, bgcolor }) => {
  return (
    <Card elevation={0} sx={{ flex: "1 0 auto", bgcolor: bgcolor, pb: 0 }}>
      <CardContent
        sx={{
          "&:last-child": {
            paddingBottom: 0,
          },
        }}
      >
        <Stack direction="row" justifyContent="space-between">
          <Stack spacing={0.5}>
            <Typography variant="body2" color="white" component={"h5"}>
              {topText}
            </Typography>
            <Typography variant="h6" color="white" fontWeight={700}>
              {mainText}
            </Typography>
            <Typography variant="subtitle2" color="white">
              {bottomText}
            </Typography>
          </Stack>
          <Typography variant="body2" color="white">
            {
              <Icon
                fontSize="inherit"
                sx={{ height: 100, width: 100, opacity: 0.5 }}
              />
            }
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};
