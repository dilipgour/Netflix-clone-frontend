import { useState } from "react";
import axios from "axios";
import logo from "./logo.png";
import Input from "./Input";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [varient, setVarient] = useState("Login");
  const [name, setName] = useState();
  const navigate = useNavigate();

  const togglevarient = () => {
    setVarient(varient === "Login" ? "Signup" : "Login");
  };
  const signup = async () => {
    const { data } = await axios.post(
      "http://localhost:5000/api/signup",
      {
        name,
        email,
        password,
      },
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    
    if (data.token) {
      localStorage.setItem('token',data.token)
      
      navigate("/");
    }
  };

  const login = async () => {
    const { data } = await axios.post(
      "http://localhost:5000/api/login",
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (data.token) {
      localStorage.setItem('token',data.token);
      
      navigate('/')
      
    }
  };

  return (
    <div className=" relative h-screen w-screen  bg-[url(./images/hero.jpg)] bg-center bg-cover bg-fixed text-white">
      <div className=" w-full h-full bg-black md:bg-opacity-50">
        <nav className="px-2 py-5 ">
          <img src={logo} alt="logo" className="h-12" />
        </nav>

        <div className="flex justify-center ">
          <div className="bg-black px-16 py-16 bg-opacity-70 md:w-2/4 self-center ">
            <h2 className="text-white font-semibold text-4xl mb-8">
              {varient}{" "}
            </h2>
            <div className="flex flex-col gap-4">
              {varient === "Signup" && (
                <Input
                  label="Name"
                  id="name"
                  type="text"
                  value={name}
                  onchange={(e) => {
                    setName(e.target.value);
                  }}
                />
              )}

              <Input
                label="Email"
                id="email"
                type="email"
                value={email}
                onchange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <Input
                label="Password"
                id="password"
                type="password"
                value={password}
                onchange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <button
              className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
              onClick={varient === "Signup" ? signup : login}
            >
              {varient}
            </button>

            <p className="text-neutral-500 mt-12">
              {varient === "Login"
                ? "New to Netflix?"
                : "Already have an account"}{" "}
              <span
                onClick={togglevarient}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                {varient === "Login" ? "Sign up now" : "Log in"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
