import { Box, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Box
      sx={{
        padding: 3,
        textAlign: "center",
        color: "GrayText",
      }}
    >
      <Typography fontFamily="initial" fontSize="15px">
        © Mohammad Rangga Yuditama
      </Typography>
      <Typography fontFamily="monospace" fontSize="13px">
        All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
