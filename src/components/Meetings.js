import React from "react";
const  Meetings = () => {
    return ( 
  <div className="max-w-[1140] m-auto p-4 py-5 border-double border-4 border-indigo-600  px-2 ">
    <div className="px-2 py-2 ">
        <div className="meeting absolute px-10 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... text-white text-2xl font-bold italic" >Set A Virtual Meeting With Us</div>
    </div>
    <div className="relative max-w-[1140px] m-auto w-full md:flex py-5 top-8 bottom-10">
        <div className="px-5 py-2" >
            <label className="font-bold italic px-2" >Email</label> 
            <input className="border rounded-md p-2" type="email"/>
        </div>
        <div className="px-5 py-2">
            <label className="font-bold italic px-2">Date</label> 
            <input className="border rounded-md p-2" type="date"/>
        </div>
        <div className="px-5 py-2">
            <label className="font-bold italic px-2">Phone</label> 
            <input className="border rounded-md p-2" type="number"/>
        </div>
        <div className="px-5">
            <button className='button mr-5 px-2 font-bold'>Let's Meet</button>
        </div>
        
    </div>
  </div>
     );
}
 
export default Meetings;