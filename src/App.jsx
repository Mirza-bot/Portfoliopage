import "./main.css";
import Navbar from "./components/Navbar/Navbar";
import GreetingPage from "./Pages/GreetingPage/GreetingPage";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage";
import Footer from "./components/Footer/Footer";
import AboutMeCard from "./components/Cards/AboutMeCard/AboutMeCard";
import ContactBox from "./components/ContactBox/ContactBox";
import MobileMenu from "./components/Sections/MobileMenu/MobileMenu";
import { Spin as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (toggle === true) {
      document.body.classList.add(`overflow-hidden`);
    } else {
      document.body.classList.remove(`overflow-hidden`);
    }
  }, [toggle]);

  return (
    <>
      <div className="sticky top-0 z-40">
        <div
          className="md:hidden absolute z-50 right-5 top-5 text-primaryText"
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
        <AboutMeCard />
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
