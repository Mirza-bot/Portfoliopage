import "./main.css";
import Navbar from "./components/Navbar/Navbar";
import GreetingPage from "./Pages/GreetingPage/GreetingPage";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage";
import Footer from "./components/Footer/Footer";
import AboutMeCard from "./components/Cards/AboutMeCard/AboutMeCard";
import ContactBox from "./components/ContactBox/ContactBox";
import { useState } from "react";
function App() {
  const [Menu, setMenu] = useState(true);

  const toggleMenu = () => {
    setMenu(!Menu);
  };

  return (
    <div>
      <div>
        <Navbar
          showMenu={Menu}
          toggleMenu={() => {
            toggleMenu();
          }}
        />
        <div className="page_container1">
          <GreetingPage />
          <AboutMeCard />
        </div>
        <div className="page_container2">
          <ProjectsPage />
          <ContactBox />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
