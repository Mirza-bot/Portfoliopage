import BasicBtn from "../buttons/BasicBtn";

/**
 * A simple contact form box with:
 * Name, E-Mail and a Message input
 * @returns a a contact form
 */
function ContactBox() {
  return (
    <div
      id="contact"
      className=" bg-primary-dark ring-2 ring-primaryText  sm:w-3/5 mx-auto sm:rounded-md flex flex-col items-center pt-5 sm:pb-10 px-10 mt-60 sm:mb-32"
    >
      <p className="text-3xl text-center mb-10 text-primaryText">
        {"{Contact Me}"}
      </p>
      <form className="flex flex-col gap-4 w-full mb-5 text_style2">
        <input
          placeholder="Name"
          className="bg-secondary-light ring-1 ring-primaryText rounded-sm pl-2"
          type="text"
        />
        <input
          placeholder="E-Mail"
          className="bg-secondary-light ring-1 ring-primaryText rounded-sm pl-2"
          type="email"
        />
        <textarea
          placeholder="Message"
          className="bg-secondary-light ring-1 ring-primaryText rounded-sm pl-2"
          cols="30"
          rows="10"
        ></textarea>
      </form>
      <BasicBtn
        buttonName={"Send"}
        alternative={false}
        addClass={"mb-10 sm:mb-0"}
      />
    </div>
  );
}

export default ContactBox;
