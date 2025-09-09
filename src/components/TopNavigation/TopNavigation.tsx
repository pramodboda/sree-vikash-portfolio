import { Box, Stack } from "@mui/material";
import React from "react";

export default function TopNavigation() {
  return (
    <Stack sx={{ background: "#222222" }}>
      <Box>
        <Stack>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Films</a>
          </li>
        </Stack>
      </Box>

      <img
        width="50"
        src="https://www.sreevikash.com/wp-content/uploads/2025/05/cropped-sree-vikash-photography-logo-black-100.png"
        className="custom-logo"
        alt="Sree Vikash"
        decoding="async"
      />
    </Stack>
  );
}
