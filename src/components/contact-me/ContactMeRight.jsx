import ContactInfo from "./ContactInfo";
import ContactSocials from "./ContactSocials";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <img
        src="../../images/email-image.png"
        alt="contact me"
        className="max-w-[300px]"
      />
      <ContactInfo/>
      <ContactSocials/>
    </div>
  );
};

export default ContactMeRight;
