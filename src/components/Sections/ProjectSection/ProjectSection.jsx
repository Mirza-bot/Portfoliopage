import BasicBtn from "../../buttons/BasicBtn";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsDisplay } from "react-icons/bs";

function ProjectSection({ projectName, projectText, projectImage, techStack }) {
  const buttonFill = (name) => {
    if (name === "GitHub") {
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
    <div className="lg:w-4/5 2xl:w-1/2 mx-auto grid grid-cols-12 mt-20">
      <div className=" -translate-y-20 -translate-x-14 bg-primary-light text-white pb-4 px-4 pt-2 z-10 col-span-3 row-span-3 row-start-2 col-start-9">
        <p className="shadow-3xl -translate-x-14 mb-3 text-xl text-secondary-light font-semibold bg-primaryText text_style2 text-center w-max py-1 px-2">
          JobApplication Manager
        </p>
        <p className="text_style2 font-thin">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit excepturi
          inventore deserunt facere ducimus. Obcaecati expedita voluptas
          distinctio quisquam magnam labore officia, tenetur ipsa, quod tempora
          corrupti aspernatur aperiam vel!
        </p>
        <div className="flex justify-between  lg:mx-4  ">
          <BasicBtn buttonName={buttonFill("Demo")} alternative={true} />
          <BasicBtn buttonName={buttonFill("GitHub")} alternative={true} />
        </div>
      </div>
      <div className="translate-x-20 col-start-2 row-span-3 col-span-7">
        <img src={projectImage} alt="sadsads" />
      </div>
    </div>
  );
}

export default ProjectSection;
