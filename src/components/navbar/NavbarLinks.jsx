import {Link} from 'react-scroll'

const NavbarLinks = () => {
  const links = [
    { link: "About Me", section: "about" },
    { link: "Skills", section: "skills" },
    { link: "Experience", section: "experience" },
    { link: "Projects", section: "projects" },
    { link: "Contact", section: "contact" },
  ];
  return (
    <ul className="lg:text-md sm:bg-cyan/30 left-[50%] flex -translate-x-[50%] gap-4 py-4 text-center font-bold text-white backdrop-blur-lg sm:absolute sm:top-[120%] sm:w-full sm:flex-col sm:text-xl lg:relative lg:flex-row lg:bg-black">
      {links.map((link, index) => {
        return (
          <li key={index} className="group">
            <Link
              to={link.section}
              smooth={true}
              spy={true}
              duration={500}
              offset={-130}
              className="hover:text-cyan cursor-pointer text-white transition-all duration-500"
            >
              {link.link}
            </Link>
            <div className="bg-cyan mx-auto h-[1px] w-0 transition-all duration-500 group-hover:w-full"></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
