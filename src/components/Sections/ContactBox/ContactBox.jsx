import BasicBtn from "../../buttons/BasicBtn";
import { useState } from "react";

/**
 * A simple contact form to send to Mailbox
 * Target: "https://form.taxi/s/g4xknwz9"
 * Name, E-Mail and a Message input
 * @returns a contact form
 */
function ContactBox() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [success, setSuccess] = useState(false);

  const sendData = async () => {
    try {
      const response = await fetch("https://form.taxi/s/g4xknwz9", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ name, email, message }).toString(),
      });

      setSuccess(response.ok);
    } catch (error) {
      console.error(error);
    }

    // setName("");
    // setEmail("");
    // setMessage("");
  };

  return (
    <div id="contact">
      {success ? (
        <div className="bg-primary-dark border-t-2 border-primaryText flex flex-col items-center py-32 mt-20 sm:mt-60 px-10">
          <h3 className="select-none text-3xl text-center mb-10 text-primaryText">
            {"{Thank You}"}
          </h3>
          <p className="text-primaryText text-xl sm:w-3/4 lg:w-1/2">
            Thank you for your message! I will get back to you shortly. In the
            meantime, feel free to browse my portfolio and learn more about my
            work.
            <br /> <br />
            Best regards, <br />
            Malkoc Mirza
          </p>
        </div>
      ) : (
        <div className=" bg-primary-dark border-t-2 border-primaryText flex flex-col items-center pt-5 sm:pb-10 sm:px-10 mt-20 sm:mt-60 ">
          <h3 className="select-none text-3xl text-center sm:mb-10 mb-5 text-primaryText">
            {"{Contact Me}"}
          </h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendData();
            }}
            action="none"
            className="flex flex-col items-center gap-4 w-3/4 mb-5 text_style2 text-white"
          >
            <p className="text_style2 text-primaryText py-2 bg-secondary-light p-3 rounded-md sm:mb-5 mb-3">
              If you're interested in discussing your next software development
              project or want to learn more about my experience and skills,
              don't hesitate to reach out. I'm always excited to connect with
              other professionals in the industry and explore new opportunities.
            </p>
            <input
              placeholder="Name"
              name="Name"
              className="bg-secondary-light ring-1 ring-primaryText rounded-sm pl-2 w-full"
              type="text"
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
            <input
              placeholder="E-Mail"
              name="Email"
              className="bg-secondary-light ring-1 ring-primaryText rounded-sm pl-2 w-full"
              type="email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
            <textarea
              placeholder="Message"
              name="Nachricht"
              className="bg-secondary-light ring-1 ring-primaryText rounded-sm pl-2 w-full"
              cols="30"
              rows="10"
              required
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              value={message}
            ></textarea>
            <BasicBtn
              buttonName={"Send"}
              alternative={false}
              addClass={"mb-10 sm:mb-0 px-10 py-3"}
              type={"submit"}
            />
          </form>
        </div>
      )}
    </div>
  );
}

export default ContactBox;
