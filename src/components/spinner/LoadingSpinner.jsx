import { CircularProgress, Stack, Typography } from "@mui/material";

const LoadingSpinner = ({ bgcolor = "background.default" }) => {
  return (
    <Stack
      sx={{ bgcolor: bgcolor }}
      spacing={3}
      justifyContent="center"
      alignItems="center"
      py={3}
    >
      <CircularProgress color="primary" size="5rem" />

      <Typography sx={{ color: "text.primary" }}>Loading data...</Typography>
    </Stack>
  );
};

export default LoadingSpinner;
