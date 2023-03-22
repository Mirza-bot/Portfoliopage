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
      className="greeting_page sm:pt-10 pt-3 pb-10 relative border-b-2 border-primaryText"
    >
      <div id="grid_container" className="grid grid-cols-10 grid-rows-6 m-2">
        <div className="xl:col-span-4 xl:col-start-2 md:col-span-7 md:col-start-2 md:row-start-4 sm:col-start-2 col-start-2 row-start-2 sm:row-start-3 col-span-10">
          <h1 className="text-4xl sm:text-6xl font-semibold ">Malkoc Mirza</h1>
          <h2 className="text-2xl sm:text-3xl text-primaryText mt-3 tracking-tighter">
            {softwareDeveloper}
          </h2>
        </div>
        <div className="text_style2 text-lg xl:col-span-3 xl:col-start-2  md:col-span-4 md:col-start-2 row-start-3 sm:row-start-4 md:row-start-5 col-span-8 col-start-2 sm:mt-3">
          <h3 className="font-thin">
            My passion for development drives creativity, satisfaction of
            solving complex problems with elegant solutions and constant
            improvement.
          </h3>
        </div>
        <div className="sm:row-span-5 row-start-4 mt-10 sm:mt-0 sm:row-start-6 col-span-1 col-start-2">
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
            <BasicBtn buttonName={"<explore/>"} addClass={"sm:mt-5 mt-8"} />
          </Link>
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
        </div>
        <div className="absolute style_vl md_hidden"></div>
      </div>
    </div>
  );
}

export default GreetingPage;
