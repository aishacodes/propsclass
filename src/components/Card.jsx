import React from "react";

const Card = ({ name, address, role, img }) => {
  return (
    <div className="w-72 h-72 border border-green-500 flex flex-col items-center justify-center">
      <img src={img} alt="" className="w-32 h-32 rounded-full" />
      <h1 className="text-3xl  text-blue-700 mb-4">{name}</h1>
      <p>{role}</p>
      <p>{address}</p>
    </div>
  );
};

export default Card;
