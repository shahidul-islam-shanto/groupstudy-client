import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BredCrumb from "../../Components/BredCrumb/BredCrumb";
import TableCourse from "./TableCourse";
import Swal from "sweetalert2";

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
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/checkOut/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            if (data.deletedCount > 0) {
              const remaining = bookingCourse.filter(
                (items) => items._id !== id
              );
              setBookingCourse(remaining);
            }
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          });
      }
    });
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
