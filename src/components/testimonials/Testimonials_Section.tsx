import React from "react";
// import { Typography, Box } from "@mui/material";
import ScrollVelocity from "../animations/ScrollVelocity/ScrollVelocity";


const Testimonials_Section: React.FC = () => {
    const velocity = 30; // default 100
  return (
    <>
        <ScrollVelocity
        texts={['Testimonals', 'Feedback', 'Reviews', "Appreciation"]} 
        velocity={velocity} 
        className="custom-scroll-text"
        />
    </>
  );
};
export default Testimonials_Section;
