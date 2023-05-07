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
  Avatar,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { styled, useTheme } from "@mui/material/styles";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";
import StorefrontIcon from "@mui/icons-material/Storefront";
import TableChartIcon from "@mui/icons-material/TableChart";
import TrendingDownSharpIcon from "@mui/icons-material/TrendingDownSharp";
import ReactApexChart from "react-apexcharts";
import { useState } from "react";

const StyledComp = styled(Card, {
  // shouldForwardProp: (prop) => prop !== "lowerCase" && prop !== "myProp",
})(({ theme, type = 0 }) => {
  const bgColor = [
    {
      light: theme.palette.primary.main,
      dark: theme.palette.primary.main,
    },
    {
      light: "white",
      dark: theme.palette.background.paper,
    },
  ];

  const bBgColor = [
    {
      light: theme.palette.primary[200],
      dark: theme.palette.primary.light,
    },
    {
      light: theme.palette.warning.dark,
      dark: theme.palette.warning.dark,
    },
  ];
  const aBgColor = [
    {
      light: theme.palette.primary[200],
      dark: theme.palette.primary.light,
    },
    {
      light: theme.palette.warning.dark,
      dark: theme.palette.warning.dark,
    },
  ];

  return {
    position: "relative",
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2),
    backgroundColor:
      theme.palette.mode === "dark" ? bgColor[type].dark : bgColor[type].light,
    "::before": {
      content: '""',
      position: "absolute",
      width: "210px",
      height: "210px",
      background: `linear-gradient(140.9deg, ${
        theme.palette.mode === "dark"
          ? bBgColor[type].dark
          : bBgColor[type].light
      } -14.02%, rgba(144, 202, 249, 0) 77.58%)`,
      borderRadius: "50%",
      top: "-160px",
      right: "-130px",
    },
    "::after": {
      content: '""',
      position: "absolute",
      width: "210px",
      height: "210px",
      background: `linear-gradient(210.04deg, ${
        theme.palette.mode === "dark"
          ? aBgColor[type].dark
          : aBgColor[type].light
      } -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
      borderRadius: "50%",
      top: "-30px",
      right: "-180px",
    },
  };
});

const Default = () => {
  return (
    <Box m={4}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <TotalEarningCard />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <TotalOrderCard />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Grid container spacing={3}>
                {INCOME_DATA.map((item, i) => {
                  return (
                    <Grid key={i} item xs={12} sm={6} lg={12}>
                      <IncomeCard {...item} />
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </Box>
  );
};

const INCOME_DATA = [
  {
    title: "$203k",
    subTitle: "Total Income",
    bgcolor: "primary.800",
    type: 0,
    Icon: <TableChartIcon fontSize="small" sx={{ color: "white" }} />,
  },
  {
    title: "$203k",
    subTitle: "Total Income",
    bgcolor: "warning.dark",
    type: 1,
    Icon: <TableChartIcon fontSize="small" sx={{ color: "white" }} />,
  },
];

const IncomeCard = ({ Icon, title, subTitle, type = 0, bgcolor }) => {
  return (
    <StyledComp elevation={0} color="yellow" type={type}>
      <Box>
        <Stack direction="row" spacing={2} alignItems="end">
          <Avatar
            sx={{
              bgcolor: bgcolor,
              mt: 1,
              borderRadius: 2,
              cursor: "pointer",
            }}
            variant="rounded"
          >
            {Icon}
          </Avatar>
          <Stack
            color={(theme) =>
              !type || theme.palette.mode === "dark" ? "white" : "black"
            }
          >
            <Typography color="inherit" lineHeight={1} variant="subtitle2">
              {title}
            </Typography>
            <Typography color="inherit" variant="caption">
              {subTitle}
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </StyledComp>
  );
};

const TotalEarningCard = ({}) => {
  return (
    <Card sx={renderCardSX("secondary")}>
      <Box
        sx={{
          p: 2,
          zIndex: 2,
          position: "relative",
        }}
      >
        <Stack spacing={2}>
          <Stack direction="row" justifyContent="space-between">
            <Avatar
              sx={{
                bgcolor: (theme) =>
                  theme.palette.mode === "dark"
                    ? "background.paper"
                    : "secondary.800",
                mt: 1,
                borderRadius: 2,
              }}
              variant="rounded"
            >
              <CreditCardIcon fontSize="small" sx={{ color: "white" }} />
            </Avatar>
            <Avatar
              sx={{
                bgcolor: (theme) =>
                  theme.palette.mode === "dark"
                    ? "background.default"
                    : "secondary.dark",
                color: "secondary.200",
                borderRadius: 2,
                height: 34,
                width: 34,
              }}
              variant="rounded"
            >
              <MoreHorizIcon fontSize="small" />
            </Avatar>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Stack spacing={1}>
              <Stack direction="row" spacing={1}>
                <Typography variant="h4" fontWeight={500}>
                  $500.00
                </Typography>
                <Avatar
                  sx={{
                    bgcolor: (theme) =>
                      theme.palette.mode === "dark"
                        ? "secondary.200"
                        : "secondary.800",
                    mt: 1,
                    width: 25,
                    height: 25,
                  }}
                  variant="circular"
                >
                  <TrendingUpIcon
                    sx={{
                      fontSize: 16,
                      color: (theme) =>
                        theme.palette.mode === "dark"
                          ? "secondary.main"
                          : "white",
                    }}
                  />
                </Avatar>
              </Stack>
              <Typography color="secondary.200">Total Earning</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Card>
  );
};

const TotalOrderCard = ({}) => {
  const [activeBtn, setActiveBtn] = useState("Month");
  const [series, setSeries] = useState([35, 44, 9, 54, 45, 66, 41, 69]);
  const BUTTONS = ["Month", "Year"];

  const handleOnCLick = (btn) => {
    let arr = [];
    for (let i = 0; i < 8; i++) {
      arr.push(Math.floor(Math.random() * (120 - 1 + 1)) + 1);
    }
    setSeries(arr);
    setActiveBtn(btn);
  };

  return (
    <Card sx={renderCardSX("primary")}>
      <Box
        sx={{
          p: 2,
          zIndex: 2,
          position: "relative",
        }}
      >
        <Stack spacing={2}>
          <Stack direction="row" justifyContent="space-between">
            <Avatar
              sx={{
                bgcolor: (theme) =>
                  theme.palette.mode === "dark"
                    ? "background.paper"
                    : "primary.800",
                mt: 1,
                borderRadius: 2,
              }}
              variant="rounded"
            >
              <ShoppingBasketRoundedIcon
                fontSize="small"
                sx={{ color: "white" }}
              />
            </Avatar>
            <Stack direction="row">
              {BUTTONS.map((btn) => {
                return (
                  <Button
                    key={btn}
                    variant={btn === activeBtn ? "contained" : "text"}
                    size="small"
                    disableElevation
                    sx={{
                      height: 26,
                      color: "white",
                      bgcolor: (theme) =>
                        btn === activeBtn
                          ? theme.palette.mode === "dark"
                            ? "primary.main"
                            : "primary.200"
                          : "",
                    }}
                    onClick={() => handleOnCLick(btn)}
                  >
                    {btn}
                  </Button>
                );
              })}
            </Stack>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Stack spacing={1}>
              <Stack direction="row" spacing={1}>
                <Typography variant="h4" fontWeight={500}>
                  ${series.reduce((a, b) => a + b, 0)}
                </Typography>
                <Avatar
                  sx={{
                    bgcolor: (theme) =>
                      theme.palette.mode === "dark"
                        ? "primary.200"
                        : "primary.800",
                    mt: 1,
                    width: 25,
                    height: 25,
                  }}
                  variant="circular"
                >
                  <TrendingDownSharpIcon
                    sx={{
                      fontSize: 16,
                      color: (theme) =>
                        theme.palette.mode === "dark"
                          ? "primary.main"
                          : "white",
                    }}
                  />
                </Avatar>
              </Stack>
              <Typography color="primary.200">Total Order</Typography>
            </Stack>
            <MyChart series={series} />
          </Stack>
        </Stack>
      </Box>
    </Card>
  );
};

const MyChart = ({ series }) => {
  return (
    <>
      <ReactApexChart
        key={1}
        options={{
          chart: {
            type: "line",
            zoom: {
              enabled: false,
            },
            sparkline: {
              enabled: true,
            },
            width: "100%",
            background: "inherit",
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
            width: 3,
          },
          grid: {
            padding: {
              top: 5,
              bottom: 5,
            },
          },

          tooltip: {
            x: {
              show: false,
            },
          },
          theme: {
            mode: "dark",
          },
          colors: ["#fff"],
        }}
        series={[
          {
            name: "Total Order",
            data: series,
          },
        ]}
        type="line"
        height={75}
        width={"75%"}
      />
    </>
  );
};

const renderCardSX = (propsColor = "primary") => {
  return {
    bgcolor: (theme) =>
      theme.palette.mode === "dark"
        ? "background.default"
        : `${propsColor}.main`,
    color: "white",
    position: "relative",
    height: "100%",
    borderRadius: 2,
    "::before": {
      content: '""',
      position: "absolute",
      width: 200,
      height: 200,
      background: (theme) =>
        theme.palette.mode === "dark"
          ? `linear-gradient(140.9deg, ${theme.palette[propsColor].main} -14.02%, rgba(144, 202, 249, 0) 85.5%)`
          : theme.palette[propsColor]["800"],
      borderRadius: 100,
      top: "-125px",
      right: "-15px",
      opacity: "0.5",
    },
    "::after": {
      content: '""',
      position: "absolute",
      width: 200,
      height: 200,
      background: (theme) =>
        theme.palette.mode === "dark"
          ? `linear-gradient(210.04deg, ${theme.palette[propsColor].main} -50.94%, rgba(144, 202, 249, 0) 95.49%)`
          : theme.palette[propsColor]["800"],
      borderRadius: 100,
      top: "-85px",
      right: "-95px",
    },
  };
};

export default Default;
