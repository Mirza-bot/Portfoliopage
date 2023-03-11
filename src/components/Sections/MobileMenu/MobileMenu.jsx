import { Link } from "react-scroll";
import IconLink from "../../buttons/IconLink";
import "./styles.css";
function MobileMenu({ toggle, setToggle }) {
  return (
    <div
      className={
        (toggle ? "" : "-translate-y-full") +
        " mobile_nav_bg absolute top-0 left-0 w-full bg-secondary-light  transition-all duration-500 ease-out border-b-2 border-primaryText"
      }
    >
      <div className="text-primaryText absolute right-6 top-4"></div>
      <div className="items-center mx-auto pt-32 flex flex-col w-3/4 max-w-screen-sm gap-10 justify-center text-white">
        <div className="flex justify-between w-24">
          <IconLink
            linkName={"GitHub"}
            addClass={"text-4xl text-white hover:text-primaryText"}
            targetLink={"https://github.com/Mirza-bot"}
          />
          <IconLink
            linkName={"LinkedIn"}
            addClass={"text-4xl text-white hover:text-primaryText"}
            targetLink={"http://linkedin.com/in/mirzamalkoc"}
          />
        </div>
        <div className="p-5 text-2xl">
          <Link
            onClick={() => {
              setToggle(!toggle);
            }}
            activeClass="underline text-primaryText"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="transition-all duration-200 hover:cursor-pointer hover:text-primaryText select-none "
          >
            About Me
          </Link>
        </div>
        <div className="p-5 text-2xl">
          <Link
            onClick={() => {
              setToggle(!toggle);
            }}
            activeClass="underline text-primaryText"
            to="work"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="transition-all duration-200 hover:cursor-pointer hover:text-primaryText select-none"
          >
            Projects
          </Link>
        </div>
        <div className="p-5 text-2xl">
          <Link
            onClick={() => {
              setToggle(!toggle);
            }}
            activeClass="underline text-primaryText"
            to="contact"
            spy={true}
            smooth={true}
            offset={-130}
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
