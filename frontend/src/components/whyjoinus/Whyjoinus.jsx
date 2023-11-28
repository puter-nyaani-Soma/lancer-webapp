import React from "react";
import {useNavigate} from "react-router-dom"
import { toast } from "react-toastify";
import getCurrentUser from '../../utils/getCurrentUser'
import newRequest from "../../utils/newRequest";
const Joinus = () => {
    const navigate=useNavigate();
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            if(currentUser){

                if (currentUser?.isSeller) {
                    toast.info("you are already a freelancer")
                    navigate('/')
                }
                else{

                    const res = await newRequest.patch(`/users/${currentUser._id}`)
                    if(res){
                        toast.success("You are a freelancer now please login again ")
                    }
                }
                
            }
            navigate('register')
        }
        catch(e) {
            toast.error(e.message)
        }
    
    }
  return (
    <>
      <div className="bg-[#0d084d] h-100 px-10 mt-10">
        <div className="py-15 container mx-auto flex justify-center py-24">
          <div className="w-3/5 flex flex-col justify-center items-start space-y-6 text-left">
            <h1 className="font-semibold text-4xl text-black dark:text-white">
              Join Lancer as a Freelancer
            </h1>
            <p className="text-2xl text-black dark:text-white">
              Unlock the Benefits of Freelancing
            </p>
            <p className="text-gray-700 dark:text-white">
              Join Lancer Freelancers and explore a world of opportunities as a freelancer & enjoy the following benefits:
            </p>
            <div className="title flex items-center space-x-2 text-gray-700 dark:text-white text-sm font-normal">
              <img src="./img/check.png" alt="" className="w-4 h-4 mx-4 my-2" />
              Connect with clients from around the world.
            </div>
            <div className="title flex items-center space-x-2 text-gray-700 dark:text-white text-sm font-normal">
              <img src="./img/check.png" alt="" className="w-4 h-4 mx-4 my-2" />
              Showcase your skills and expertise to a global audience.
            </div>
            <div className="title flex items-center space-x-2 text-gray-700 dark:text-white text-sm font-normal">
              <img src="./img/check.png" alt="" className="w-4 h-4 mx-4 my-2" />
              Set your own schedule and work from anywhere.
            </div>
            <div className="title flex items-center space-x-2 text-gray-700 dark:text-white text-sm font-normal">
              <img src="./img/check.png" alt="" className="w-4 h-4 mx-4 my-2" />
              Earn money doing what you love.
            </div>
            <button className="bg-[#ea9959] text-white py-2 px-4 rounded-full text-lg cursor-pointer" onClick={handleSubmit}>
              Join Lancer Freelancers
            </button>
          </div>
          <div className="w-2/5">
            <img
              src="/img/why.webp"
              alt=""
              className="w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Joinus;
