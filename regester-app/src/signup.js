// import Link from 'react-router-dom'
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
import axios from "axios";
import { useState } from "react";
function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => {
        if(result.data.message === 'name and email and password is required'){
          alert(result.data.message)
          navigate('/')
        } else if(result.data.message === 'email already exists'){
          alert(result.data.message)
          navigate('/')
        }
        else if(result.data.message === 'user is created'){
          alert(result.data.message)
          navigate('/login')
        }
   
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-img  text-white capitalize">
      <div className="w-[600px]  bg-blue-400 py-6">
        <h1 className="text-center text-2xl text-blue-50  font-bold my-5">Register</h1>

        <form className="w-[100%] " onSubmit={handelSubmit}>
          <div className="w-[80%] flex flex-col mx-auto">
            <label htmlFor="name">Name</label>
            <input
              className="h-[30px] w-full outline-0 outline-orange-400 border-0 text-black"
              id="name"
              name="name"
              type="text"
              value={name}
              required
              placeholder="Enter your name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div className="w-[80%] flex flex-col mx-auto">
            <label htmlFor="email">Email</label>
            <input
              className="h-[30px] w-full outline-0 outline-orange-400 border-0 text-black"
              id="email"
              name="email"
              type="email"
              value={email}
              required
              placeholder="Enter your email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="w-[80%] flex flex-col mx-auto">
            <label htmlFor="password">Password</label>
            <input
              className="h-[30px] w-full outline-0 outline-orange-400 border-0 text-black"
              id="password"
              name="password"
              required
              type="password"
              placeholder="Enter your password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <button
            className=" block w-[100px] mx-auto text-center my-5 bg-indigo-500 py-1 px-3 m cursor-pointer"
            type="submit"
          >
            Register
          </button>
        </form>
<div className="w-[80%] flex justify-center items-center gap-2 mx-auto">
          <p className=" text-blue-50  text-gray-700">
          Already have an account?
        </p>

        <Link className="text-blue-50 block text-center bg-indigo-500 py-1 px-3 cursor-pointer" to="/login">
          Login
        </Link>
</div>
      </div>
    </div>
  );
}

export default Signup;
