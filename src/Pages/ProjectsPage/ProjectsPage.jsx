import ProjectSection from "../../components/Sections/ProjectSection/ProjectSection";
import JAM_Img from "/src/assets/Projects/JAM/JobApplicationManager.gif";
import JAM_Vid from "/src/assets/Projects/JAM/JAM.webm";
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
      <div className="border-t-2 border-primaryText ">
        <div className=" relative">
          <div
            id="work"
            className=" sm:w-4/12 sm:text-center sm:mt-16 sm:mx-0 ml-6"
          >
            <h3 className="text-primaryText text-3xl select-none mt-10 mb-20">
              {"{Projects}"}
            </h3>
          </div>
          <div className="sm:mx-auto sm:w-10/12 grid grid-cols-1  lg:grid-cols-2 lg:items-start items-center gap-y-10 lg:gap-y-36">
            <ProjectSection
              projectImage={JAM_Img}
              projectVideo={JAM_Vid}
              projectName={JAM_Data.data.en.name}
              projectText={JAM_Data.data.en.description}
              demoLink={"/notimplemented"}
              repoLink={"/notimplemented"}
              buttonDisabled={true}
            />
            <ProjectSection
              projectImage={PADB_Img}
              projectName={PADB_Data.data.en.name}
              projectText={PADB_Data.data.en.description}
              demoLink={PADB_Data.data.link.demo}
              repoLink={PADB_Data.data.link.repo}
            />
            <ProjectSection
              projectImage={Kanban_Img}
              projectName={Kanban_Data.data.en.name}
              projectText={Kanban_Data.data.en.description}
              demoLink={Kanban_Data.data.link.demo}
              repoLink={Kanban_Data.data.link.repo}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;
