import SingleContactSocial from "./SingleContactSocial";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";




const ContactSocials = () =>{
  return (
    <div className="flex gap-4 ">
<SingleContactSocial link="https://github.com/i-m-meet" Icon={FiGithub }/>
<SingleContactSocial link="https://www.linkedin.com/in/i-m-meet/" Icon={FaLinkedinIn }/>
<SingleContactSocial link="https://www.instagram.com/_i_meet/" Icon={FaInstagram }/>
    </div>
  );
}

export default ContactSocials