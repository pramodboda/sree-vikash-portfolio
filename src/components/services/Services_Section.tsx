import React from "react";
import { Typography, Box } from "@mui/material";
import FlowingMenu from "../animations/FlowingMenu";

const demoItems = [
  {
    link: "#",
    text: "Portrait Photography",
    image:
      "https://www.sreevikash.com/wp-content/uploads/2021/01/Student-Referral6.jpg",
  },
  {
    link: "#",
    text: "Wedding Photography & Film",
    image: "https://picsum.photos/600/400?random=2",
  },
  {
    link: "#",
    text: "Corporate Photography & Film",
    image: "https://picsum.photos/600/400?random=3",
  },
  {
    link: "#",
    text: "Print & Design",
    image: "https://picsum.photos/600/400?random=4",
  },
  {
    link: "#",
    text: "Event Photography & Film",
    image: "https://picsum.photos/600/400?random=4",
  },
];

const Services_Section: React.FC = () => {
  return (
    <>
      <div style={{ height: "600px", position: "relative" }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h1" sx={{ pb: "5rem" }}>
            Services
          </Typography>
        </Box>

        <FlowingMenu items={demoItems} />
      </div>
    </>
  );
};
export default Services_Section;
