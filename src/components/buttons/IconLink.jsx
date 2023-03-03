function IconLink({ iconLogo, targetLink, linkName }) {
  return (
    <a
      href={targetLink}
      target="_blank"
      rel="noopener noreferrer"
      className=" hover:cursor-pointer mb-3"
    >
      <img
        src={iconLogo}
        alt={linkName}
        title={linkName}
        className=" hover_scale "
      />
    </a>
  );
}

export default IconLink;
