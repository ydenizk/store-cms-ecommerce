"use client";

import { ArrowRight } from "lucide-react";
import React, { useState, FormEvent, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export const Newsletter = () => {
  const [email, setEmail] = useState<string>("");
  // Keeping the useState for message in case you want to use it for additional feedback
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Adjust the URL to match your API endpoint structure
      // Using process.env.NEXT_PUBLIC_API_URL if you have different environments and need to switch between them
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/newsletter`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setEmail("");
        toast.success("Thank you for subscribing!");
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred.");
    }
  };

  // Optional: Use useEffect to clear message after a delay if using internal state for messages
  useEffect(() => {
    if (message !== "") {
      const timer = setTimeout(() => {
        setMessage("");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <>
      <form onSubmit={handleSubmit} className="flex justify-center items-center pb-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-neutral-500 w-72 mmd:w-48 text-black opacity-80 text-sm p-3 border-r-0 shadow-none outline-none"
            placeholder="Your email address"
            required
          />
        </div>
        <button type="submit" className="border bg-black opacity-80 text-white p-[11px] transition hover:opacity-95">
          {/* SVG icon for the button */}
          <ArrowRight />
        </button>
      </form>
      {/* Display internal message if used */}
      <div className="text-green-700 font-light">{message}</div>
      <Toaster />
    </>
  );
};
