import { HiOutlineMail } from "react-icons/hi";
// import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
      <SingleInfo text="sumeet.bx5@gmail.com" Image={HiOutlineMail} />
      {/* <SingleInfo text="phone number" Image={FiPhone}/> */}
      <SingleInfo text="Ontario, Canada" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
