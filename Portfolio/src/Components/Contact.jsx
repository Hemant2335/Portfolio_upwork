import React, { useState } from "react";
import { FiMessageSquare } from "react-icons/fi";

const Contact = () => {
  const [Email, setEmail] = useState("");

  return (
    <div className="w-full h-fit md:h-screen mt-[10vh] md:mt-[50vh]  cont-title">
      <div className="flex items-center info gap-[1vh] text-sm rounded-2xl border-2 text-gray-400 w-fit h-fit py-2 border-gray-400 px-5">
        <FiMessageSquare />
        <h2 className=" font-Jetbrains">Contact</h2>
      </div>
      <div className="w-full font-bold text-left text-3xl mt-[5vh] md:mt-[10vh] ">
        <div className="md:flex items-center mt-[2vh] gap-[2vh] font-bold text-4xl">
          <h1 className=" font-bold text-3xl">Let's Work</h1>
          <h1 className="font-bold text-3xl text-[#097969]">Together</h1>
        </div>
      </div>

      <div className="mt-[8vh] md:w-[50vw] h-fit gap-[5vh] flex flex-col  md:grid grid-cols-2 ">
        {/* Name filed */}
        <div className="w-full text-left ">
          <h1 className="font-bold">FULL NAME</h1>
          <div className=" border-b-2   flex md:w-[45vh]">
            <input
              type="text"
              className=" mt-2 w-fit rounded-lg py-2 focus:outline-0 font-montserrat  font-medium "
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Your full name"
            />
          </div>
        </div>
        <div className="w-full text-left ">
          <h1 className="font-bold">EMAIL</h1>
          <div className=" border-b-2  flex md:w-[45vh]">
            <input
              type="email"
              className=" mt-2 w-full rounded-lg py-2 focus:outline-0 font-montserrat  font-medium "
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Your email address"
            />
          </div>
        </div>
        <div className="w-full text-left ">
          <h1 className="font-bold">PHONE</h1>
          <div className=" border-b-2  flex md:w-[45vh]">
            <input
              type="text"
              className=" mt-2 w-full rounded-lg py-2 focus:outline-0 font-montserrat  font-medium "
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Your phone number"
            />
          </div>
        </div>
        <div className="w-full text-left ">
          <h1 className="font-bold">BUDGET</h1>
          <div className=" border-b-2  flex md:w-[45vh]">
            <input
              type="number"
              className=" mt-2 w-full rounded-lg py-2 focus:outline-0 font-montserrat  font-medium "
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Your budget"
            />
          </div>
        </div>
        <div className="md:w-[50vw] text-left ">
          <h1 className="font-bold">MESSAGE</h1>
          <div className=" border-b-2  flex md:w-full">
            <input
              type=""
              className=" mt-2  w-full rounded-lg py-2 focus:outline-0 font-montserrat  font-medium "
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="write your message here"
            />
          </div>
        </div>
      </div>
      <div className="w-full text-left mt-[5vh] md:mt-[10vh]">
        <button className="md:w-[15vw] flex justify-center items-center p-[2vh]  md:p-[4vh] rounded-lg bg-[#097969] text-white font-bold">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Contact;
