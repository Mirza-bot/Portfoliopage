import "./styles.css";
import { Link } from "react-scroll";
import IconLink from "../../buttons/IconLink";
function MobileMenu({ showMenu, toggleMenu }) {
  const menuVisibility = () => {
    if (showMenu !== true) {
      return "mobile_menu ";
    } else return "mobile_menu_hidden";
  };

  return (
    <div
      className={
        menuVisibility() + " max-w-screen-sm transition-all duration-100"
      }
    >
      <div className="w-10 absolute  right-7 top-5  text-primaryText"></div>
      <div className="items-center mx-auto pt-32 flex flex-col w-3/4 max-w-screen-sm gap-10 justify-center text-white transition-all duration-200">
        <div className="flex  mx-auto justify-between">
          <IconLink
            linkName={"GitHub"}
            addClass={"text-4xl text-white"}
            targetLink={"https://github.com/Mirza-bot"}
          />
          <IconLink
            linkName={"LinkedIn"}
            addClass={"text-4xl text-white"}
            targetLink={"http://linkedin.com/in/mirzamalkoc"}
          />
        </div>
        <div className="p-5 text-2xl">
          <Link
            onClick={() => {
              toggleMenu();
            }}
            activeClass="underline text-primaryText"
            to="about"
            spy={true}
            smooth={true}
            offset={-600}
            duration={500}
            className="transition-all duration-200 hover:cursor-pointer hover:text-primaryText select-none "
          >
            About Me
          </Link>
        </div>
        <div className="p-5 text-2xl">
          <Link
            onClick={() => {
              toggleMenu();
            }}
            activeClass="underline text-primaryText"
            to="work"
            spy={true}
            smooth={true}
            offset={-600}
            duration={500}
            className="transition-all duration-200 hover:cursor-pointer hover:text-primaryText select-none"
          >
            Projects
          </Link>
        </div>
        <div className="p-5 text-2xl">
          <Link
            onClick={() => {
              toggleMenu();
            }}
            activeClass="underline text-primaryText"
            to="contact"
            spy={true}
            smooth={true}
            offset={-600}
            duration={500}
            className="transition-all duration-200 hover:cursor-pointer hover:text-primaryText  select-none"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
