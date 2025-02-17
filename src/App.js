import React, { useEffect } from "react";
import Main from "./Component/Main";
import "aos/dist/aos.css";
import ScrollToTop from "./Scroll/Scroll";
import Aos from "aos";
const App = () => {
  useEffect(() => {
    // Initialize AOS with specific settings
    Aos.init({
      duration: 1500, // Animation duration in milliseconds
      offset: 200,
      once: true, // Allow animations to happen only once
      mirror: true, // Disable mirroring animations when scrolling back
    });
  }, []);
  return (
    <>
      <Main />
      <ScrollToTop />
    </>
  );
};

export default App;
