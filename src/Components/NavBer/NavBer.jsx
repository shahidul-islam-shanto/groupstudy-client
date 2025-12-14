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
          <button className="lg:hidden text-nu20" onClick={() => setOpen(true)}>
            <IoMenu className="text-[24px]" />
          </button>
          <div className="text-nu20 text-2xl font-semibold">Logo</div>
          <ul className="hidden lg:flex items-center gap-6 text-nu10  font-medium">
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
        {/* Mobile Sidebar */}
        <div className=" flex lg:hidden justify-center items-center">
          <div
            className={`fixed top-0 left-0 h-full w-full bg-primary1 p-5 transition-transform duration-300  ${
              open ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex items-center justify-end text-nu20 mb-6">
              <button onClick={() => setOpen(false)}>
                <span>
                  <IoCloseSharp className="text-[28px]" />
                </span>
              </button>
            </div>

            <ul className="space-y-3 text-nu20 m-auto text-center w-full h-full py-40">
              <li>HOME</li>

              <li>
                <button
                  onClick={() => setJsOpen(!jsOpen)}
                  className="flex items-center justify-center gap-4 w-full duration-500"
                >
                  <span>JAVASCRIPT</span>
                  <IoIosArrowDown className="" />
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
      </div>
    </nav>
  );
};

export default NavBer;
