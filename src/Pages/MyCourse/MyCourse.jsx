import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BredCrumb from "../../Components/BredCrumb/BredCrumb";

const MyCourse = () => {
  const { user } = useContext(AuthContext);
  const [bookingCourse, setBookingCourse] = useState([]);

  const url = `http://localhost:5000/checkOut?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBookingCourse(data);
      });
  }, []);

  return (
    <>
      <BredCrumb bradCrumb={"Card Details"} />
      <div className="py-40">
        <div className="container-2">
          <table className="table ">
            <tbody className="">
              {bookingCourse.map((items) => (
                <TableBooks
                  key={items._id}
                  bookingCourse={items}
                  handleDeleteBookings={handleDeleteBookings}
                  handleConfirmBooking={handleConfirmBooking}
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
