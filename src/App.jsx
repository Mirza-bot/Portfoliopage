import Navbar from "./components/Navbar/Navbar";

import GreetingPage from "./Pages/GreetingPage/GreetingPage";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage";
import Footer from "./components/Footer/Footer";
import "./main.css";
function App() {
  return (
    <>
      <Navbar />
      <GreetingPage />
      <ProjectsPage />
      <Footer />
    </>
  );
}

export default App;
