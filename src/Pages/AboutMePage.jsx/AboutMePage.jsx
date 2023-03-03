import "./styles.css";
import IconLink from "../../components/buttons/IconLink";

function AboutMePage() {
  const styles = {
    backgroundColor: "#131a2b",
    width: "98vw",
    borderRadius: "6px",
    border: "2px solid rgba(112,204,192,0.3)",
    marginLeft: "1vw",
    padding: "1em",
    color: "white",
  };

  return (
    <>
      <div className="secondary_gradient">
        <div style={styles}>
          <span className="sm:text-4xl text-2xl sm:text-center text-gray">
            {"{"}About Me{"}"}
          </span>
          <div className="portrait:md_displayed md_displayed float-right flex justify-between w-16">
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
          <div className=" grid grid-flow-row-dense grid-cols-12 mt-8">
            <div className="col-span-10 col-start-2 lg:row-span-2 md:row-span-3 md:col-start-1 md:col-span-2 md:row-start-1 md:mr-3 md:max-h-44">
              <div
                id="avatar"
                className="bg-secondary ring ring-primary-light rounded-xl avatar_img_min_size flex justify-center"
              >
                <img
                  className=" md:max-h-44 avatar_img_max_size"
                  src="/Mirzmoji.svg"
                  alt="Mirza Emoji"
                />
              </div>
            </div>
            <div className="col-start-2 col-span-10 md:col-start-4 md:col-span-6 lg:col-start-3 lg:col-span-7 row-span-6 lg:ml-5">
              <p className="py-5 md:py-0 mt-5 sm:mt-0 text_style2">
                "I'm a passionate software developer from Austria seeking new
                opportunities to build innovative solutions that enhance
                clients' experience.
                <br />
                I bring expertise in problem-solving, communication, and
                teamwork, and always aim for high-quality work.
                <br />
                If you're looking for a skilled and dedicated developer, let's
                connect."
              </p>
            </div>
            <div className=" max-h-36 lg:max-h-none col-start-2 col-span-10 md:col-start-10 md:col-span-3 rounded-md md:my-0 m-5">
              <span className="text-lg text-gray">{"{Tech-Stack}"}</span>
              <div className=" flex flex-wrap justify-evenly sm:gap-3 gap-1 mt-2">
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
      </div>
    </>
  );
}

export default AboutMePage;
