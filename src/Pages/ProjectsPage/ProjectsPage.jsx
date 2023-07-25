import ProjectSection from "../../components/Sections/ProjectSection/ProjectSection";
import PADB_Img from "/src/assets/Projects/PA-Drawingboard/PixelArtDB.png";
import PADB_Data from "/src/assets/Projects/PA-Drawingboard/data.json";
import Kanban_Img from "/src/assets/Projects/TodoList/kanban.webp";
import Kanban_Data from "/src/assets/Projects/TodoList/data.json";
import ProjectHighlight from "../../components/Sections/ProjectSection/ProjectHighlight";
import AppliedTo_Data from "../../assets/Projects/AppliedTo/data.json";
import AppliedTo_gif from "../../assets/Projects/AppliedTo/AppliedTo_showcase.gif";
import AppliedTo_mobile_gif from "../../assets/Projects/AppliedTo/AppliedTo_mobile_showcase.gif";

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
          <div className="mx-auto sm:mx-auto sm:w-10/12">
            <ProjectHighlight
              projectText={AppliedTo_Data.data.en.description_1}
              projectImage={AppliedTo_gif}
              projectImage2={AppliedTo_mobile_gif}
              projectFeatures={AppliedTo_Data.data.en.features}
              projectName={AppliedTo_Data.data.en.name}
              projectStack={AppliedTo_Data.data.techStack}
              demoLink={AppliedTo_Data.data.link.demo}
              repoLink={AppliedTo_Data.data.link.repo}
            />
            <h3 className="text-primaryText text-2xl select-none mt-10 mb-20">
              {"{Minor Projects}"}
            </h3>
            <div className=" grid grid-cols-1 pt-10 lg:grid-cols-2 lg:items-start items-center gap-y-10 lg:gap-y-36">
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
      </div>
    </>
  );
}

export default ProjectsPage;
