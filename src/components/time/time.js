import React from "react";

const Time = ({ data }) => {
  return (
    <div>
      <p className="text-base font-sans text-white">{data.name}</p>
      <p className="text-base font-sans text-white">{data.username}</p>
      <p className="text-base font-sans text-white">{data.email}</p>
      <br />
    </div>
  );
};

export default Time;
