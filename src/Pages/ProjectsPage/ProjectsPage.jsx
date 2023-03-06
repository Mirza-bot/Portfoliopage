import AboutMeCard from "../../components/Cards/AboutMeCard/AboutMeCard";
import ProjectSection from "../../components/Sections/ProjectSection/ProjectSection";
import "./styles.css";

function ProjectsPage() {
  return (
    <>
      <AboutMeCard />
      <div className="page_container">
        <div className="pt-20 pl-8">
          <div className="bg-primary-dark w-fit p-5 ">
            <p className="text-gray text-3xl"> {"{Projects}"}</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <ProjectSection />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;
