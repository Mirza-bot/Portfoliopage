import "./styles.css";
import IconLink from "../../components/buttons/IconLink";

function ProjectsPage() {
  const styles = {
    backgroundColor: "#131a2b",
    width: "96vw",
    borderRadius: "6px",
    border: "2px solid rgba(112,204,192,0.3)",
    marginLeft: "2vw",
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
          <div className="md_displayed float-right flex justify-between w-16">
            <IconLink
              linkName={"Github Link"}
              targetLink={"https://github.com/Mirza-bot"}
              iconLogo={"/GitHub-Mark 1.svg"}
            />
            <IconLink
              linkName={"LinkedIn Link"}
              targetLink={"http://linkedin.com/in/mirzamalkoc"}
              iconLogo={"/LinkedIn.svg"}
            />
          </div>
          <div className="grid grid-rows-5 grid-cols-11 sm:grid-rows-3 mt-8">
            <div
              id="avatar"
              className="bg-secondary  md:col-span-2 md:col-start-2 sm:col-span-4 col-start-2 col-span-9 row-start-1 row-span-2 sm:row-span-1 ring ring-primary-light rounded-xl"
            >
              <img src="/Mirzmoji.svg" alt="" />
            </div>
            <div className="md:row-span-1 md:col-start-5 col-start-2 sm:col-start-6 row-start-3  sm:row-start-1 mt-3 col-span-9 sm:col-span-6 row-span-3 sm:row-span-1 text_style2">
              <p>
                "I'm a passionate software developer from Austria seeking new
                opportunities to build innovative solutions that enhance
                clients' experience. I bring expertise in problem-solving,
                communication, and teamwork, and always aim for high-quality
                work. If you're looking for a skilled and dedicated developer,
                let's connect."
              </p>
            </div>
            <div className="col-start-2 col-span-7 row-start-5 sm:row-start-2">
              <span>Tech-Stack:</span>
              <br />
              <div className="w-7">
                <IconLink iconLogo={"/javascript.svg"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;
