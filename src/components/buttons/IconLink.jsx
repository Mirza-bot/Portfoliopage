function IconLink({ iconLogo, targetLink, linkName }) {
  return (
    <a
      href={targetLink}
      target="_blank"
      rel="noopener noreferrer"
      className=" hover:cursor-pointer mb-3 select-none"
    >
      <img
        src={iconLogo}
        alt={linkName}
        title={linkName}
        className=" hover_scale  select-none"
      />
    </a>
  );
}

export default IconLink;
