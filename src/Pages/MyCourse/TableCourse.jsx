import React from "react";
import { IoClose } from "react-icons/io5";

const TableCourse = ({ bookingCourse, handleDeleteCourse }) => {
  const { _id, img, courseName, name, email, price, date } = bookingCourse;
  return (
    <div>
      <tr className="flex justify-between gap-4 bg-nu60 mb-4 rounded-lg">
        <th>
          <button
            onClick={() => handleDeleteCourse(_id)}
            className="px-2 py-2 bg-nu20 inline-block rounded-full"
          >
            <IoClose className="text-nu10 text-[24px] font-bold" />
          </button>
        </th>
        <td>
          <div className="flex items-center gap-6">
            <div className="">
              {img && (
                <img
                  className="w-12 h-12 rounded-full"
                  src={img}
                  alt="Avatar Tailwind CSS Component"
                />
              )}
            </div>

            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{courseName}</div>
            </div>
          </div>
        </td>
        <td>
          <p className="text-nu20">{email}</p>
        </td>
        <td>
          <p className="text-nu20">${price}</p>
        </td>
        <td>
          <p>{date}</p>
        </td>
        <td>
          {status === "Confirm" ? (
            <button className="px-4 py-2 bg-green-600 rounded-md text-nu10">
              Confrim
            </button>
          ) : (
            <button
              onClick={() => {
                // console.log(_id);
                handleConfirmBooking(_id);
              }}
              className="px-4 py-2 bg-primary1 rounded-md text-nu10"
            >
              Pending
            </button>
          )}
        </td>
      </tr>
    </div>
  );
};

export default TableCourse;
