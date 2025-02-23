const ContactForm = () => {
  return (
    <div>
      <form action="" className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          required
          className="bg-lightBrown h-12 rounded-lg px-2"
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          className="bg-lightBrown h-12 rounded-lg px-2"
        />
        <textarea
          type="text"
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
