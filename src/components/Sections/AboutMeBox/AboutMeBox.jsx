import "./styles.css";
import IconLink from "../../buttons/IconLink";

/**
 * A component to tell a bit about myself.
 * @returns a card with a max-vh width
 */
function AboutMeCard() {
  return (
    <>
      <div
        id="about"
        className="border-b-2 border-primaryText sm:p-5 py-5 px-2 "
      >
        <div className=" md:w-4/5 mx-auto">
          <span className=" text-3xl select-none  text-primaryText">
            {"{"}About Me{"}"}
          </span>
          <div className="portrait:md_displayed md_displayed float-right flex justify-between text-3xl sm:w-26 w-20  mr-3">
            <IconLink
              linkName={"GitHub"}
              targetLink={"https://github.com/Mirza-bot"}
            />
            <IconLink
              linkName={"LinkedIn"}
              targetLink={"http://linkedin.com/in/mirzamalkoc"}
            />
          </div>
          <div className=" grid grid-flow-row-dense grid-cols-12 mt-8 p-2 gap-3">
            <div className="col-span-10 col-start-2 lg:row-span-2 md:row-span-3 md:col-start-1 md:col-span-4 md:row-start-1 md:mr-3 md:max-h-44">
              <div
                id="avatar"
                className="bg-primary-dark select-none ring-2 ring-primaryText rounded-xl avatar_img_min_size flex justify-center mx-auto"
              >
                <img
                  className=" max-h-44 avatar_img_max_size"
                  src="/Mirzmoji.svg"
                  alt="Mirza Emoji"
                />
              </div>
            </div>
            <div className="col-start-2 col-span-10 md:col-start-5 md:col-span-7 lg:col-start-5 lg:col-span-7 lg:row-start-1  lg:ml-5">
              <p className="py-5 md:px-5 md:py-0 mt-5 sm:mt-0 text_style2 text-white text-lg">
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
            <div className="bg-primary-dark pt-3 pb-1 px-3 ring-2 ring-primaryText  row-start-4 col-start-1 col-span-12 lg:mt-20  rounded-md  my-10 ">
              <span className="text-lg text-primaryText absolute -translate-y-12">
                {"{Tech-Stack}"}
              </span>
              <div className=" flex flex-wrap justify-evenly gap-4 sm:text-4xl text-3xl">
                <IconLink
                  linkName={"JavaScript"}
                  targetLink="https://www.javascript.com/"
                />
                <IconLink
                  linkName={"HTML5"}
                  targetLink="https://de.wikipedia.org/wiki/HTML5"
                />
                <IconLink
                  linkName={"CSS3"}
                  targetLink="https://en.wikipedia.org/wiki/CSS"
                />
                <IconLink
                  linkName={"React"}
                  targetLink="https://reactjs.org/"
                />
                <IconLink
                  linkName={"TailwindCss"}
                  targetLink="https://tailwindcss.com/"
                />
                <IconLink
                  linkName={"NodeJS"}
                  targetLink="https://nodejs.org/"
                />
                <IconLink
                  linkName={"MongoDB"}
                  targetLink="https://www.mongodb.com/"
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
