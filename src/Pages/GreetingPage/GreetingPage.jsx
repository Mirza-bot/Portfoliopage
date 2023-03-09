import "./styles.css";
import BasicBtn from "../../components/buttons/BasicBtn";
import IconLink from "../../components/buttons/IconLink";

/**
 *
 * @returns the first seen page of the website
 */
function GreetingPage() {
  const softwareDeveloper = "{Software Developer}";
  return (
    <div className="primary_gradient sm:pt-10 pt-3 relative border-b-2 border-primaryText">
      <div id="grid_container" className="grid grid-cols-10 grid-rows-6 m-2">
        <div className="col-start-2 md_displayed">
          <a target="_self" href="/" className=" hover:cursor-pointer ">
            <svg
              width="57"
              height="55"
              viewBox="0 0 57 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M56 27.5C56 42.6878 43.464 55 28 55C12.536 55 0 42.6878 0 27.5C0 12.3122 12.536 0 28 0C43.464 0 56 12.3122 56 27.5Z"
                fill="#5eead4"
                fillOpacity="0.7"
              />
              <path
                d="M12.546 35.287L3.668 29.537V27.191L12.546 21.441V24.5L6.451 28.318V28.41L12.546 32.228V35.287ZM15.665 36V21.004H19.207L20.679 26.317L21.185 28.387H21.277L21.783 26.317L23.255 21.004H26.797V36H23.945V31.354C23.945 30.94 23.9603 30.4263 23.991 29.813C24.0217 29.1843 24.06 28.5327 24.106 27.858C24.152 27.1833 24.198 26.5393 24.244 25.926C24.3053 25.3127 24.3513 24.8067 24.382 24.408H24.313L23.163 28.41L22.013 32.021H20.357L19.184 28.41L18.103 24.408H18.034C18.0647 24.8067 18.103 25.3127 18.149 25.926C18.2103 26.5393 18.264 27.1833 18.31 27.858C18.356 28.5327 18.3943 29.1843 18.425 29.813C18.4557 30.4263 18.471 30.94 18.471 31.354V36H15.665ZM29.364 39.68L36.931 19.67H39.76L32.193 39.68H29.364ZM43.247 35.287V32.228L49.342 28.41V28.318L43.247 24.5V21.441L52.125 27.191V29.537L43.247 35.287Z"
                fill="#131A2B"
              />
            </svg>
          </a>
        </div>
        <div className="xl:col-span-4 xl:col-start-2 md:col-span-7 md:col-start-2 sm:col-start-2 col-start-2 row-start-4 col-span-10">
          <p className="text-4xl sm:text-6xl font-semibold ">Malkoc Mirza</p>
          <p className="text-2xl sm:text-3xl text-primaryText mt-3 tracking-tighter">
            {softwareDeveloper}
          </p>
        </div>
        <div className="text_style2 text-lg xl:col-span-3 xl:col-start-2  md:col-span-4 md:col-start-2 row-start-5 md:row-start-5 col-span-8 col-start-2 sm:mt-3">
          <p className="font-thin">
            My passion for development drives creativity, satisfaction of
            solving complex problems with elegant solutions and constant
            improvement.
          </p>
        </div>
        <div className="sm:row-span-5 row-start-6 col-span-1 col-start-2">
          <BasicBtn buttonName={"<explore/>"} addClass={"sm:mt-5 mt-8"} />
        </div>
        <div
          id="link_icons"
          className=" absolute right-5 top-2/3 md_hidden leading-3 z-10 rounded-full"
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
