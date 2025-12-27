import React from "react";
import BredCrumb from "../../Components/BredCrumb/BredCrumb";

const CheckOut = () => {
  return (
    <div>
      <div className="">
        <BredCrumb bredCrumb={"Check Out"} />
      </div>
      <div className="xl:py-[130px] lg:py-[110px] md:py-[90px] sm:py-[70px] py-[60px]">
        <div className="container-2">
          <form className="px-16 py-16 bg-nu60 rounded-2xl">
            <div className="grid grid-cols-12 gap-6 mb-6">
              <div className="col-span-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-4 mb-4 bg-nu10 border border-nu60 placeholder:text-nu40 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
              <div className="col-span-6">
                <input
                  type="date"
                  name="date"
                  placeholder="Your Phone"
                  className=" w-full px-4 py-4 mb-4 bg-nu10 border border-nu60 placeholder:text-nu40 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
              <div className="col-span-6">
                <input
                  type="number"
                  name="number"
                  placeholder="Your Phone"
                  className="w-full px-4 py-4 mb-4 bg-nu10 border border-nu60 placeholder:text-nu40 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
              <div className="col-span-6">
                <input
                  type="text"
                  name="title"
                  placeholder="Your Title"
                  className="w-full px-4 py-4 mb-4 bg-nu10 border border-nu60 placeholder:text-nu40 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
              <div className="col-span-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-4 mb-4 bg-nu10 border border-nu60 placeholder:text-nu40 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              <div className="col-span-6">
                <input
                  type="number"
                  name="price"
                  placeholder="Your price"
                  className="w-full px-4 py-4 mb-4 bg-nu10 border border-nu60 placeholder:text-nu40 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
            </div>
            <div className="">
              <textarea
                name="message"
                rows="10"
                placeholder="Your Message"
                className="w-full px-4 py-4 mb-4 border bg-nu10 border-nu60 placeholder:text-nu40 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
              ></textarea>
            </div>
            <div className="">
              <input
                type="submit"
                className="px-6 py-3 bg-primary1 rounded-xl w-full text-center text-nu10 font-semibold cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
