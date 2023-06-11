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
            className="bg-primary-light p-5 md:w-fit md:absolute md:top-20 md:left-1/4"
          >
            <h3 className="text-primaryText text-3xl select-none">
              {"{Projects}"}
            </h3>
          </div>
          <div className="flex flex-col md:pt-20">
            <div className="sm:animate-[levitation_2s_ease-in-out_infinite]">
              <ProjectSection
                projectImage={JAM_Img}
                projectVideo={JAM_Vid}
                projectName={JAM_Data.data.en.name}
                projectText={JAM_Data.data.en.description}
                demoLink={"/notimplemented"}
                repoLink={"/notimplemented"}
                buttonDisabled={true}
              />
            </div>
            <div className="sm:animate-[levitation_2s_0.3s_ease-in-out_infinite]">
              <ProjectSection
                projectImage={PADB_Img}
                projectName={PADB_Data.data.en.name}
                projectText={PADB_Data.data.en.description}
                demoLink={PADB_Data.data.link.demo}
                repoLink={PADB_Data.data.link.repo}
              />
            </div>
            <div className="sm:animate-[levitation_2s_0.6s_ease-in-out_infinite]">
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
      </div>
    </>
  );
}

export default ProjectsPage;
