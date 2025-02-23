const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];
const Footer = () => {
  return (
    <div className="px-4">
      <div className="bg-lightGray mt-24 h-[1px] w-full"></div>
      <div className="mx-auto mt-4 max-w-[1200px] justify-between sm:hidden md:flex">
        <p className="text-lightGray text-3xl">Sumeet</p>
        <ul className="text-lightGray flex gap-4 text-xl">
          {links.map((item, index) => {
            return (
              <li key={index}>
                <a
                  href="#"
                  className="transition-all duration-500 hover:text-white"
                >
                  {item.link}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="text-lightBrown mx-auto mt-2 mb-12 max-w-[1200px]  text-right text-sm">
        @ 2024 Sumeet | All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
