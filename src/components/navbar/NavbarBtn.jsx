import { LuArrowDownRight } from "react-icons/lu";
const NavbarBtn = () => {
  return (
    <button className="border-cyan cursor-pointer from-cyan to-orange teansition-all flex items-center gap-1 rounded-full border bg-gradient-to-r px-4 py-2 font-bold text-white duration-500 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50">
      Hire Me
      <div className="sm:hidden md:block">
      <LuArrowDownRight />
      </div>

    </button>
  );
};

export default NavbarBtn;
