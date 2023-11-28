import React, { useState, useEffect } from "react";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import getCurrentUser from '../../utils/getCurrentUser';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (currentUser) {
      navigate("/");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await newRequest.post("/auth/login", { username, password });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      toast.success("Login Success");
      navigate("/");
    } catch (err) {
      toast.error("Wrong Credentials");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="w-full sm:w-96 p-4 sm:p-8 flex flex-col gap-8 bg-opacity-30 bg-[#303447] backdrop-blur-50 border-4 border-[#0A2540] rounded-lg" onSubmit={handleSubmit}>
        <h1 className="text-gray-700 text-2xl font-bold ml-[37.5%] text-white">Sign in</h1>
        <label htmlFor="username" className="text-gray-500 py-2 text-lg text-white">Username</label>
        <input
          name="username"
          type="text"
          placeholder="Kamatchi"
          onChange={(e) => setUsername(e.target.value)}
          className="py-3 px-4 rounded border bg-opacity-80 bg-white border-[#0A2540] text-gray-700"
        />
        <label htmlFor="password" className="text-gray-500 py-2 text-lg text-white">Password</label>
        <input
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="py-3 px-4 rounded border bg-opacity-80 bg-white border-[#0A2540] text-gray-700"
        />
        <button type="submit" className="py-3 px-4 bg-[#0A2540] text-white font-semibold text-lg rounded-full cursor-pointer">
          Login
        </button>
        {error && <span className="text-red-500 text-sm">{error}</span>}
      </form>
    </div>
  );
}

export default Login;


// function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);

//   const navigate = useNavigate();

//   useEffect(() => {
//     const currentUser = getCurrentUser();
//     if (currentUser) {
//       navigate("/");
//     }
//   }, [navigate]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await newRequest.post("/auth/login", { username, password });
//       localStorage.setItem("currentUser", JSON.stringify(res.data));
//       toast.success("Login Success");
//       navigate("/");
//     } catch (err) {
//       toast.error("Wrong Credentials");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <form className="w-full sm:w-96 p-4 sm:p-8 flex flex-col gap-8 bg-white rounded-lg shadow-md bg-opactiy-15 bg-[#303447]  backdrop-blur-md border border-4 border-[gold]" onSubmit={handleSubmit}>
//         <h1 className="text-gray-700 text-2xl font-bold">Sign in</h1>
//         <label htmlFor="username" className="text-gray-500 py-2 text-lg">Username</label>
//         <input
//           name="username"
//           type="text"
//           placeholder="Kamatchi"
//           onChange={(e) => setUsername(e.target.value)}
//           className="py-3 px-4 rounded border border-gray-300"
//         />
//         <label htmlFor="password" className="text-gray-500 py-2 text-lg">Password</label>
//         <input
//           name="password"
//           type="password"
//           onChange={(e) => setPassword(e.target.value)}
//           className="py-3 px-4 rounded border border-gray-300"
//         />
//         <button type="submit" className="py-3 px-4 bg-[#babbf1] text-white font-semibold text-lg rounded-full cursor-pointer">
//           Login
//         </button>
//         {error && <span className="text-red-500 text-sm">{error}</span>}
//       </form>
//     </div>
//   );
// }

// export default Login;

// function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);

//   const navigate = useNavigate();

//   useEffect(() => {
//     const currentUser = getCurrentUser();
//     if (currentUser) {
//       navigate("/");
//     }
//   }, [navigate]);



//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await newRequest.post("/auth/login", { username, password });
//       localStorage.setItem("currentUser", JSON.stringify(res.data));
//       toast.success("Login Success")
//       navigate("/");
//     } catch (err) {
//     toast.error("Wrong Credentials");
    
//     }
//   };

//   return (
//     <div className="flex items-center justify-center">
   
//       <form className="w-full sm:w-96 p-4 sm:p-8 flex flex-col gap-8" onSubmit={handleSubmit}>
//         <h1 className="text-gray-700 text-2xl font-bold">Sign in</h1>
//         <label htmlFor="username" className="text-gray-500 py-2 text-lg">Username</label>
//         <input
//           name="username"
//           type="text"
//           placeholder="Kamatchi"
//           onChange={(e) => setUsername(e.target.value)}
//           className="py-3 px-4 rounded border h-[8vh] border-gray-300"
//         />

//         <label htmlFor="password" className="text-gray-500 py-2 text-lg">Password</label>
//         <input
//           name="password"
//           type="password"
//           onChange={(e) => setPassword(e.target.value)}
//           className="py-3 px-4 h-[8vh] rounded border border-gray-300"
//         />
//         <button type="submit" className="py-3 px-4 bg-[#babbf1] text-white font-semibold text-lg rounded-full cursor-pointer">
//           Login
//         </button>
//         {error && <span className="text-red-500 text-sm">{error}</span>}
//       </form>
//     </div>
//   );
// }

// export default Login;
