import React from "react";
import home from "../img/home4.png"
import flat from "../img/flat.png"

const Choose = () => {
    return (
        <div className="max-w-[1140px] m-auto w-full md:flex mt-[-75px]">
            <div className="relative p-4 ">
                <h3 className="absolute z-10 top-[20%] left-[20%] translate-x-[-50%] translate-y-[-50%] text-black text-2xl font-bold italic">Flats</h3>
                <img 
                className="w-full h-auto object-cover relative border-4 border-white shadow-lg"
                src={flat} alt="/"/>
            </div>
            <div className="relative p-4 ">
                <h3 className="absolute z-10 top-[20%] left-[20%] translate-x-[-50%] translate-y-[-50%] text-black text-2xl font-bold italic">House</h3>
                <img 
                className="w-full h-auto object-cover relative border-4 border-white shadow-lg"
                src={home} alt="/"/>
            </div>
        </div>
      );
}
 
export default Choose;