import React, { useState } from "react";
import { FiMessageSquare } from "react-icons/fi";

const Contact = () => {
  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Budget, setBudget] = useState("");
  const [Message, setMessage] = useState("");



  const handlemessage = async()=>{

    if(Email==="" || Name==="" || Phone==="" || Budget==="" || Message===""){
      alert("Please fill all the fields")
    }
    else{
      try {
        const response = await fetch("https://port-backend-hemant2335.vercel.app/sendmessage" , {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          name:Name,
          email:Email,
          phoneno:Phone,
          budget:Budget,
          message:Message
        })
      })
      const data = await response.json();
      if(data?.data === "success" )
      {
        alert("Message sent successfully")
      }
      else
      {
        alert("Something went wrong")
      }
        
      } catch (error) {
          console.log(error);
      }
    }
  }

  return (
    <div className="w-full h-fit md:h-screen mt-[10vh] md:mt-[30vh]  cont-title" id="Contact">
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
                setName(e.target.value);
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
                setPhone(e.target.value);
              }}
              placeholder="Your phone number"
            />
          </div>
        </div>
        <div className="w-full text-left ">
          <h1 className="font-bold">BUDGET</h1>
          <div className=" border-b-2 gap-[2vh]  flex items-center mt-2 md:w-[45vh]">
            <h1>$</h1>
            <input
              type="number"
              className="  w-full rounded-lg py-2 focus:outline-0 font-montserrat  font-medium "
              onChange={(e) => {
                setBudget(e.target.value);
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
                setMessage(e.target.value);
              }}
              placeholder="write your message here"
            />
          </div>
        </div>
      </div>
      <div className="w-full text-left mt-[5vh] md:mt-[10vh]">
        <button className="md:w-[15vw] flex justify-center items-center p-[2vh]  md:p-[2vh] rounded-lg bg-[#097969] text-white font-bold" onClick={()=>handlemessage()}>
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Contact;
