import React from "react";

const Feature = ({ img, title, desc, link }) => {
  return (
    <div className="flex gap-4">
      <img src={img} alt="" />
      <div>
        <h1 className="text-xl">{title}</h1>
        <p>{desc}</p>
        <a href={link} className="text-blue-200">
          Learn more
        </a>
      </div>
    </div>
  );
};

export default Feature;
