function BasicBtn({ buttonName, alternative, addClass }) {
  return !alternative ? (
    <button
      className={`text-primaryText font-semibold select-none rounded-lg mt-2 px-3 py-2 ${addClass} bg-primary-dark  hover:bg-primary-light active:bg-secondary-light active:border-primaryText active:ring-2 ring-primaryText transition-all ease-in-out duration-150`}
    >
      {buttonName}
    </button>
  ) : (
    <button
      className={`text-primaryText font-semibold select-none rounded-lg mt-2 px-3 py-2 ${addClass} bg-secondary-dark hover:bg-secondary-light active:bg-primary-light active:border-primaryText active:ring-2 ring-primaryText transition-all ease-in-out duration-150`}
    >
      {buttonName}
    </button>
  );
}

export default BasicBtn;
