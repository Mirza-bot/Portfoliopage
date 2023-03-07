import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import {
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiCss3,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
} from "react-icons/si";

function IconLink({ targetLink, linkName, addClass }) {
  const icon = (iconName) => {
    const style = "hover_scale select-none " + addClass;
    switch (iconName) {
      case "GitHub": {
        return <AiFillGithub className={style} />;
      }
      case "LinkedIn": {
        return <AiFillLinkedin className={style} />;
      }
      case "JavaScript": {
        return <SiJavascript className={style} />;
      }
      case "HTML5": {
        return <SiHtml5 className={style} />;
      }
      case "CSS3": {
        return <SiCss3 className={style} />;
      }
      case "TailwindCss": {
        return <SiTailwindcss className={style} />;
      }
      case "React": {
        return <SiReact className={style} />;
      }
      case "NodeJS": {
        return <SiNodedotjs className={style} />;
      }
      case "MongoDB": {
        return <SiMongodb className={style} />;
      }
    }
  };

  return (
    <a
      href={targetLink}
      title={linkName}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:cursor-pointer mb-3 select-none text-primaryText"
    >
      {icon(linkName)}
    </a>
  );
}

export default IconLink;
