import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  //   const handleSuccess = (e) => {};

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_1ndabos", "template_zw5aaym", form.current, {
        publicKey: "WxS2DzRzTwFxuV_Zx",
      })
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          setSuccess("Message Sent");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <div>
      <p className="text-cyan">{success}</p>
      <form
        action=""
        className="flex flex-col gap-4 text-white"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          type="text"
          name="from_name"
          value={name}
          onChange={handleName}
          placeholder="Your Name"
          required
          className="bg-lightBrown h-12 rounded-lg px-2"
        />
        <input
          type="email"
          name="from_email"
          value={email}
          onChange={handleEmail}
          placeholder="Your Email"
          required
          className="bg-lightBrown h-12 rounded-lg px-2"
        />
        <textarea
          type="text"
          name="message"
          value={message}
          onChange={handleMessage}
          placeholder="Message"
          rows="9"
          cols="50"
          required
          className="bg-lightBrown rounded-lg p-2"
        />
        <button
          type="submit"
          className="border-cyan hover:bg-darkCyan bg-cyan h-12 w-full rounded-lg border text-xl font-bold text-white transition-all duration-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
