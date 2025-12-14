import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const NavBer = () => {
  const [open, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [htmlOpen, setHtmlOpen] = useState(false);
  const [jsOpen, setJsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const NavBer = (
    <>
      <li className="text-nu20">
        <NavLink to={"/"}>HOME</NavLink>
      </li>
      <li className="relative group cursor-pointer">
        <div className="flex items-center gap-1 text-nu20">
          HTML & CSS <IoIosArrowDown className="" />
        </div>
        <ul className="absolute top-full left-0 hidden group-hover:block bg-nu10 rounded shadow mt-0.5 w-48">
          <li className="px-4 py-2 text-nu20 bg-nu10">Web Design</li>
          <li className="px-4 py-2 text-nu20 bg-nu10">Login Forms</li>
          <li className="px-4 py-2 text-nu20 bg-nu10">Card Design</li>
        </ul>
      </li>
      <li className="relative group cursor-pointer">
        <div className="flex items-center gap-1 text-nu20">
          JAVASCRIPT <IoIosArrowDown />
        </div>
        <ul className="absolute top-full left-0 hidden group-hover:block bg-[#3E8DA8] rounded shadow mt-0.5 w-52">
          <li className="px-4 py-2 text-nu20 bg-nu10">Dynamic Clock</li>
          <li className="px-4 py-2 text-nu20 bg-nu10">Form Validation</li>
          <li className="px-4 py-2 text-nu20 bg-nu10">Card Slider</li>
        </ul>
      </li>
      <li className="text-nu20">
        <NavLink to={"/about"}>ABOUT US</NavLink>
      </li>
      <li className="text-nu20">CONTACT US</li>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 w-full bg-nu50 z-50 py-5">
      <div className="container-2">
        <div className="flex justify-between items-center">
          <button className="md:hidden text-nu20" onClick={() => setOpen(true)}>
            <IoMenu />
          </button>
          <div className="text-nu20 text-2xl font-semibold">Logo</div>
          <ul className="hidden md:flex items-center gap-6 text-nu10  font-medium">
            {NavBer}
          </ul>
          <div className="flex justify-between items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="text-nu20"
              >
                <IoSearch className="text-[24px]" />
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
            <div className="">
              <Link to={"/register"}>
                <button className="px-4 py-2 bg-primary1 rounded-lg">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="max-w-[1250px] mx-auto h-full flex items-center justify-between ">
       
        <button className="md:hidden text-nu20" onClick={() => setOpen(true)}>
          <IoMenu />
        </button>

       
        <div className="text-nu20 text-2xl font-semibold">Logo</div>

        
        <ul className="hidden md:flex items-center gap-6 text-nu10 text-sm font-medium">
          {NavBer}
        </ul>

        
        <div className="flex justify-between items-center gap-4">
          <div className="relative">
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="text-nu20"
            >
              <IoSearch className="text-[24px]" />
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
          <div className="">
            <Link to={"/register"}>
              <button className="px-4 py-2 bg-primary1 rounded-lg">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div> */}

      {/* Mobile Sidebar */}
      <div className="flex xl:hidden ">
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
                      More
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
      </div>
    </nav>
  );
};

export default NavBer;
