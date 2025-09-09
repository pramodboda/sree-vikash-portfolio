// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import "./components/circular-gallery/CircularGallery.css";
import { CssBaseline } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "./contexts/theme/ThemeContext";

import { Box } from "@mui/material";
import { motion } from "framer-motion";

import Hero_Section from "./components/hero/Hero_Section";
import CircularGallery from "./components/circular-gallery/CircularGallery";
import Services_Section from "./components/services/Services_Section";
import Testimonials_Section from "./components/testimonials/Testimonials_Section";
import TopNavigation from "./components/TopNavigation/TopNavigation";

function App() {
  return (
    <MuiThemeProvider>
      <CssBaseline />
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        // className="text-xl font-semibold"
      >
        <TopNavigation />
      </motion.div>

      {/* <Box sx={{padding:"0 0 120px 0", background: "#333333", color: "#f9f9f9"}}> */}
      <Box>
        {/* <h2>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nisi cupiditate maiores iure ut ex natus recusandae eveniet. Sint suscipit vero, nobis doloribus repudiandae eos cumque itaque et nesciunt vel.</div>
        <div>Pariatur, maiores, consequatur debitis consequuntur corrupti ipsam amet atque dolorum temporibus excepturi quam optio dolor totam, numquam magni! Nobis sint, aliquam sit eaque reprehenderit expedita beatae fugiat in inventore voluptatum!</div>
        <div>Debitis, ipsam. Repudiandae accusantium ut quisquam aliquam in nulla labore qui nam commodi voluptate est aut neque voluptas cupiditate repellat quam, velit obcaecati incidunt nihil at! Quasi praesentium minima veritatis.</div>
        <div>Sapiente quaerat laborum iste voluptatum eligendi veritatis! Id placeat, illum nobis ipsum modi odit deleniti ratione excepturi voluptates recusandae, accusantium repellendus. Odit architecto dignissimos pariatur mollitia quibusdam fugiat perferendis quae.</div>
        <div>Blanditiis, dolorum suscipit excepturi iure tempora totam quo! Odit accusantium velit facilis voluptatem fuga omnis, eum non, itaque doloribus eligendi cumque et nostrum, autem delectus iste dolor labore ex rem!</div>
        <div>Molestiae consectetur repellendus consequatur, est velit accusantium distinctio porro. Quidem ex autem optio alias. Culpa nihil iure accusantium voluptatibus, velit nemo. Vero expedita odio alias! Exercitationem error provident cupiditate molestiae?</div>
        <div>Autem necessitatibus laudantium incidunt at commodi tenetur dolorem! Nemo, ducimus aut. Libero enim, porro, pariatur dolore reiciendis quaerat suscipit saepe dicta, dolorem et corporis placeat! Praesentium repellat natus earum eaque.</div>
        <div>Nemo recusandae culpa facilis porro expedita iste consequuntur! Quae doloremque ipsam, tenetur a expedita pariatur consequuntur? Iure voluptatibus natus veniam reprehenderit neque. Beatae doloribus minus reprehenderit voluptatibus dolores neque nihil.</div>
        <div>Quod asperiores, temporibus culpa quisquam quibusdam itaque ut accusamus officia, blanditiis officiis minima iusto voluptatum laborum est tempora deserunt esse facere sunt? Obcaecati, numquam enim. Consectetur assumenda error doloribus maiores.</div>
        <div>Officia, mollitia quo laudantium nam dignissimos error quisquam provident labore, maxime recusandae quae, ut quidem accusantium officiis! Omnis nisi error magnam dignissimos, sit mollitia nulla. Ipsum ducimus commodi perspiciatis repellat?</div>
      </h2> */}
        <Hero_Section />
        {/* <div style={{ height: "600px", position: "relative" }}>
        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
      </div> */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div
            style={{
              height: "100vh",
              width: "100%",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
          </div>
        </motion.div>
      </Box>
      <Services_Section />
      <Testimonials_Section />
    </MuiThemeProvider>
  );
}

export default App;
