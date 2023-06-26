import "./main.css";
import "animate.css/animate.min.css";
import Navbar from "./components/Navbar/Navbar";
import GreetingPage from "./Pages/GreetingPage/GreetingPage";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage";
import Footer from "./components/Footer/Footer";
import AboutMeBox from "./components/Sections/AboutMeBox/AboutMeBox";
import ContactBox from "./components/Sections/ContactBox/ContactBox";
import MobileMenu from "./components/Sections/MobileMenu/MobileMenu";
import { Spin as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);

  /** Checks for the toggle state of the mobile menu and prevents scrolling if mobile menu is open  */
  useEffect(() => {
    if (toggle === true) {
      document.body.classList.add(`overflow-hidden`);
    } else {
      document.body.classList.remove(`overflow-hidden`);
    }
  }, [toggle]);

  return (
    <>
      <div className={"sticky -top-0 z-40 select-none"}>
        <div
          className="lg:hidden absolute z-50 right-3 top-4 text-primaryText"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <Hamburger toggled={toggle} />
        </div>
        <Navbar toggle={toggle} setToggle={setToggle} />
        <MobileMenu toggle={toggle} setToggle={setToggle} />
      </div>
      <div className="page_container1">
        <GreetingPage />
        <AboutMeBox />
      </div>
      <div className="page_container2">
        <ProjectsPage />
        <ContactBox />
      </div>
      <Footer />
    </>
  );
}

export default App;
