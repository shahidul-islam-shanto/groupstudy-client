import React from "react";
import { Link } from "react-router-dom";

const Dropdown = () => {
  return (
    <>
      <ul className="absolute bg-white p-3 w-52 top-6 transform scale-0 group-hover:scale-100 transition duration-300 ease-in-out origin-top shadow-lg z-50">
        <li className="text-sm hover:bg-secondary1 duration-300 leading-8 px-2 py-1 mb-3">
          <Link to={"javascript:void(0)"}>Demo</Link>
        </li>
        <li className="text-sm hover:bg-secondary1 duration-300 leading-8 px-2 py-1 mb-3">
          <Link to={"javascript:void(0)"}>Demo</Link>
        </li>
      </ul>
    </>
  );
};

export default Dropdown;
