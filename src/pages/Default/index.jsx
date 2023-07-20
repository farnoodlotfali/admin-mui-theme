import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Stack,
  Typography,
  Box,
  Avatar,
  Menu,
  MenuItem,
  FormControl,
  Select,
  OutlinedInput,
  IconButton,
  Icon,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import ReactApexChart from "react-apexcharts";
import { Fragment, useState } from "react";
import { renderThemeColors } from "../../Utility/utils";
import Charttt from "../Analytics/Charttt";

import {
  TbShoppingBag,
  TbBrandItch,
  TbChartTreemap,
  TbDots,
  TbCreditCard,
  TbTrendingUp,
  TbTrendingDown,
  TbSquareArrowUp,
  TbCopy,
  TbPdf,
  TbArchive,
  TbChevronDown,
  TbChevronUp,
  TbChevronRight,
} from "react-icons/tb";

const StyledComp = styled(Card, {
  // shouldForwardProp: (prop) => prop !== "lowerCase" && prop !== "myProp",
})(({ theme, type = 0 }) => {
  const bgColor = [
    {
      light: theme.palette.primary.main,
      dark: theme.palette.primary.dark,
    },
    {
      light: "white",
      dark: theme.palette.orange.dark,
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

function getStyles(name, personName) {
  return {
    fontWeight: personName.indexOf(name) === -1 ? 400 : 600,
    backgroundColor: personName.indexOf(name) === -1 ? "inherit" : "grey",
  };
}

const Default = () => {
  const [personName, setPersonName] = useState("Today");

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  return (
    <>
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
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Card elevation={0}>
                <CardContent
                  sx={{
                    p: 3,
                    bgcolor: "background.paper",
                    "&:last-child": {
                      paddingBottom: 6,
                    },
                  }}
                >
                  <Stack spacing={3}>
                    <Stack
                      direction="row"
                      spacing={2}
                      justifyContent="space-between"
                    >
                      <Box>
                        <Typography variant="subtitle2">
                          Total Growth
                        </Typography>
                        <Typography variant="h6" fontWeight={600}>
                          $2,324.00
                        </Typography>
                      </Box>
                      <FormControl sx={{ width: 150 }}>
                        <Select
                          value={personName}
                          onChange={handleChange}
                          input={<OutlinedInput />}
                        >
                          {["Today", "This Month", "This Year"].map((item) => {
                            return (
                              <MenuItem
                                key={item}
                                value={item}
                                style={getStyles(item, personName)}
                              >
                                <Typography variant="body2">{item}</Typography>
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                    </Stack>

                    <BarChart />
                  </Stack>
                </CardContent>
              </Card>
              <Card elevation={0} sx={{ mt: 2 }}>
                <CardContent>
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{
                      transition: "transform .1s",

                      "&:active": {
                        transform: "scale(.9)",
                      },
                    }}
                  >
                    use Loooong Press
                  </Button>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
                  voluptate optio doloribus voluptates debitis unde consectetur,
                  enim fugit cumque suscipit hic deleniti pariatur minus animi.
                  Aspernatur iure amet quisquam. Qui. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Amet volfugit cumque suscipit
                  hic deleniti pariatur minus animi. Aspernatur iure amet
                  quisquam. Qui.
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card elevation={0} sx={{ p: 1 }}>
                <CardHeader
                  action={
                    <IconButton
                      aria-label="settings"
                      size="small"
                      sx={{ color: "primary.200" }}
                    >
                      <TbDots />
                    </IconButton>
                  }
                  title={
                    <Typography fontWeight={600}>Popular Stocks</Typography>
                  }
                />
                <CardContent
                  sx={{
                    "&:last-child": {
                      paddingBottom: 0,
                    },
                  }}
                >
                  <Card
                    elevation={0}
                    sx={{
                      bgcolor: "secondary.light",
                      p: 0,
                      borderRadius: 2,
                      overflow: "visible",
                    }}
                  >
                    <Stack direction="row" justifyContent="space-between" p={2}>
                      <Box>
                        <Typography
                          variant="body2"
                          fontWeight={500}
                          color="secondary.main"
                        >
                          Bajaj Finery
                        </Typography>
                        <Typography variant="caption" color="grey.800">
                          10% Profit
                        </Typography>
                      </Box>
                      <Typography
                        variant="h6"
                        color="grey.800"
                        fontWeight={600}
                      >
                        $1839.00
                      </Typography>
                    </Stack>
                    <Charttt height={95} lines={1} />
                  </Card>
                  <Stack spacing={1.5} mt={3}>
                    {POPULAR_STOCK_DATA.map((item, i) => {
                      return (
                        <Fragment key={i}>
                          <PopularStocksItem item={item} />
                          {POPULAR_STOCK_DATA.length - 1 !== i && (
                            <Divider sx={{ mt: 1.25 }} />
                          )}
                        </Fragment>
                      );
                    })}
                  </Stack>
                  <Stack direction="row" mt={3} justifyContent="center">
                    <Button variant="text" sx={{ typography: "body1" }}>
                      View All <TbChevronRight />
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

const POPULAR_STOCK_DATA = [
  {
    title: "Bajaj Finery",
    status: "success",
    price: "1839.00",
    percent: "20",
  },
  {
    title: "TTML",
    status: "error",
    price: "100.00",
    percent: "14",
  },
  {
    title: "Reliance",
    status: "success",
    price: "200.00",
    percent: "33",
  },
  {
    title: "TTML",
    status: "error",
    price: "189.00",
    percent: "10",
  },
  {
    title: "Stolon",
    status: "error",
    price: "189.00",
    percent: "30",
  },
];

const PopularStocksItem = ({ item }) => {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Box lineHeight={1}>
        <Typography variant="subtitle2">{item.title}</Typography>
        <Typography
          variant="caption"
          fontWeight={500}
          color={`${item.status}.main`}
        >
          {item.percent}% {item.status === "success" ? "Profit" : "Loss"}
        </Typography>
      </Box>
      <Stack direction="row" spacing={2} alignItems="baseline">
        <Typography variant="subtitle1" fontWeight={500}>
          ${item.price}
        </Typography>
        <Avatar
          sx={{
            bgcolor: `${item.status}.light`,
            mt: 1,
            width: "16px",
            height: "16px",
          }}
          variant="rounded"
        >
          <Icon
            sx={{ fontSize: 14 }}
            color={item.status === "success" ? "success" : "error"}
          >
            {item.status === "success" ? <TbChevronUp /> : <TbChevronDown />}
          </Icon>
        </Avatar>
      </Stack>
    </Stack>
  );
};

const BarChart = () => {
  const theme = useTheme();
  return (
    <>
      <ReactApexChart
        options={{
          chart: {
            type: "bar",
            height: 350,
            stacked: true,
            background: "inherit",
            toolbar: {
              show: true,
            },
            zoom: {
              enabled: false,
            },
          },
          responsive: [
            {
              breakpoint: 480,
              options: {
                legend: {
                  position: "bottom",
                  offsetX: -10,
                  offsetY: 0,
                },
              },
            },
          ],
          plotOptions: {
            bar: {
              columnWidth: "50px",
            },
          },
          xaxis: {
            type: "datetime",
            categories: [
              "01/01/2011 GMT",
              "02/01/2011 GMT",
              "03/01/2011 GMT",
              "04/01/2011 GMT",
              "05/01/2011 GMT",
              "06/01/2011 GMT",
              "07/01/2011 GMT",
              "08/01/2011 GMT",
              "09/01/2011 GMT",
              "10/01/2011 GMT",
              "11/01/2011 GMT",
              "12/01/2011 GMT",
            ],
            labels: {
              format: "MMM",
            },
          },
          legend: {
            position: "bottom",
            offsetY: 40,
            itemMargin: {
              horizontal: 22,
              vertical: 10,
            },
          },
          fill: {
            opacity: 1,
          },
          dataLabels: {
            enabled: false,
          },
          theme: {
            mode: theme.palette.mode,
          },
          colors: renderThemeColors(),
        }}
        series={[
          {
            name: "Investment",
            data: [44, 0, 41, 0, 22, 0, 11, 43, 53, 66, 110, 22],
          },
          {
            name: "Loss",
            data: [13, 23, 20, 8, 110, 27, 13, 23, 20, 8, 0, 27],
          },
          {
            name: "Profit",
            data: [11, 17, 15, 15, 21, 14, 11, 17, 15, 15, 21, 14],
          },
          {
            name: "Maintenance",
            data: [1, 7, 25, 13, 0, 8, 11, 17, 15, 15, 0, 0],
          },
        ]}
        type="bar"
        height={350}
      />
    </>
  );
};

const INCOME_DATA = [
  {
    title: "$203k",
    subTitle: "Total Income",
    bgcolor: "primary.800",
    type: 0,
    Icon: (
      <Icon fontSize="medium" sx={{ color: "white" }}>
        <TbChartTreemap />
      </Icon>
    ),
  },
  {
    title: "$203k",
    subTitle: "Total Income",
    bgcolor: "warning.dark",
    type: 1,
    Icon: (
      <Icon fontSize="medium" sx={{ color: "white" }}>
        <TbBrandItch />
      </Icon>
    ),
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
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
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
                  cursor: "pointer",
                }}
                variant="rounded"
              >
                <Icon fontSize="small" sx={{ color: "white" }}>
                  <TbCreditCard />
                </Icon>
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
                  cursor: "pointer",
                }}
                variant="rounded"
                id="demo-positioned-button"
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <TbDots fontSize="20" />
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
                    <Icon
                      sx={{
                        fontSize: 16,
                        color: (theme) =>
                          theme.palette.mode === "dark"
                            ? "secondary.main"
                            : "primary.light",
                      }}
                    >
                      <TbTrendingUp />
                    </Icon>
                  </Avatar>
                </Stack>
                <Typography color="secondary.200">Total Earning</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Card>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleClose} sx={{ gap: 2 }}>
          <TbSquareArrowUp />
          Import Card
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ gap: 2 }}>
          <TbCopy />
          Copy Data
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ gap: 2 }}>
          <TbPdf />
          Export
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ gap: 2 }}>
          <TbArchive />
          Archive File
        </MenuItem>
      </Menu>
    </>
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
                cursor: "pointer",
              }}
              variant="rounded"
            >
              <Icon sx={{ color: "white" }}>
                <TbShoppingBag />
              </Icon>
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
                  <Icon
                    sx={{
                      fontSize: 16,
                      color: (theme) =>
                        theme.palette.mode === "dark"
                          ? "primary.main"
                          : "primary.light",
                    }}
                  >
                    <TbTrendingDown />
                  </Icon>
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
      theme.palette.mode === "dark" ? "background.paper" : `${propsColor}.main`,
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
          ? `linear-gradient(140.9deg, ${theme.palette[propsColor].dark} 50.02%, rgba(144, 202, 249, 0) 85.5%)`
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
          ? `linear-gradient(210.04deg, ${theme.palette[propsColor].main} 50.94%, rgba(144, 202, 249, 0) 95.49%)`
          : theme.palette[propsColor]["800"],
      borderRadius: 100,
      top: "-85px",
      right: "-95px",
    },
  };
};

export default Default;
