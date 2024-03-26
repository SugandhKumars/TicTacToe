import React from "react";

const Square = ({ handleClick, value }) => {
  return (
    <div
      className="Square  w-20 h-20 border-[1px]  text-2xl border-black flex   items-center justify-center    "
      onClick={handleClick}
    >
      {value}
    </div>
  );
};

export default Square;
