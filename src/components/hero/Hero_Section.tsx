import React, { FC } from "react";
import { Typography, Stack, Box } from "@mui/material";
import { ReactFitty } from "react-fitty";
import { motion } from "framer-motion";

const Hero_Section: FC = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-xl font-semibold"
      >
        {/* Using ReactFitty for Scales up (or down) text so it fits perfectly to its parent container. */}
        {/* Applied kerning and letter-spacing to the hero / Jumbo text */}
        <Typography
          component={ReactFitty}
          sx={{
            position: "relative",
            fontWeight: 700,
            fontKerning: "normal",
            letterSpacing: "-0.05em",
          }}
        >
          Sree Vikash
        </Typography>
      </motion.div>

      <Stack sx={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Box sx={{ width: { xs: "50%", xl: "33.33%" } }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-xl font-semibold"
          >
            <Typography variant="h6">Creative entrepreneur</Typography>
            <Typography
              component="p"
              variant="body2"
              sx={{ fontSize: { xs: "0.6rem", lg: "0.875rem" } }}
            >
              🎥 Filmmaking & Direction
              <br />
              📸 Photography & Cinematography
              <br />
              ✂️ Video Editing | 🎨 Design
            </Typography>
          </motion.div>
        </Box>
        <Box sx={{ width: { xs: "50%", xl: "33.33%" }, textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-xl font-semibold"
          >
            <Typography
              component="p"
              variant="body2"
              sx={{ fontSize: { xs: "0.6rem", lg: "0.875rem" } }}
            >
              Moments in focus, <br />
              your story*my lens
            </Typography>
          </motion.div>
        </Box>
        <Box sx={{ width: { xs: "50%", xl: "33.33%" }, textAlign: "right" }}>
          {" "}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="text-xl font-semibold"
          >
            <Typography
              component="p"
              variant="body2"
              sx={{ fontSize: { xs: "0.6rem", lg: "0.875rem" } }}
            >
              Somewhere
              <br />
              Somewhere in Bangalore
            </Typography>
          </motion.div>
        </Box>
      </Stack>
    </div>
  );
};
export default Hero_Section;
