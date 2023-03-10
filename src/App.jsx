import "./main.css";
import Navbar from "./components/Navbar/Navbar";
import GreetingPage from "./Pages/GreetingPage/GreetingPage";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage";
import Footer from "./components/Footer/Footer";
import AboutMeCard from "./components/Cards/AboutMeCard/AboutMeCard";
function App() {
  return (
    <>
      <Navbar />
      <GreetingPage />
      <AboutMeCard />
      <ProjectsPage />
      <Footer />
    </>
  );
}

export default App;
