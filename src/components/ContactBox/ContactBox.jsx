import BasicBtn from "../buttons/BasicBtn";

/**
 * A simple contact form box with:
 * Name, E-Mail and a Message input
 * @returns a a contact form
 */
function ContactBox() {
  return (
    <div className="bg-primary-light ring-2 ring-primaryText w-4/5 sm:w-3/5 mx-auto rounded-md flex flex-col items-center pt-5 pb-10 px-10">
      <p className="text-3xl text-center mb-10 text-primaryText">
        {"{Contact Me}"}
      </p>
      <form className="flex flex-col gap-4 w-full mb-5">
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
      <BasicBtn buttonName={"Send"} alternative="true" addClass={""} />
    </div>
  );
}

export default ContactBox;
