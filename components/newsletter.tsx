"use client";

<<<<<<< HEAD
import React, { useState,useEffect, FormEvent } from "react";

export const Newsletter = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/newsletter`, {
=======
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export const Newsletter = () => {
 /*  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("api/newsletter", {
>>>>>>> origin/main
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          email,
        }),
      });
      if (res.ok) {
        setEmail("");
<<<<<<< HEAD
        setMessage("Thank you for subscribing!");
        console.log("kartall");
      } else {
        setMessage("An error occurred. Please try again.");
        console.log("an eeror ocuured");
=======
        toast.success("Thank you for email subsciption.");
      }
      if (!res.ok) {
        toast.error("An error occurred.");
        return;
>>>>>>> origin/main
      }
    } catch (error) {
      console.log(error);
    }
<<<<<<< HEAD
  };

  useEffect(() => {
    if (message !== "") {
      const timer = setTimeout(() => {
        setMessage("");
      }, 4000); 
      return () => clearTimeout(timer);
    }
  }, [message]); // 

  return (
    <>
      <div className="pb-8">
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center pb-4   "
        >
          <div>
            <input
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="border border-neutral-500 w-72 mmd:w-48  text-black opacity-80 text-sm 
            p-3 border-r-0 shadow-none outline-none  "
              placeholder="Your email adress"
            />
          </div>
          <button
            type="submit"
            className="border bg-black opacity-80 text-white p-[15px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </button>
        </form>
        <div className="text-green-700 font-light"> {message} </div>
      </div>
=======
  }; */

  return (
    <>
      <form
       // onSubmit={handleSubmit}
        className="flex justify-center items-center pb-12   "
      >
        <div>
          <input
            type="email"
     /*        value={email}
            onChange={(e) => setEmail(e.target.value)} */
            className="border border-neutral-500 w-72 mmd:w-48  text-black opacity-80 text-sm 
            p-3 border-r-0 shadow-none outline-none  "
            placeholder="Your email adress"
          />
        </div>
        <button
          type="submit"
          className="border bg-black opacity-80 text-white p-[15px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </button>
      </form>
      <Toaster />
>>>>>>> origin/main
    </>
  );
};
