import AboutMeCard from "../../components/Cards/AboutMeCard/AboutMeCard";
import ProjectSection from "../../components/Sections/ProjectSection/ProjectSection";
import jobApplicationManager from "/src/assets/Projects/JAM/JobApplicationManager.gif";
import "./styles.css";

function ProjectsPage() {
  return (
    <>
      <AboutMeCard />
      <div className="page_container">
        <div className="pt-20 mx-8">
          <div className="bg-primary-dark w-fit p-5 ">
            <p className="text-gray text-3xl"> {"{Projects}"}</p>
          </div>
          <div className="flex flex-col ">
            <ProjectSection projectImage={jobApplicationManager} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;
