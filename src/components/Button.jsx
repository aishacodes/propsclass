import React from "react";

const Button = (props) => {
  return (
    <button className="bg-[#EB5757] text-white w-[5.4rem] h-12 rounded-lg">
      {props.label}
    </button>
  );
};

export default Button;
