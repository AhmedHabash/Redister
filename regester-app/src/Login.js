import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./signup.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const [name , setName] = useState("");
  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login/log", { email, password })
      .then((result) => {
        if (result.data.message === "invalid password") {
          alert("Invalid password cheack your password or try to reset it");
          navigate("/login");
          return;
        }
        if (result.data.message === "user not found") {
          alert("user not found please register first");
          navigate("/");
          return;
        }
        if (result.data.message === "login successful") {
          alert("login successful");
          setName(result.data.user.name);
          navigate("/home");
          return;
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="w-full h-screen  bg-img flex justify-center items-center bg-blue-300 text-white capitalize">
      <div className="w-[600px]">
        <h1 className="text-center text-2xl font-bold">Log In</h1>

        <form className="w-[100%]" onSubmit={handelSubmit}>
          <div className="w-[80%] flex flex-col mx-auto">
            <label htmlFor="email">Email</label>
            <input
              className="h-[30px] w-full outline-0 outline-orange-400 border-0 text-black"
              id="email"
              name="email"
              type="email"
              value={email}
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
              type="password"
              placeholder="Enter your password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <button
            className="  block w-[100px] mx-auto text-center my-5 bg-indigo-500 py-1 px-3 cursor-pointer"
            type="submit"
          >
            login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
