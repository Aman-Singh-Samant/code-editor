import React from "react";
import copy from "../assets/copy.svg";
import { ToastContainer, toast } from "react-toastify";

const CopyButton = ({ code }) => {
  const onClickHandle = async (e) => {
    e.preventDefault()
    try {
      await navigator.clipboard.writeText(code);
      toast.success("Code Copied!", {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    } catch (err) {
      console.error("Unable to copy to clipboard.", err);
      toast.error("Failed To Copy!", {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,    
        theme: "dark",
      });
    }
  };

  return (
    <>
      <button
        className="bg-gray-900 object-contain p-1 rounded-md  focus:outline-none w-full border-2 border-black z-10 shadow-[5px_5px_0px_0px_rgba(0,0,0)] hover:shadow transition duration-200"
        onClick={onClickHandle}
      >
        <img src={copy} className="h-8 object-cover " alt="copy img" />
      </button>
    </>
  );
};

export default CopyButton;
