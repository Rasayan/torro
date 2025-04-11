"use client"

import { IoIosArrowDown } from "react-icons/io";

import { RxCross2 } from "react-icons/rx";


import { useState } from "react";

export default function DataForm() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedEncryption, setSelectedEncryption] = useState("Select from list");
    const [approved, setApproved] = useState(false);
    const [sampleFile, setSampleFile] = useState(null);
    const [uploadFile, setUploadFile] = useState(null);
    const [showEncryptedArea, setShowEncryptedArea] = useState(false);

    return (
        <div className="w-full h-screen scroll-auto flex flex-col justify-center items-center">
            <div className="w-3/5 flex justify-start items-center px-3 py-4 gap-8">
                <div className="w-15 h-15 rounded-full border-3 border-gray-500"></div>

                <div className="flex flex-col justify-center items-start">
                    <p className="text-3xl tracking-wider">REDDIT INC.</p>

                    <div className="flex justify-start items-center gap-4">
                        <p className="tracking-wider">node: 107</p>

                        <p className="tracking-wider">credit: 2.3k</p>
                    </div>
                </div>
            </div>

            <form className="w-3/5 h-[70vh] flex justify-start items-center px-3 py-4 gap-8">
                <div className="w-1/3 h-full border-r-2 border-r-gray-500 flex flex-col justify-start items-start px-2 py-5">
                    <div id="clause_1" className="flex flex-col justify-start items-start">
                        <label className="tracking-wide text-lg px-2">I hereby approve that the data provided by me is exactly what it is showcased in the example and that the entire file is legitimate data and no false data has been incorporated.</label>

                        <div className="mt-4">
                            <div
                                onClick={() => setApproved(!approved)}
                                    className={`w-16 h-8 rounded-full cursor-pointer flex items-center justify-between px-2 text-white font-bold text-sm transition-colors duration-300 ${
                                    approved ? 'bg-green-600' : 'bg-red-600'
                                }`}
                            >
                                <span className={`${approved ? 'opacity-100' : 'opacity-30'} transition-opacity duration-300`}>✅</span>
                                <span className={`${approved ? 'opacity-30' : 'opacity-100'} transition-opacity duration-300`}>❌</span>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="w-3/5 h-full overflow-y-auto flex flex-col justify-start items-start px-2 py-5 gap-4 custom-scroll">

                    <div id="clause_1" className="w-full flex flex-col justify-start items-start">
                        <label className="tracking-wide text-lg">Title /-</label>

                        <input type="text" className="border-2 border-zinc-500 rounded-lg w-full text-white outline-none px-2 py-1"/>
                    </div>

                    <div id="clause_1" className="w-full flex flex-col justify-start items-start">
                        <label className="tracking-wide text-lg">Data Description /-</label>

                        <textarea cols={100} rows={5} className="border-2 border-zinc-500 rounded-lg w-full text-white outline-none px-2 py-1"/>
                    </div>

                    <div id="clause_1" className="w-full flex justify-between items-center">
                    {/* Data Sample File Upload */}
                        <div className="w-full flex flex-col justify-start items-start">
                            <label className="tracking-wide text-lg">Data Sample /-</label>
    
                            <input
                                id="sample-file"
                                type="file"
                                accept=".txt,.csv,.xlsx"
                                className="hidden"
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                    if (file && file.size <= 5 * 1024 * 1024) {
                                        setSampleFile(file);
                                    } else {
                                        alert("File must be less than 5MB.");
                                    }
                                }}
                            />

                            <label
                                htmlFor="sample-file"
                                className="rounded-lg px-5 py-1 border-2 border-indigo-400 bg-indigo-950 text-indigo-300 mt-2 cursor-pointer hover:bg-indigo-400 hover:text-indigo-950 duration-300"
                            >
                                {sampleFile ? sampleFile.name : "Select File"}
                            </label>
                        </div>

                        {/* Upload File */}
<div className="w-full flex flex-col justify-start items-start">
  <label className="tracking-wide text-lg">Upload File /-</label>

  <input
    id="upload-file"
    type="file"
    accept=".txt,.csv,.xlsx"
    className="hidden"
    onChange={(e) => {
      const file = e.target.files[0];
      if (file && file.size <= 500 * 1024 * 1024 * 1024) {
        setUploadFile(file);
        setShowEncryptedArea(false); // Reset view until encryption is selected
      } else {
        alert("File must be less than 500GB.");
      }
    }}
  />

  {uploadFile ? (
    <div className="flex items-center gap-2 mt-2">
      <p className="px-4 py-1 border-2 border-indigo-400 bg-indigo-950 text-indigo-300 rounded-lg">{uploadFile.name}</p>
      <button
        onClick={() => {
          setUploadFile(null);
          setShowEncryptedArea(false);
          setSelectedEncryption("Select from list");
        }}
        className="text-red-500 text-xl font-bold hover:text-red-700 transition duration-300"
        title="Re-upload"
      >
        ⟳
      </button>
    </div>
  ) : (
    <label
      htmlFor="upload-file"
      className="rounded-lg px-5 py-1 border-2 border-indigo-400 bg-indigo-950 text-indigo-300 mt-2 cursor-pointer hover:bg-indigo-400 hover:text-indigo-950 duration-300"
    >
      Select File
    </label>
  )}
</div>

                    </div>


                    <div className="w-full flex flex-col justify-start items-start">
  <label className="tracking-wide text-lg">Select Encryption /-</label>

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
        {["Full Homomorphic", "Partial Homomorphic", "Half Homomorphic"].map((option) => (
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

    {/* Encrypt Button */}
    {uploadFile && selectedEncryption !== "Select from list" && (
      <button
        type="button"
        onClick={() => setShowEncryptedArea(true)}
        className="px-4 py-1 ml-2 border-2 border-amber-400 bg-amber-950 text-amber-300 rounded-lg hover:bg-amber-400 hover:text-amber-950 duration-300"
      >
        Encrypt
      </button>
    )}
  </div>
</div>




<div className="w-full flex flex-col justify-start items-start">
  <label className="tracking-wide text-lg">Encrypted View /-</label>

  {!showEncryptedArea ? (
    <p className="text-red-400 text-base mt-2">First upload a file and select encryption</p>
  ) : (
    <textarea
      cols={100}
      rows={5}
      className="border-2 border-zinc-500 rounded-lg w-full text-white outline-none px-2 py-1 mt-2"
    />
  )}
</div>



                    <div className="flex justify-center items-center gap-3">
                        <button className="rounded-lg px-5 py-1 border-2 border-indigo-400 bg-indigo-950 text-indigo-300 cursor-pointer hover:bg-indigo-400 hover:text-indigo-950 duration-300">Upload</button>
                    </div>
                </div>

                
            </form>
        </div>
    )
}