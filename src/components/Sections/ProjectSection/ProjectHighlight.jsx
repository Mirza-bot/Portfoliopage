import LinkBtn from "../../buttons/LinkBtn";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsDisplay } from "react-icons/bs";
/**
 *
 * @param {string} projectName name of the project.
 * @param {string} projectText a short description of the project.
 * @param {string} projectImage a image of the project to present. (supports all formats for <img/> - tag.)
 * @param {string} projectImage2 a image of the project to present. (supports all formats for <img/> - tag.)
 * @param {string} projectFeatures
 * @param {string} projectStack used technologies
 * @param {string} demoLink a link to the project url (to test it).
 * @param {string} repoLink a link to the github repository.
 * @param {string} buttonDisabled if set on true the buttons become disabled.
 * @returns 2 animated cards for the image and the description.
 */
export default function ProjectHighlight({
  projectName,
  projectText,
  projectImage,
  projectImage2,
  projectFeatures,
  projectStack,
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
    <div className=" bg-primary-dark p-5 w-10/12 md:w-full lg:w-10/12 lg:p-3 mx-auto mb-10 rounded-sm">
      <div>
        <h1 className="text-xl p-4 mb-2 text-primaryText font-semibold bg-primary-light rounded-sm">
          {projectName}
        </h1>
      </div>
      <div className="text-white">
        <div className="lg:flex lg:justify-end">
          <p className="text_style2 font-thin mb-2 lg:w-3/5 sm:p-5 py-3">
            {projectText}
          </p>
          <div className="sm:p-5 py-3 flex justify-center mb-10">
            <img src={projectImage} alt="project image" />
          </div>
        </div>
        <div className="sm:flex sm:justify-between md:p-5 lg:p-0">
          <div className=" lg:pl-5 flex justify-center md:w-full lg:max-h-max">
            <img src={projectImage2} alt="project image 2" />
          </div>
          <div className="flex flex-col justify-start lg:gap-20 py-5">
            <h3 className="md:pl-4 text-lg font-bold my-3">Features</h3>
            <p className="text_style2 sm:px-5 pb-5 ">
              Users can create an account and log in securely, the data is
              stored using encryption techniques.
              <br />
              <br />
              Built with a responsive design, allowing users to access and
              manage their applications on different devices, including
              desktops, tablets, and smartphones.
            </p>
            <div className="sm:p-5">
              <p className="text_style2 font-thin mb-2 py-3 ">
                ({projectFeatures})
              </p>
              <h3>Tech-Stack</h3>
              <p>{projectStack}</p>
            </div>
          </div>
        </div>
        <div className="flex lg:justify-center lg:gap-10 lg:my-6 md:ml-5 mt-10 sm:mt-5">
          <div className="mr-2">
            <LinkBtn
              buttonName={buttonFill("Demo")}
              btnLink={demoLink}
              alternative={false}
              disabled={buttonDisabled}
            />
          </div>
          <div>
            <LinkBtn
              buttonName={buttonFill("Code")}
              btnLink={repoLink}
              alternative={false}
              disabled={buttonDisabled}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
