import React from "react";

const Spinner = ({ texto }) => {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center bg-black21-100 text-white">
      <div className="spinner mb-7">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
      <h1 className="text-2xl text-red">{texto}</h1>
    </div>
  );
};

export default Spinner;
