import React from 'react'
import {saveAs} from 'file-saver'
import save from '../assets/save.svg'

const SaveButton = ({ code }) => {
  const onClickHandle = (e) => {
    e.preventDefault()
    const file = new Blob([code], {
      type: "text/plain;charset=utf-8",
    });
    saveAs(file, "code-editor.txt");
  };
  return (
    <>
      <button
        className="bg-gray-900 object-contain p-1 rounded-md  focus:outline-none w-full border-2 border-black z-10 shadow-[5px_5px_0px_0px_rgba(0,0,0)] hover:shadow transition duration-200"
        onClick={onClickHandle}
      >
        <img src={save} className="h-8 object-cover " alt="save img" />
      </button>
    </>
  );
};

export default SaveButton