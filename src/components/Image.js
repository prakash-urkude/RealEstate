import React, { useState, useEffect } from "react";
import img1 from "../img/home0.gif";

const Images = () => {
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowTitle(true);
    }, 1000);

    setTimeout(() => {
      setShowTitle(false);
    }, 5000);

   
  }); 

  return (
    <div className="relative w-full h-[90vh]">
      <img src={img1} alt="" className="w-full h-full object-cover" />
      {showTitle && (
        <div className="absolute top-0 py-20 px-10 text-white left-0">
          <h1 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 title font-bold text-4xl italic">
            "AAKHIR APNA GHAR TO, APNA HOTA HAI...."
          </h1>
        </div>
      )}
    </div>
  );
};

export default Images;
