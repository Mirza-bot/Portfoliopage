import { AnimationOnScroll } from "react-animation-on-scroll";
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
    <AnimationOnScroll
      animateIn="animate__fadeInLeft"
      animateOnce
      duration={0.6}
    >
      <div className="md:w-3/5 lg:w-4/5 mx-auto my-10 sm:my-16 md:my-32 relative transition-none ">
        <div className="md:translate-x-5 mx-auto sm:w-4/5 lg:pt-32 xl:pt0 border-2 border-primaryText lg:border-none">
          <img
            className="select-none lg:brightness-50 lg:hover:brightness-100 lg:w-4/5 lg:hover:ring-2 hover:cursor-pointer lg:ring-primaryText lg:hover:scale-105 transition-all ease-out duration-300"
            onMouseEnter={(e) => {
              e.target.parentElement.lastChild.classList.toggle(
                "lg:translate-x-20"
              );
            }}
            onMouseLeave={(e) => {
              e.target.parentElement.lastChild.classList.toggle(
                "lg:translate-x-20"
              );
              e.target.classList.remove("lg:w-full");
              e.target.parentElement.lastChild.classList.remove("lg:opacity-0");
            }}
            onClick={(e) => {
              e.target.classList.toggle("lg:w-full");
              e.target.parentElement.lastChild.classList.toggle("lg:opacity-0");
            }}
            src={projectImage}
            alt={projectName}
          />
          <div className=" lg:absolute lg:-bottom-20 lg:-right-20 bg-primary-light text-white pb-4 lg:px-4 lg:pt-2 z-10  lg:max-w-xs transition-all ease-out duration-300 border-t-2 lg:border-none border-primaryText">
            <h4 className=" lg:shadow-3xl lg:-translate-x-14 mb-3 text-xl text-secondary-light font-semibold bg-primaryText text_style2 text-center lg:w-max py-1 px-2">
              {projectName}
            </h4>
            <p className="text_style2 font-thin mb-2 p-4">{projectText}</p>
            <div className="flex justify-between mx-3 md:mx-16 lg:mx-6">
              <LinkBtn
                buttonName={buttonFill("Demo")}
                btnLink={demoLink}
                alternative={true}
                disabled={buttonDisabled}
              />
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
    </AnimationOnScroll>
  );
}

export default ProjectSection;
