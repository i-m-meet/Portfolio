import { useState } from "react";
import NavbarBtn from "./NavbarBtn";
import NavbarLinks from "./NavbarLinks";
import NavbarLogo from "./NavbarLogo";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed left-[50%] z-20 mx-auto mt-4 flex w-full max-w-[1300px] -translate-x-[50%] gap-4 px-4">
      <div className="border-orange mx-auto flex w-full max-w-[1200px] items-center justify-between rounded-l-full rounded-r-full border-[0.5px] bg-black p-6">
        <NavbarLogo />
        <div className={`${menuOpen? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>
        <NavbarBtn />
      </div>
      <div className="border-orange flex items-center rounded-full border-[0.5px] bg-black p-6 sm:block lg:hidden">
        <button
          className="border-orange rounded-full border p-3 text-2xl text-white"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
