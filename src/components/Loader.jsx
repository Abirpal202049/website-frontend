import React from "react";

const Loader = ({ color = "shades-4" }) => {
  return (
    <div className="absolute top-0 right-0 h-full aspect-square grid place-items-center">
      <div
        className={`animate-spin rounded-full h-3/4 w-3/4 border-b-2 border-${color}`}
      ></div>
    </div>
  );
};

export default Loader;
