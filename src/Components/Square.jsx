import React, { useState } from "react";

const Square = ({ value, handleClick }) => {
  return (
    <div
      className="w-10 h-10 border-[1px] border-black flex items-center justify-center "
      onClick={handleClick}
    >
      <p>{value}</p>
    </div>
  );
};

export default Square;
