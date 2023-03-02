function IconLink({ iconLogo, targetLink, linkName }) {
  return (
    <a
      href={targetLink}
      target="_blank"
      rel="noopener noreferrer"
      className=" hover:cursor-pointer"
    >
      <img src={iconLogo} alt={linkName} className=" hover:scale-125 mt-2 " />
    </a>
  );
}

export default IconLink;
