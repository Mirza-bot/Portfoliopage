import "./styles.css";

function Navbar() {
  return (
    <div
      id="nav_bg"
      className="border-b-2 border-primaryText sticky top-0 z-50 bg-primary-dark"
    >
      <div id="nav" className="md_hidden flex w-4/5 mx-auto justify-between">
        <div className="my-2">
          <a target="_self" href="/" className=" hover:cursor-pointer">
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
        <div className="flex gap-20 mt-1 text-white">
          <div className="p-5 ">
            <span className="hover:cursor-pointer hover:text-primaryText md_hidden select-none ">
              About Me
            </span>
          </div>
          <div className="p-5">
            <span className="hover:cursor-pointer hover:text-primaryText md_hidden select-none">
              Projects
            </span>
          </div>
          <div className="p-5">
            <span className=" hover:cursor-pointer hover:text-primaryText md_hidden select-none">
              Contact
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;