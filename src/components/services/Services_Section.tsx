import React from "react";
import { Typography, Box } from "@mui/material";
import FlowingMenu from "../animations/FlowingMenu/FlowingMenu";

const demoItems = [
  {
    link: "#",
    text: "Portrait Photography",
    // image: "https://www.sreevikash.com/wp-content/uploads/2021/01/Student-Referral6.jpg",

    // image: "https://www.sreevikash.com/wp-content/uploads/2022/10/SVM01452-scaled.jpg",
    image:"https://www.sreevikash.com/wp-content/uploads/2021/01/corporate-culture-photos-bangalore_sreevikash-2.jpg"

    
  },
  {
    link: "#",
    text: "Wedding Photography & Film",
    // image: "https://picsum.photos/600/400?random=2",
    image:"https://www.sreevikash.com/wp-content/uploads/2025/01/sree_vikash_photography_wedding_pre_wedding_bangalore_best.jpg"
  },
  {
    link: "#",
    text: "Corporate Photography & Film",
    // image: "https://picsum.photos/600/400?random=3",
    image:"https://www.sreevikash.com/wp-content/uploads/2023/09/corporate_lifestyle_photographers_bangalore_sreevikash_29.jpg"
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
    <div className="section-padding" style={{display:"flex", width: "100%"}}>
      <div
       
        style={{ width: "100%", minHeight:"600px", position: "relative" }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h1" sx={{ pb: "5rem" }}>
            Services
          </Typography>
        </Box>

        <FlowingMenu items={demoItems} />
      </div>
    </div>
  );
};
export default Services_Section;
