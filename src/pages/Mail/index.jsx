import { Box, Icon, Stack, Typography } from "@mui/material";
import React from "react";
import { LiaHomeSolid } from "react-icons/lia";
import { MdKeyboardArrowRight } from "react-icons/md";

const MailPage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "block",
        boxSizing: "border-box",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Stack
        sx={{
          marginTop: "20px",
          marginBottom: "24px",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "none",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px",
          backgroundColor: "white",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.25rem",
            fontWeight: "500",
            lineHeight: "1.167",
            color: (theme) => theme.palette.primary.dark,
          }}
        >
          Mail
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <Icon
            sx={{
              fontSize: "0.875rem",
              fontWeight: "400",
              ":hover": { cursor: "pointer" },
            }}
          >
            <LiaHomeSolid />
          </Icon>
          <Icon sx={{ fontSize: "0.875rem", fontWeight: "400" }}>
            <MdKeyboardArrowRight />
          </Icon>
          <Typography sx={{ fontSize: "0.875rem", fontWeight: "400" }}>
            Mail
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default MailPage;
