import React from 'react';

const Rating = () => {
    return (
        <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] mt-15 mb-30">
            <div className=' text-white grid grid-cols-1 gap-7  md:grid-cols-3 justify-between container mx-auto text-center py-15'>
           
               <div className='border-r'>
                 <h1 className='text-6xl font-extrabold'>50K+</h1>
                <p className='font-medium text-2xl'>Active Users</p>
               </div>
               <div className='border-r '>
                 <h1 className='text-6xl font-extrabold'>200+</h1>
                <p className='font-medium text-2xl'>Premium Tools</p>
               </div>
               <div>
                 <h1 className='text-6xl font-extrabold'>4.9</h1>
                <p className='font-medium text-2xl'>Rating</p>
               </div>

                
            
            </div>
        </div>
    );
};

export default Rating;