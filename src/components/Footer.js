import React from "react";
import {BiHomeHeart} from 'react-icons/bi'
const Footer = () => {
    return (
        <div className="max-w-[1140px] w-full py-8 m-auto border-t-4">
            <div className="flex items-center m-auto justify-center">
                <BiHomeHeart size ={30} className='mr-2' />
                <h1 className="font-bold">APNA-GHAR</h1>
            </div>
        </div>
      );
}

export default Footer;