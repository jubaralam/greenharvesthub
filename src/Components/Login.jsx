import React, { useContext, useState } from "react";
import axios from "axios";
import {UrlContext} from "../ContextAPI/BashURL";
const Login = () => {
  const [userData, setUserData] = useState({email:"",password:""});
  const bashURL = useContext(UrlContext);
  //setData fuction is storing data in userData
  const setData = (e) => {
    const { id, value } = e.target;

    setUserData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${bashURL}/user/login`, userData, {
        headers: { "Content-Type": "application/json" },
      });

      console.log(res.data);
      setUserData({  email: "", password: "" });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white shadow-md rounded-lg w-96 p-6">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
          Login
        </h2>
        <form>
          {/* Name Input */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Email
            </label>
            <input
              onChange={setData}
              value={userData.email}
              type="text"
              id="email"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              onChange={setData}
              value={userData.password}
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Login Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-green-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-800 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
