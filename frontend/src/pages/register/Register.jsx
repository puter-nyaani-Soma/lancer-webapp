import React, { useState,useEffect } from "react";
import upload from "../../utils/upload";
import "./Register.scss";
import newRequest from "../../utils/newRequest";
import getCurrentUser from "../../utils/getCurrentUser";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


function Register() {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    desc: "",
  });

  const navigate = useNavigate();
  useEffect(() => {
    const currentUser = getCurrentUser();
    if (currentUser) {
      navigate("/");
    }
  }, [navigate]);


  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSeller = (e) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = await upload(file);
    try {
      await newRequest.post("/auth/register", {
        ...user,
        img: url,
      });
      navigate("/");
      toast.success('User registration successfully completed');
    } catch (err) {
      console.log(err);
      toast.error(err.response.data)
    
    }
  };
  return (
    <div className="register flex items-center justify-center p-4">
     
      <form className="w-full sm:w-96 py-6 sm:py-6 px-4 sm:px-6 flex flex-col sm:flex-row gap-4 sm:gap-6 bg-white rounded-lg" onSubmit={handleSubmit}>
        <div className="left flex flex-col justify-between">
          <h1 className="text-gray-800 text-2xl font-bold mb-4">Create a new account</h1>
          <label htmlFor="username" className="text-gray-500 text-lg">Username</label>
          <input
            name="username"
            type="text"
            placeholder="johndoe"
            onChange={handleChange}
            className="py-3 sm:py-5 px-4 sm:px-6 border border-gray-300 rounded-lg"
          />
          <label htmlFor="email" className="text-gray-500 text-lg">Email</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            onChange={handleChange}
            className="py-3 sm:py-5 px-4 sm:px-6 border border-gray-300 rounded-lg"
          />
          <label htmlFor="password" className="text-gray-500 text-lg">Password</label>
          <input name="password" type="password" onChange={handleChange} className="py-3 sm:py-5 px-4 sm:px-6 border border-gray-300 rounded-lg" />
          <label htmlFor="img" className="text-gray-500 text-lg">Profile Picture</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} className="py-3 sm:py-5 px-4 sm:px-6 border border-gray-300 rounded-lg" />
          <label htmlFor="country" className="text-gray-500 text-lg">Country</label>
          <input
            name="country"
            type="text"
            placeholder="Usa"
            onChange={handleChange}
            className="py-3 sm:py-5 px-4 sm:px-6 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="right flex flex-col justify-between">
          <h1 className="text-gray-500 text-xl mb-4">I want to become a seller</h1>
          <div className="toggle flex items-center gap-4">
            <label htmlFor="isSeller" className="text-gray-500 text-lg">Activate the seller account</label>
            <label className="switch relative inline-block w-12 h-6">
              <input type="checkbox" onChange={handleSeller} className="opacity-0 w-0 h-0" />
              <span className="slider absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 transition duration-400 rounded-full"></span>
            </label>
          </div>
          <label htmlFor="phone" className="text-gray-500 text-lg">Phone Number</label>
          <input
            name="phone"
            type="text"
            placeholder="+1 234 567 89"
            onChange={handleChange}
            className="py-3 sm:py-5 px-4 sm:px-6 border border-gray-300 rounded-lg"
          />
          <label htmlFor="desc" className="text-gray-500 text-lg">Description</label>
          <textarea
            placeholder="A short description of yourself"
            name="desc"
            id=""
            cols="30"
            rows="5"
            onChange={handleChange}
            className="py-3 sm:py-5 px-4 sm:px-6 border border-gray-300 rounded-lg  resize-none"

          ></textarea>




          <button type="submit" className="py-3 sm:py-5 px-4 sm:px-6 bg-blue-400 text-white font-semibold text-lg sm:text-base rounded-full cursor-pointer">
            Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
