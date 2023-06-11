import "./styles.css";
import BasicBtn from "../../components/buttons/BasicBtn";
import IconLink from "../../components/buttons/IconLink";
import { Link } from "react-scroll";

/**
 *
 * @returns the first seen page of the website
 */
function GreetingPage() {
  const softwareDeveloper = "{Software Developer}";
  return (
    <div
      id="home"
      className=" sm:pt-10 pt-3 pb-10 relative border-b-2 border-primaryText"
    >
      <div className="absolute top-1/2 sm:top-2/3 left-1/2 sm:left-1/3 transform -translate-x-1/2 sm:-translate-x-1/3 -translate-y-1/2 p-4 w-full sm:w-3/4">
        <div className="text-white">
          <h1 className="text-4xl sm:text-6xl font-semibold mb-2">
            Malkoc Mirza
          </h1>
          <h2 className="text-2xl sm:text-3xl text-primaryText tracking-tighter mb-2">
            {softwareDeveloper}
          </h2>
        </div>
        <div className="text_style2 text-lg sm:text-2xl">
          <h3 className="text-white font-thin md:w-2/3">
            My passion for development drives creativity, satisfaction of
            solving complex problems with elegant solutions and constant
            improvement.
          </h3>
        </div>
        <div>
          <Link
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            href="/projects"
            className=" hover:cursor-pointer"
          >
            <BasicBtn
              buttonName={"<explore/>"}
              addClass={"sm:mt-5 mt-8 text-xl px-4 py-3"}
            />
          </Link>
        </div>
      </div>
      <div
        id="link_icons"
        className=" absolute flex flex-col justify-between right-5 top-2/3 md_hidden leading-3 z-10 rounded-full"
      >
        <div className=" rounded-full mb-1">
          <IconLink
            linkName={"LinkedIn"}
            targetLink={"http://linkedin.com/in/mirzamalkoc"}
            addClass={"text-3xl"}
          />
        </div>
        <div className="rounded-full">
          <IconLink
            linkName={"GitHub"}
            targetLink={"https://github.com/Mirza-bot"}
            addClass={"text-3xl"}
          />
        </div>
        <div className="relative style_vl md_hidden"></div>
      </div>
    </div>
  );
}

export default GreetingPage;
