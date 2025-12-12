import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };
  const menuItems = [
    {
      name: "Home",
      type: "link",
      path: "/",
    },
    {
      name: "Properties",
      type: "dropdown",
      links: [
        { name: "Demo", path: "javascript:void(0)" },
        { name: "Demo", path: "javascript:void(0)" },
      ],
    },
    {
      name: "Services",
      type: "dropdown",
      links: [
        { name: "Demo", path: "javascript:void(0)" },
        { name: "Demo", path: "javascript:void(0)" },
      ],
    },
    {
      name: "Features",
      type: "dropdown",
      links: [
        { name: "Demo", path: "javascript:void(0)" },
        { name: "Demo", path: "javascript:void(0)" },
      ],
    },
    {
      name: "Agents",
      type: "dropdown",
      links: [
        { name: "Demo", path: "javascript:void(0)" },
        { name: "Demo", path: "javascript:void(0)" },
      ],
    },
    {
      name: "Contact",
      type: "link",
      path: "javascript:void(0)",
    },
  ];

  return (
    <>
      <nav className="bg-nu10 lg:hidden block w-full z-20 top-0 left-0 overflow-hidden">
        <ul className="max-w-[90vw] flex flex-wrap justify-between items-center relative mx-auto py-6">
          <div className="">
            <Link to={"/"} className="flex items-center">
              <span className="fs-three">Urban</span>
              <span className="fs-three text-primary1">Hights</span>
            </Link>
          </div>

          <button
            className="lg:hidden text-lg font-semibold"
            onClick={() => setOpen(true)}
          >
            <IoMenu className="text-[24px]" />
          </button>

          <div
            className={`fixed inset-0 bg-black/50 backdrop-blur-sm transform transition-all duration-500 ease-in-out ${
              open
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setOpen(false)}
          ></div>

          <div
            className={`fixed top-0 right-0 w-[73%] h-screen bg-black text-nu10 z-50 flex flex-col items-center justify-center gap-8 uppercase transform transition-transform duration-500 ease-in-out ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              className="absolute top-5 right-5 text-[30px]"
              onClick={() => setOpen(false)}
            >
              <IoClose />
            </button>

            <div className="bg-black text-nu10">
              <ul className="space-y-2">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    {item.type === "dropdown" ? (
                      <>
                        <button
                          className="w-full flex items-center gap-2 justify-between py-2"
                          onClick={() => toggleDropdown(index)}
                        >
                          {item.name}
                          <span
                            className={`transition-transform duration-300 ${
                              activeDropdown === index ? "rotate-180" : ""
                            }`}
                          >
                            <IoIosArrowDown />
                          </span>
                        </button>

                        <ul
                          className={`overflow-hidden transition-all duration-500 pl-3 ${
                            activeDropdown === index
                              ? "max-h-40 opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          {item.links.map((sub, i) => (
                            <li key={i}>
                              <Link to={sub.path} className="block py-2">
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link to={item.path} className="block py-2">
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default MobileMenu;
