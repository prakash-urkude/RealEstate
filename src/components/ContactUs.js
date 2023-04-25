import React from "react";
import pic2 from "../img/pic7.gif"
const Contact = () => {
    return ( 
        <div id="contact" className="max-w-[1140] m-auto p-4 py-10 ">
            <h2 className="text-center font-bold text-gray-700">Send Us A Message</h2>
            <div className="grid md:grid-cols-2">
                <img 
                src={pic2}
                alt="/"
                className="w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]"
                />
                <form>
                    <div className="grid grid-cols-2">
                        <input className="border m-2 p-2" type="text" placeholder="firstname"/>
                        <input className="border m-2 p-2" type="text" placeholder="lastname"/>
                        <input className="border m-2 p-2" type="email" placeholder="email"/>
                        <input className="border m-2 p-2" type="phone" placeholder="phone"/>
                        <input className="border col-span-2 m-2 p-2" type="text" placeholder="address"/>
                        <textarea className="border col-span-2 m-2 p-2" col="38" row="10" placeholder="Hi....!!"></textarea>
                        <button className="button col-span-2 m-2" >Submit</button>
                    </div>
                </form>

            </div>

        </div>
     );
}
 
export default Contact;