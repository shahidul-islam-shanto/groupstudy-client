import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BredCrumb from "../../Components/BredCrumb/BredCrumb";
import TableCourse from "./TableCourse";

const MyCourse = () => {
  const { user } = useContext(AuthContext);
  const [bookingCourse, setBookingCourse] = useState([]);

  const url = `http://localhost:5000/checkOut?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBookingCourse(data);
      });
  }, [url]);

  const handleDeleteCourse = (id) => {
    const proceed = confirm("Are you sure this item is delete?");
    if (proceed) {
      fetch(`http://localhost:5000/checkOut/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          if (data.deletedCount > 0) {
            alert("item delete");
            const remaining = bookingCourse.filter((items) => items._id !== id);
            setBookingCourse(remaining);
          }
        });
    }
  };

  return (
    <>
      <div className="">
        <BredCrumb bredCrumb={"My Course User"} />
      </div>
      <div className="py-40">
        <div className="container-2">
          <table className="table flex justify-between">
            <tbody className="">
              {bookingCourse.map((items) => (
                <TableCourse
                  key={items._id}
                  bookingCourse={items}
                  handleDeleteCourse={handleDeleteCourse}
                  // handleConfirmBooking={handleConfirmBooking}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyCourse;
