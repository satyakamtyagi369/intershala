"use client"
import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { FiRefreshCw } from "react-icons/fi";
import { FaArrowDown } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import InvoiceOverview from '../components/InvoiceOverview';
import FilterComp from '../components/FilterComp';
import {useState} from "react"
import SideNavBar from '../components/SideNavBar';
import { TopNavigation } from '../components/TopNavigation';


const Page = () => {

               const [filteropen, setfilteropen] = useState(false)
               const filterClose = ()=>{
                              setfilteropen(false)
               }
  return (
               
    <div className='w-full relative bg-[#f0f5fc] h-screen flex'>
               <SideNavBar current={"payment"}/>
               <div className='w-[82%] h-full'>
                              <TopNavigation/>

                              <div className='w-full h-[90%] flex flex-col px-3'>
                                             <div className='w-full h-[32%] bg-white rounded-xl mt-3 pt-2'>
                                                            {/*  this is teh top filter section */}
                                                            <div className='w-full px-4 flex justify-between items-center'>
                                                                           {/* this is the main heading */}
                                                                           <div className='text-[1.5rem] font-bold tracking-tight'>Company Invoices</div>

                                                                           <div className='flex gap-4 text-[1.2rem] opacity-70 '>
                                                                           <IoIosSearch/>
                                                                           <FiRefreshCw/>
                                                                           <FaArrowDown/>
                                                                           <div onClick={()=>setfilteropen(prev=>!prev)}>

                                                                           <CiFilter/>
                                                                           </div>
                                                                           </div>


                                                            </div>

                                                            {/* this is teh company logo section */}

                                                            <div className='w-full text-[1.1rem] px-4 mt-6 font-semibold tracking-tight items-center flex gap-3'>
                                                                           <div className='w-9 h-9 rounded-lg overflow-hidden  bg-black'>
                                                                                          <img className='w-full h-full object-contain' src="https://cdn.pixabay.com/photo/2015/10/20/21/05/mcdonald-998495_1280.png" alt="not showing" />
                                                                           </div>
                                                                           <h1>McDonalds</h1>
                                                            </div>

                                                            {/* this is the list thingy section wierd */}

                                                            <div className='w-full h-[30%]  mt-7 px-3'>
                                                                           <div className='w-full flex px-10 items-center justify-between bg-[#f5f5f5] rounded-full h-[95%]'>
                                                                                          <div className=' bg-[#E2E2E2] rounded-full font-semibold px-5 py-[5px]'>
                                                                                                         <h1>Date</h1>
                                                                                          </div>
                                                                                          <div className=' bg-[#E2E2E2] rounded-full font-semibold px-5 py-[5px]'>
                                                                                                         <h1>Description</h1>
                                                                                          </div>
                                                                                          <div className=' bg-[#E2E2E2] rounded-full font-semibold px-5 py-[5px]'>
                                                                                                         <h1>Billing Amount</h1>
                                                                                          </div>
                                                                                          <div className=' bg-[#E2E2E2] rounded-full font-semibold px-5 py-[5px]'>
                                                                                                         <h1>Status</h1>
                                                                                          </div>
                                                                           </div>
                                                            </div>

                                                            {/* this is the final thingy of this page  */}

                                             </div>
                                                            <div className='w-full h-[65%] overflow-y-auto mt-4 bg-white rounded-xl flex flex-col whitespace-nowrap gap-3 pt-5 px-3'>
                                                                           {[1,2,4,5,6,7,7,8,9].map((e,i)=>(

                                                                                          <InvoiceOverview key={i}/>
                                                                           ))}
                                                            </div>
                              </div>
               </div>
               {filteropen?(

                              <FilterComp close={filterClose}/>
                              ):<></>}
    </div>
  )
}

export default Page