import "./styles.css";
import IconLink from "../../buttons/IconLink";

function AboutMeCard() {
  return (
    <>
      <div className="ring-2 ring-primaryText p-5">
        <span className=" text-3xl  text-gray">
          {"{"}About Me{"}"}
        </span>
        <div className="portrait:md_displayed md_displayed float-right flex justify-between w-16 mt-2">
          <IconLink
            linkName={"Github"}
            targetLink={"https://github.com/Mirza-bot"}
            iconLogo={"/GitHub-Mark 1.svg"}
          />
          <IconLink
            linkName={"LinkedIn"}
            targetLink={"http://linkedin.com/in/mirzamalkoc"}
            iconLogo={"/LinkedIn.svg"}
          />
        </div>
        <div className=" grid grid-flow-row-dense grid-cols-12 mt-8 p-2">
          <div className="col-span-10 col-start-2 lg:row-span-2 md:row-span-3 md:col-start-1 md:col-span-2 md:row-start-1 md:mr-3 md:max-h-44">
            <div
              id="avatar"
              className="bg-primary-dark ring-2 ring-primaryText rounded-xl avatar_img_min_size flex justify-center mx-auto"
            >
              <img
                className=" max-h-44 avatar_img_max_size"
                src="/Mirzmoji.svg"
                alt="Mirza Emoji"
              />
            </div>
          </div>
          <div className="col-start-2 col-span-10 md:col-start-4 md:col-span-6 lg:col-start-3 lg:col-span-7 row-span-6 lg:ml-5">
            <p className="p-5 md:py-0 mt-5 sm:mt-0 text_style2 text-white text-lg">
              "I'm a passionate software developer from Austria seeking new
              opportunities to build innovative solutions that enhance clients'
              experience.
              <br />
              I bring expertise in problem-solving, communication, and teamwork,
              and always aim for high-quality work.
              <br />
              If you're looking for a skilled and dedicated developer, let's
              connect."
            </p>
          </div>
          <div className="bg-primary-dark p-3 ring-2 ring-primaryText  lg:max-h-none col-start-2 col-span-10 md:col-start-10 md:col-span-3 rounded-md mx-5 md:my-0 mt-10 ">
            <span className="text-lg text-primaryText absolute -translate-y-12">
              {"{Tech-Stack}"}
            </span>
            <div className=" flex flex-wrap justify-evenly gap-4 mt-2">
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
              <div className="w-8">
                <IconLink iconLogo={"/React-icon.svg"} linkName={"React"} />
              </div>
              <div className="w-8">
                <IconLink
                  iconLogo={"/Tailwind_logo.svg"}
                  linkName={"Tailwind CSS"}
                />
              </div>
              <div className="w-8">
                <IconLink iconLogo={"/node_js.svg"} linkName={"Node JS"} />
              </div>
              <div className="w-8">
                <IconLink
                  iconLogo={"/mongodb-icon.svg"}
                  linkName={"Mongo DB"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMeCard;
