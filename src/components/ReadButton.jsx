import React from "react";
import lock from "../assets/lock.svg";
import lockOpen from "../assets/lock_open.svg";


const ReadButton = ({ read, setRead }) => {
  const reading = () => {
    if (read) {
      return <img className="h-8 object-cover" src={lock} alt="lock" />;
    } else {
      return (
        <img className="h-8 object-cover" src={lockOpen} alt="lock open" />
      );
    }
  };

  const onClickHandle = (e) => {
    e.preventDefault()
    setRead(!read)
  }

  return (
    <>
      <button
        className="bg-gray-900 object-contain p-1 rounded-md  focus:outline-none w-full border-2 border-black z-10 shadow-[5px_5px_0px_0px_rgba(0,0,0)] hover:shadow transition duration-200"
        onClick={onClickHandle}
      >
        {reading()}
      </button>
    </>
  );
};

export default ReadButton;
