import ProjectSection from "../../components/Sections/ProjectSection/ProjectSection";
import JAM_Img from "/src/assets/Projects/JAM/JobApplicationManager.gif";
import JAM_Data from "/src/assets/Projects/JAM/data.json";
import PADB_Img from "/src/assets/Projects/PA-Drawingboard/PixelArtDB.png";
import PADB_Data from "/src/assets/Projects/PA-Drawingboard/data.json";
import Kanban_Img from "/src/assets/Projects/TodoList/kanban.webp";
import Kanban_Data from "/src/assets/Projects/TodoList/data.json";

/**
 *
 * @returns the project page of the website
 */
function ProjectsPage() {
  return (
    <>
      <div id="work">
        <div className=" relative">
          <div className="bg-primary-light p-5 md:w-fit md:absolute md:top-20 md:left-1/4">
            <p className="text-primaryText text-3xl select-none">
              {"{Projects}"}
            </p>
          </div>
          <div className="flex flex-col pt-20">
            <div className="animate-[levitation_2s_ease-in-out_infinite]">
              <ProjectSection
                projectImage={JAM_Img}
                projectName={JAM_Data.data.de.name}
                projectText={JAM_Data.data.de.description}
              />
            </div>
            <div className="animate-[levitation_2s_0.3s_ease-in-out_infinite]">
              <ProjectSection
                projectImage={PADB_Img}
                projectName={PADB_Data.data.de.name}
                projectText={PADB_Data.data.de.description}
              />
            </div>
            <div className="animate-[levitation_2s_0.6s_ease-in-out_infinite]">
              <ProjectSection
                projectImage={Kanban_Img}
                projectName={Kanban_Data.data.de.name}
                projectText={Kanban_Data.data.de.description}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;
