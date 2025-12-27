import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import Logins from "../../assets/images/login.png";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        console.log("this is a login", result.user);
        Swal.fire({
          title: "Sing In Successful!",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <div className="bg-nu10 lg:pt-60 py-28 ">
        <div className="container-2">
          <div className="grid grid-cols-12 gap-10 items-center">
            <div className="col-span-6">
              <div className="">
                <img className="w-full" src={Logins} alt="" />
              </div>
            </div>
            <div className="col-span-6">
              <div className=" flex items-center justify-center">
                <div className=" rounded-2xl px-10 py-10 w-full max-w-2xl space-y-4 shadow-lg">
                  <form onSubmit={handleRegister} className="">
                    <h1 className="text-xl font-bold mb-6 text-center">
                      Register your account
                    </h1>
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-1 font-semibold"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your Name..."
                        className="w-full px-3 py-3 mb-4 border border-nu60 rounded-xl bg-nu60 placeholder:text-nu70 outline-none"
                      />
                    </div>
                    {/* Email */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-1 font-semibold"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email..."
                        className="w-full px-3 py-3 mb-4 border border-nu60 rounded-xl bg-nu60 placeholder:text-nu70 outline-none"
                      />
                    </div>

                    {/* Password */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-1 font-semibold"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        placeholder="Enter your password..."
                        className="w-full px-3 py-3 mb-4 border border-nu60 rounded-xl bg-nu60 placeholder:text-nu70 outline-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full text-nu20 py-2 rounded-xl bg-primary1 duration-500 cursor-pointer font-bold"
                    >
                      Register
                    </button>
                  </form>
                  <div className="">
                    <div className="text-center mb-4">
                      <p className="mb-3">Or Sign In with</p>
                      <div className="flex justify-center items-center gap-4">
                        <span className="px-3 py-3 bg-nu60 rounded-full cursor-pointer">
                          <FaFacebookF />
                        </span>
                        <span className="px-3 py-3 bg-nu60 rounded-full cursor-pointer">
                          <FaLinkedinIn />
                        </span>
                        <span className="px-3 py-3 bg-nu60 rounded-full cursor-pointer">
                          <FaGoogle />
                        </span>
                      </div>
                    </div>
                    <div className="text-center">
                      <p>
                        Have an account?
                        <Link
                          className="text-primary1 font-semibold pl-2"
                          to={"/login"}
                        >
                          Log In
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
