import React from 'react';
import {AiFillPhone, AiOutlineClockCircle} from 'react-icons/ai'
import {BiHomeHeart} from 'react-icons/bi'  //bs for bot strap//

const Topbar = () => {
    return ( 
        <div  className ='flex justify-between item-center px-4 py-2'>
             <div className ='flex item-center'>
             <BiHomeHeart size ={30} className='mr-2' />
             <h1 className='font-bold'>APNA-GHAR</h1>
            </div>
            <div className="flex">
                <div className='clock flex mr-2'>
                    <AiOutlineClockCircle size={20} className='mr-2' style={{ '@media screen and (max-width: 700px)': { display: 'none' } }}/>
                    <p className='mr-5'>9AM-5PM</p>
                </div>
                <div className='phone flex mr-2' style={{ '@media screen and (max-width: 700px)': { display: 'none' } }}>
                    <AiFillPhone size={20} className='mr-2' />
                    <p className='mr-5'>9099-989-221</p>
                </div>

                <button  className='button mr-5'>chalo phir</button>
            </div>
        </div>
     );
}
 
export default Topbar;