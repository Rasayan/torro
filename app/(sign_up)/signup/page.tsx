"use client"

import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

export default function LogIn() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedEncryption, setSelectedEncryption] = useState("Who are you?");

    return (
        <div className="w-full h-screen scroll-auto flex flex-col justify-center items-center">
            <div className="w-1/3 h-fit flex flex-col justify-center items-center gap-4 border-1 border-indigo-400 rounded-lg py-7">
                <p className="text-3xl font-semibold">Log In</p>

                <form action="POST" className="w-4/5 flex flex-col justify-center items-start gap-2">
                    <div className="w-full flex flex-col justify-start items-start gap-1">
                        <label className="tracking-wide text-lg">Organization Name</label>

                        <input type="text" className="border-2 border-zinc-500 rounded-lg w-full text-white outline-none px-2 py-1"/>
                    </div>

                    <div className="w-full flex flex-col justify-start items-start gap-1">
                        <label className="tracking-wide text-lg">E-Mail</label>

                        <input type="email" className="border-2 border-zinc-500 rounded-lg w-full text-white outline-none px-2 py-1"/>
                    </div>

                    <div className="w-full flex flex-col justify-start items-start gap-1">
                        <label className="tracking-wide text-lg">Password</label>

                        <input type="password" className="border-2 border-zinc-500 rounded-lg w-full text-white outline-none px-2 py-1"/>
                    </div>

                    <div className="w-full flex flex-col justify-start items-start gap-1">
                        <label className="tracking-wide text-lg">Confirm Password</label>

                        <input type="password" className="border-2 border-zinc-500 rounded-lg w-full text-white outline-none px-2 py-1"/>
                    </div>

                    <div className="flex justify-start items-center mt-2 relative">
                        {/* Dropdown */}
                        <p className="border-2 border-r-0 border-zinc-600 rounded-l-lg px-5 py-1">
                          {selectedEncryption}
                        </p>
                    
                        <button
                          type="button"
                          onClick={() => setShowDropdown(!showDropdown)}
                          className="rounded-r-lg px-5 py-2 border-2 border-indigo-400 bg-indigo-950 text-indigo-300 cursor-pointer hover:bg-indigo-400 hover:text-indigo-950 duration-300"
                        >
                          <IoIosArrowDown />
                        </button>
                    
                        {showDropdown && (
                          <div className="absolute top-10 left-0 bg-zinc-800 rounded-xl px-1 py-2 z-10 border border-zinc-600">
                            {["Data Lender", "Model Trainer"].map((option) => (
                              <p
                                key={option}
                                onClick={() => {
                                  setSelectedEncryption(option);
                                  setShowDropdown(false);
                                }}
                                className="px-4 py-2 w-full hover:bg-zinc-700 rounded-lg cursor-pointer duration-300"
                              >
                                {option}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="w-full h-fit flex justify-center items-center pt-5 gap-3">
                        <button className="px-6 py-2 border-1 border-indigo-400 rounded-lg bg-indigo-950 font-semibold text-indigo-300 cursor-pointer hover:bg-indigo-400 hover:text-indigo-950 duration-200">
                            Lets Go
                        </button>

                        <a  href="/login" className="px-6 py-2 font-semibold text-amber-300 cursor-pointer">
                            Log In
                        </a>
                      </div>

                </form>
            </div>
        </div>
    )
}