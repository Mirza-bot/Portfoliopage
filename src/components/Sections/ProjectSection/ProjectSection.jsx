import LinkBtn from "../../buttons/LinkBtn";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsDisplay } from "react-icons/bs";

/**
 *
 * @param {string} projectName name of the project.
 * @param {string} projectText a short description of the project.
 * @param {string} projectImage a image of the project to present. (supports all formats for <img/> - tag.)
 * @param {string} demoLink a link to the project url (to test it).
 * @param {string} repoLink a link to the github repository.
 * @param {string} buttonDisabled if set on true the buttons become disabled.
 * @returns 2 animated cards for the image and the description.
 */
function ProjectSection({
  projectName,
  projectText,
  projectImage,
  demoLink,
  repoLink,
  buttonDisabled,
}) {
  const buttonFill = (name) => {
    if (name === "Code") {
      return (
        <div className="flex">
          <AiFillGithub className="mt-1 mr-2" />
          <span>{name}</span>
        </div>
      );
    } else if (name === "LinkedIn") {
      return (
        <div className="flex">
          <AiFillLinkedin className="mt-1 mr-2" />
          <span>{name}</span>
        </div>
      );
    } else if (name === "Demo") {
      return (
        <div className="flex">
          <BsDisplay className="mt-1 mr-2" />
          <span>{name}</span>
        </div>
      );
    } else {
      return (
        <div className="flex">
          <span>{name}</span>
        </div>
      );
    }
  };

  return (
    <div className=" w-10/12 relative transition-none mx-auto  ">
      <div className=" mx-auto sm:w-4/5 xl:pt0 border-2 border-primaryText rounded-md">
        <img
          className="select-none hover:cursor-pointer rounded-t-md  lg:ring-primaryText transition-all ease-out duration-300"
          src={projectImage}
          alt={projectName}
        />
        <div className=" bg-primary-light  text-white pb-4 z-10  transition-all ease-out duration-300 border-t-2  border-primaryText">
          <h4 className="pl-3 mb-3 text-xl text-secondary-light font-semibold bg-primaryText text_style2 text-centerpy-1 px-2">
            {projectName}
          </h4>
          <p className="text_style2 font-thin mb-2 p-4">{projectText}</p>
          <div className="flex ml-4">
            <div className="mr-2">
              <LinkBtn
                buttonName={buttonFill("Demo")}
                btnLink={demoLink}
                alternative={true}
                disabled={buttonDisabled}
              />
            </div>
            <div>
              <LinkBtn
                buttonName={buttonFill("Code")}
                btnLink={repoLink}
                alternative={true}
                disabled={buttonDisabled}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
