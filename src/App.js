import { useEffect, useState } from "react";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import LineGradient from "./components/LineGradient";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";
import Skills from "./scenes/Skills";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import Project from "./scenes/Project";
import Experience from "./scenes/Experience";
function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  //if screen is 1060 or above is a medium screen
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      {/* md: add class to conly this breakpoint tailwind */}
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto ">
        <Skills />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto ">
        <Project />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto ">
        <Experience />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
