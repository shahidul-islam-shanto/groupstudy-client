import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

const NavBer = () => {
  const [open, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [htmlOpen, setHtmlOpen] = useState(false);
  const [jsOpen, setJsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-[70px] bg-nu10 z-50">
      <div className="max-w-[1250px] mx-auto h-full flex items-center justify-between px-6">
        {/* Menu Icon (Mobile) */}
        <button className="md:hidden text-nu20" onClick={() => setOpen(true)}>
          <IoMenu />
        </button>

        {/* Logo */}
        <div className="text-nu20 text-2xl font-semibold">Logo</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-white text-sm font-medium">
          <li className="text-nu20">HOME</li>

          {/* HTML & CSS */}
          <li className="relative group cursor-pointer">
            <div className="flex items-center gap-1 text-nu20">
              HTML & CSS <IoIosArrowDown className="" />
            </div>
            <ul className="absolute top-full left-0 hidden group-hover:block bg-[#3E8DA8] rounded shadow mt-0.5 w-48">
              <li className="px-4 py-2 bg-nu20">Web Design</li>
              <li className="px-4 py-2 bg-nu20">Login Forms</li>
              <li className="px-4 py-2 bg-nu20">Card Design</li>
            </ul>
          </li>

          {/* JavaScript */}
          <li className="relative group cursor-pointer">
            <div className="flex items-center gap-1 text-nu20">
              JAVASCRIPT <IoIosArrowDown />
            </div>
            <ul className="absolute top-full left-0 hidden group-hover:block bg-[#3E8DA8] rounded shadow mt-2 w-52">
              <li className="px-4 py-2 bg-nu20">Dynamic Clock</li>
              <li className="px-4 py-2 bg-nu20">Form Validation</li>
              <li className="px-4 py-2 bg-nu20">Card Slider</li>
            </ul>
          </li>

          <li className="text-nu20">ABOUT US</li>
          <li className="text-nu20">CONTACT US</li>
        </ul>

        {/* Search */}
        <div className="relative">
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="text-nu20"
          >
            <IoSearch />
          </button>
          {showSearch && (
            <div className="absolute right-0 mt-4 bg-nu10 p-3 rounded shadow">
              <input
                type="text"
                placeholder="Search..."
                className="w-[400px] px-3 py-2 rounded outline-none"
              />
            </div>
          )}
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-[#3E8DA8] p-5 transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between text-white mb-6">
          <span className="text-xl font-semibold">Logo</span>
          <button onClick={() => setOpen(false)}>
            <IoCloseSharp />
          </button>
        </div>

        <ul className="space-y-3 text-white">
          <li>HOME</li>

          <li>
            <button
              onClick={() => setHtmlOpen(!htmlOpen)}
              className="flex items-center justify-between w-full"
            >
              HTML & CSS <IoIosArrowDown />
            </button>
            {htmlOpen && (
              <ul className="ml-4 mt-2 space-y-2">
                <li>Web Design</li>
                <li>Login Forms</li>
                <li>
                  <button
                    onClick={() => setMoreOpen(!moreOpen)}
                    className="flex items-center gap-1"
                  >
                    More{" "}
                    <ChevronRight className={`${moreOpen && "rotate-90"}`} />
                  </button>
                  {moreOpen && (
                    <ul className="ml-4 mt-2 space-y-1">
                      <li>Neumorphism</li>
                      <li>Pre-loader</li>
                      <li>Glassmorphism</li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          <li>
            <button
              onClick={() => setJsOpen(!jsOpen)}
              className="flex items-center justify-between w-full"
            >
              JAVASCRIPT <IoIosArrowDown />
            </button>
            {jsOpen && (
              <ul className="ml-4 mt-2 space-y-2">
                <li>Dynamic Clock</li>
                <li>Form Validation</li>
                <li>Card Slider</li>
              </ul>
            )}
          </li>

          <li>ABOUT US</li>
          <li>CONTACT US</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBer;
