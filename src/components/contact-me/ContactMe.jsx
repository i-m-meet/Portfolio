import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";

const ContactMe = () => {
  return (
    <div
      id="contact"
      className="mx-auto mt-[100px] max-w-[1200px] items-center justify-center px-4"
    >
      <h2 className="text-cyan mb-10 text-center text-6xl">Contact Me</h2>
      <div className="bg-brown rounded:2xl flex justify-between gap-24 p-8 sm:flex-col lg:flex-row">
        <ContactMeLeft />
        <ContactMeRight />
      </div>
    </div>
  );
};

export default ContactMe;
