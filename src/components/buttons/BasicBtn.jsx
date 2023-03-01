function BasicBtn({ buttonName }) {
  return (
    <button
      className={
        "rounded-lg mt-2 px-3 py-2 text-primaryText bg-primary  hover:bg-primary-dark active:bg-secondary active:border-primaryText active:ring-2 ring-primaryText"
      }
    >
      {buttonName}
    </button>
  );
}

export default BasicBtn;
