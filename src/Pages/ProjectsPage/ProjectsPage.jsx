import AboutMeCard from "../../components/Cards/AboutMeCard/AboutMeCard";
import ProjectSection from "../../components/Sections/ProjectSection/ProjectSection";
import ContactBox from "../../components/ContactBox/ContactBox";
import JAM_Img from "/src/assets/Projects/JAM/JobApplicationManager.gif";
import JAM_Data from "/src/assets/Projects/JAM/data.json";
import PADB_Img from "/src/assets/Projects/PA-Drawingboard/PixelArtDB.png";
import PADB_Data from "/src/assets/Projects/PA-Drawingboard/data.json";
import Kanban_Img from "/src/assets/Projects/TodoList/kanban.webp";
import Kanban_Data from "/src/assets/Projects/TodoList/data.json";
import "./styles.css";

/**
 *
 * @returns the project page of the website
 */
function ProjectsPage() {
  return (
    <>
      <AboutMeCard />
      <div className="page_container">
        <div className="pb-20 relative">
          <div className="bg-primary-light p-5 sm:w-fit sm:absolute sm:top-20 sm:left-64">
            <p className="text-primaryText text-3xl select-none">
              {" "}
              {"{Projects}"}
            </p>
          </div>
          <div className="flex flex-col ">
            <ProjectSection
              projectImage={JAM_Img}
              projectName={JAM_Data.data.de.name}
              projectText={JAM_Data.data.de.description}
            />
            <ProjectSection
              projectImage={PADB_Img}
              projectName={PADB_Data.data.de.name}
              projectText={PADB_Data.data.de.description}
            />
            <ProjectSection
              projectImage={Kanban_Img}
              projectName={Kanban_Data.data.de.name}
              projectText={Kanban_Data.data.de.description}
            />
          </div>
        </div>
        <div className="mt-20 pb-20">
          <ContactBox />
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;
