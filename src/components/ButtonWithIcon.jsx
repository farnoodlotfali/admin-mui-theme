import { Avatar } from "@mui/material";
import { memo } from "react";

const ButtonWithIcon = ({ Icon, hover = true, color, ...rest }) => {
  return (
    <Avatar
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === "dark"
            ? "#00000055"
            : `${color}.light`,
        color: `${color}.main`,
        borderRadius: 2,
        height: 34,
        width: 34,
        cursor: "pointer",
        transition: "all .3s",
        ":hover": hover && {
          bgcolor: `${color}.main`,
          color: `${color}.light`,
        },
      }}
      //   variant="rounded"
      //   id="demo-positioned-button"
      //   aria-controls={open ? "demo-positioned-menu" : undefined}
      //   aria-haspopup="true"
      //   aria-expanded={open ? "true" : undefined}
      //   onClick={handleClick}

      {...rest}
    >
      <Icon fontSize="small" />
    </Avatar>
  );
};

export default memo(ButtonWithIcon);
