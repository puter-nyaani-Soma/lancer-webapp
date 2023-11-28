import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

const Featured = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate(`/gigs?search=${input}`);
  };
  return (
    
    <div className={`overflow-hidden py-0 pt-12 items-center  pb-20 md:pb-0 px-4 text-white md:px-12 md:flex md:items-center md:space-x-6 ctp-frappe transition-all duration-400 ease bg-gradient-to-b from-ctp-base to-ctp-crust h-[100vh]`} >
    {/* h-[75vh] py-12 px-4 md:px-12 md:flex md:items-center md:space-x-6 ctp-frappe transition-all duration-400 ease bg-gradient-to-b from-ctp-base to-ctp-crust "> */}
      <div className="max-w-10xl mx-auto h-full md:flex md:items-center md:space-x-6 ">
        <div className="flex md:mt-[-120px] flex-col gap-6  md:w-3/4" >
        <h1 className="text-5xl" >
      Find the perfect  <span className="italic font-light">freelance</span> services for your business
       
      </h1>
         
          <div className=" w-auto h-auto search pl-4 ml-[-5] bg-white rounded flex items-center justify-between overflow-hidden">
        <div className="searchInput w-full flex items-center rounded-l  gap-4">
          <img src="./img/search.png" alt="Search Icon" className="w-5 h-5" />
          <input
            type="text"
            placeholder="Search..."
            className="border-none outline-none w-full text-black placeholder-gray-400"
            onChange={(e) => setInput(e.target.value)} 
          />
        </div>
        <button  onClick={handleSubmit} className="w-auto rounded-l p-3  h-12 bg-ctp-lavender text-white self-end cursor-pointer">
          Search
        </button>
      </div>
               <div className="popular text-white flex  md:flex-row flex-col items-center gap-4">

        <span className="whitespace-nowrap">Popular:</span>
        <Link to='/gigs?search=Web design'  className="whitespace-nowrap border border-white px-4 py-1 rounded-full text-white bg-transparent text-sm">
        Web Design
        </Link >
        <Link to='/gigs?search=Wordpress' className="whitespace-nowrap border border-white px-4 py-1 rounded-full text-white bg-transparent text-sm">
        Wordpress
        </Link >
        <Link to='/gigs?search=Logo design' className="whitespace-nowrap border border-white px-4 py-1 rounded-full text-white bg-transparent text-sm">
        Logo Design
        </Link >
        {/* <Link  className="whitespace-nowrap border border-white px-4 py-1 rounded-full text-white bg-transparent text-sm">
       AI Services
        </Link > */}
      </div>
              
            
          
        </div>
        <div className="flex m-2 mt-6  md:mt-0 mb-[-10] justify-center image-container items-center">
          <img
            src="/img/trans-man.png"
            alt="Man's Picture"
            className="w-[150vw] right-0 md:w-[100vw] h-auto rounded-lg"
            
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
