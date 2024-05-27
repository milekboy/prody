import { Link } from "react-router-dom";
import SideImage from "../components/SideImage";
import {  useNavigate } from "react-router-dom";
import NetworkInstance from "../api/NetworkInstance";
import { useState } from "react";
export default function UserLogin(){
    const networkInstance = NetworkInstance();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleInputChange = (e) => {
        if (e.target.id === "password") {
          setPassword(e.target.value);
        } else {
          setEmail(e.target.value);
        }
      };
      const signIn = async (e) => {
        e.preventDefault();
        try {
          const response = await networkInstance.post(`/api/auth/login`, {
            email: email.toLowerCase(),
            password: password,
          });
    
          if (response?.status === 200 || response?.status === 201) {
            const { access_token } = response.data;
            if (access_token) {
                localStorage.setItem('prodileJWT', access_token)}
                else {
                    localStorage.removeItem("prodileJWT");
                  }
                //   initialize(access_token);
           setTimeout(() => {
            navigate("/dashboard/overview")
          }, 1000)
            }}catch (err) {
                console.log(err) 
              }}
    return(
      <div className="lg:flex lg:px-0 px-4 gap-20">
      <div className="lg:ps-56 py-32">
    <p className="text-4xl font-semibold">
        Welcome Back👋
    </p>
    <p className="text-xl mt-4 tracking-wide">
    Today is a new day. It's your day. You shape it. <br/>
    Sign in to start managing your projects.
    </p>
  <form onSubmit={signIn}>
    <input
     onChange={(e) => handleInputChange(e)}
     type="email" placeholder="Email Address" className=" h-16 mt-8 w-full lg:w-[470px] z-0 placeholder:focus:-translate-y-5 placeholder:z-30 transition ease-in-out border-2 rounded-lg border-zinc-400 ps-3 "/>

    <input
     onChange={(e) => handleInputChange(e)}
    id="password" placeholder="Password" className=" h-16 mt-4 w-full lg:w-[470px] z-0 placeholder:focus:-translate-y-5 placeholder:z-30 transition ease-in-out border-2 rounded-lg border-zinc-400 ps-3 "/>
    <button className="bg-[#FFC107] text-white w-full lg:w-[462px] h-[74px]   text-2xl mt-4 rounded-xl">Login</button>
    <div className="flex justify-center"><p className="mt-4 text-lg cursor-pointer text-[#1E4AE9]">Forgot Password?</p></div>
    
    <div className='w-full gap-4 mt-4 items-center flex '>
         <div className='h-[1px] w-[200px] bg-[#D6DADD]'></div>
         <p className='font-normal text-[#A39F9F] text-sm'>OR</p>
         <div className='h-[1px] w-[200px] bg-[#D6DADD]'></div>
        </div>
        <button className='lg:w-[462px] w-full mt-4 h-12   rounded-xl border p-[10px] gap-[10px] bg-[#eff7fa] justify-center items-center flex '>
       <span className='text-lg'></span> <span className='font-semibold text-base leading-5'>Sign in with Google</span>
        </button>
        </form>
        <div className="flex justify-center">  <p className="mt-4 text-xl ">Don't have an account?   <Link to="/user-signup">  <span className="text-[#1E4AE9] cursor-pointer"> Sign up</span> </Link></p></div>
    </div>
     <SideImage/>
    </div>
    )
} 