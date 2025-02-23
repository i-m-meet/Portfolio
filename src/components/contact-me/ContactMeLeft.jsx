import ContactForm from "./ContactForm";

const ContactMeLeft = () => {
  return (
    <div>
      <div>
        <h2 className="text-orange mb-4 text-3xl">Get in Touch</h2>
        <p className="text-white">
          Feel free to reach out if you'd like to collaborate
          <br />
          you are just few clicks away!
        </p>
      </div>
      <ContactForm/>
    </div>
  );
};

export default ContactMeLeft;
