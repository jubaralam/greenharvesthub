import { useContext, useState } from "react";
import { UrlContext } from "../ContextAPI/BashURL";
import axios from "axios";

const Register = () => {
  const [userData, setUserData] = useState({
    name:"",
    email:"",
    password:"",
    role:""
  });
 
  const bashURL = useContext(UrlContext);
  //setData fuction is storing data in userData
  const setData = (e) => {
    e.preventDefault()
    const { id, value } = e.target;

    setUserData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation
  if (!userData.name || !userData.email || !userData.password || !userData.role) {
    alert('Please fill out all fields and select a role.');
    return;
  }
  
    console.log(userData)
    try {
      const res = await axios.post(
        `${bashURL}/user/register`,
        userData,
        { headers: { "Content-Type": "application/json" } }
      );
      
      console.log(res.data);
      
      // clearing data after submition
      setUserData({ name: "", email: "", password: "",role:"" });
    } catch (error) {
      console.log(error.message);
    }

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white shadow-md rounded-lg w-96 p-6">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
          Register
        </h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              onChange={setData}
              value={userData.name}
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              onChange={setData}
              value={userData.email}
              type="email"
              id="email"
              placeholder="Enter your email"
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

          
     
      
  
      <div className="flex space-x-4 py-4">
        {/* Buyer Option */}
        <button
        value="buyer"
        id="role"
          className={`px-6 py-3 rounded-lg text-white font-medium ${
            userData.role === 'buyer'
              ? 'bg-blue-700'
              : 'bg-blue-300 hover:bg-blue-500'
          }`}
          onClick={setData}
        >
          Buyer
        </button>
        
        {/* Seller Option */}
        <button
        value="seller"
        id="role"
          className={`px-6 py-3 rounded-lg text-white font-medium ${
            userData.role === 'seller'
              ? 'bg-green-700'
              : 'bg-green-300 hover:bg-green-500'
          }`}
          onClick={setData}
        >
          Seller
        </button>
      </div>

     

      {/* Register Button */}
      <button
            onClick={handleSubmit}
            className="w-full bg-green-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-800 transition duration-200"
          >
            Register
          </button>
     </form>
      </div>
    </div>
  );
};

export default Register;
