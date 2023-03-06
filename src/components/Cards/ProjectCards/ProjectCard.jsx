import "./styles.css";
import IconLink from "../../buttons/IconLink";
import BasicBtn from "../../buttons/BasicBtn";

function ProjectCard({
  projectName,
  projectImage,
  react,
  tailwind,
  mongoDB,
  nodeJs,
}) {
  return (
    <>
      <div className="m-3">
        <p className=" text-primaryText text-2xl m-3">{projectName}</p>
        <div className="bg-secondary-light card  shadow-2xl text_style2 flex flex-col ">
          <div className="m-5 self-center">
            <img
              className="rounded-md border"
              src="/JobApplicationManager.gif"
              alt=""
            />
          </div>
          <div className=" self-center lg:self-start mx-10   ">
            <p className=" text-sm text-white">
              This application is made with Tauri a toolkit for developing
              native desktop applications with JavaScript frontend frameworks.
              I've made an app to manage my job applications. It helps me to
              keep an overview of the companies and job positions I've applied
              to and how much time passed since. React was my chosen frontend
              framework. Combined with the CSS libraries Tailwind CSS and
              DaisyUI.
            </p>
          </div>
          <div className="">
            <div className=" w-3/4 max-w-xl mx-auto flex flex-wrap justify-evenly sm:gap-3 gap-1 my-8 bg-primary-dark p-3 rounded-md ring-primaryText ring-2 lg:h-2/4">
              <div className=" w-7">
                <IconLink
                  iconLogo={"/javascript.svg"}
                  linkName={"JavaScript"}
                />
              </div>
              <div className="w-8">
                <IconLink iconLogo={"/HTML5.svg"} linkName={"HTML5"} />
              </div>
              <div className="w-8">
                <IconLink iconLogo={"/Css3.svg"} linkName={"CSS3"} />
              </div>
              {react === true && (
                <div className="w-8">
                  <IconLink iconLogo={"/React-icon.svg"} linkName={"React"} />
                </div>
              )}
              {tailwind === true && (
                <div className="w-8">
                  <IconLink
                    iconLogo={"/Tailwind_logo.svg"}
                    linkName={"Tailwind CSS"}
                  />
                </div>
              )}
              {nodeJs === true && (
                <div className="w-8">
                  <IconLink iconLogo={"/node_js.svg"} linkName={"Node JS"} />
                </div>
              )}
              {mongoDB === true && (
                <div className="w-8">
                  <IconLink
                    iconLogo={"/mongodb-icon.svg"}
                    linkName={"Mongo DB"}
                  />
                </div>
              )}
            </div>
            <div className="flex justify-center my-5 lg:relative lg:">
              <div className="flex lg:flex-col justify-between w-40 lg:w-32  lg:mx-4  ">
                <BasicBtn buttonName={"Demo"} />
                <BasicBtn buttonName={"Link"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
