/**
 *
 * @param {string} buttonName takes a string that displays the value inside the button.
 * @param {string} alternative takes a boolean value to determine if it shows the alternative design or the standard one.
 * @param {string} addClass takes css classes inline from the component tag to effect the component.
 * @returns
 */
function BasicBtn({ buttonName, alternative, addClass, type }) {
  const style1 = ` bg-primary-dark  hover:bg-primary-light active:bg-secondary-light `;
  const style2 = ` bg-secondary-dark hover:bg-secondary-light active:bg-primary-light `;

  const checkForAddedClasses = (addedClass) => {
    if (!addedClass) {
      return "px-3 py-2";
    } else return addedClass;
  };

  return (
    <button
      type={type}
      className={`${!alternative ? style1 : style2}  ${checkForAddedClasses(
        addClass
      )} text_style1 text-primaryText font-semibold select-none rounded-lg mt-2 active:border-primaryText active:ring-2 ring-primaryText transition-all ease-in-out duration-150`}
    >
      {buttonName}
    </button>
  );
}

export default BasicBtn;
