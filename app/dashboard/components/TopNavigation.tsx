import React from 'react'
import { FaSearch } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import { FaQuestion } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";


// done with it for now 

export const TopNavigation = () => {
  return (
               <div className='w-full px-5  flex justify-between bg-white h-[10%] items-center rounded-b-xl'>

               {/* this is the search bar  */}

               <div className='relative w-[20%]  '>
                              <input className='outline-none shadow-lg shadow-black/10 border border-[#e8f0f6] w-full py-1 rounded-[7px]  px-3 bg-[#f3f7fa]' type="text" placeholder='Search anything...' />
                              <div className='absolute text-[1.2rem] top-[5px] right-4 opacity-50 font-bold  '>
                              <FaSearch/>
                              </div>
               </div>

               {/* this is the notification section  */}

               <div className='flex items-center gap-2'>
                              <div className='w-7 h-7 flex opacity-50 items-center justify-center text-[1.2rem]  rounded-[8px] border-black/70 border-[1px]'>
                                             <CiBellOn/>
                              </div>
                              <div className='w-7 h-7 flex items-center opacity-50 justify-center text-[1.1rem]  rounded-[8px] border-black/70 border-[1px]'>
                                             <FaQuestion/>
                              </div>

                              <div className='flex items-center gap-2'>
                                             <div className='w-8 h-8 rounded-full  overflow-hidden ml-6'>
                                                            <img className='w-full h-full object-cover ' src="https://cdn.pixabay.com/photo/2022/12/01/04/43/girl-7628308_640.jpg" alt="not showing" />
                                             </div>
                                             <div className='leading-[1.2rem]'>
                                                            <h1 className='font-semibold text-[1.1rem] opacity-90'>Profile</h1>
                                                            <p className='text-[12px] opacity-70'>Manager</p>
                                             </div>

                                             <div className='ml-1 opacity-70 '>
                                                            <FaAngleDown/>
                                             </div>
                              </div>
               </div>


               </div>
)
}
