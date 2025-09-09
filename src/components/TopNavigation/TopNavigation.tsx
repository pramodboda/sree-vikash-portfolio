import { Box, Stack } from "@mui/material";
import React from "react";

export default function TopNavigation() {
  return (
    <Stack>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Stack
          sx={{
            flexDirection: "row",
            listStyle: "none",
            gap: 8,
            alignItems: "center",
            "& > li > a": {
              color: "#999999",
              textDecoration: "none",
            },
          }}
          component="ul"
        >
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Films</a>
          </li>

          <li>
            <a href="#">
              {" "}
              <img
                width="50"
                src="https://www.sreevikash.com/wp-content/uploads/2025/05/cropped-sree-vikash-photography-logo-black-100.png"
                className="custom-logo"
                alt="Sree Vikash"
                decoding="async"
              />
            </a>
          </li>
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
    </Stack>
  );
}
