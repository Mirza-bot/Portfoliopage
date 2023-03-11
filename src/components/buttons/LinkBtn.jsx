/**
 *
 * @param {string} buttonName takes a string that displays the value inside the button.
 * @param {string} alternative takes a boolean value to determine if it shows the alternative design or the standard one.
 * @param {string} addClass takes css classes inline from the component tag to effect the component.
 * @param {string} btnLink takes a url to target the website when the button is pressed.
 * @returns
 */
function BasicBtn({ buttonName, alternative, addClass, btnLink }) {
  return !alternative ? (
    <a href={btnLink} target="_blank">
      <button
        className={` text_style1 text-primaryText font-semibold select-none rounded-lg mt-2 px-3 py-2 ${addClass} bg-primary-dark  hover:bg-primary-light active:bg-secondary-light active:border-primaryText active:ring-2 ring-primaryText transition-all ease-in-out duration-150`}
      >
        {buttonName}
      </button>
    </a>
  ) : (
    <a href={btnLink} target="_blank">
      <button
        className={`text_style1 text-primaryText font-semibold select-none rounded-lg mt-2 px-3 py-2 ${addClass} bg-secondary-dark hover:bg-secondary-light active:bg-primary-light active:border-primaryText active:ring-2 ring-primaryText transition-all ease-in-out duration-150`}
      >
        {buttonName}
      </button>
    </a>
  );
}

export default BasicBtn;
