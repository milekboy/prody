import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
export default function UserLogin(){
    return(
      <div className="px-56 py-32">
    <p className="text-4xl font-semibold">
        Welcome Back
    </p>
    <p className="text-xl mt-4 tracking-wide">
    Today is a new day. It's your day. You shape it. <br/>
    Sign in to start managing your projects.
    </p>
  
    <input type="email" placeholder="Email Address" className=" h-24 mt-8 w-[470px] z-0 placeholder:focus:-translate-y-8 placeholder:z-30 transition ease-in-out border-2 rounded-lg border-zinc-400 ps-3 "/>

    <input type="email" placeholder="Password" className=" h-24 mt-4 w-[470px] z-0 placeholder:focus:-translate-y-8 placeholder:z-30 transition ease-in-out border-2 rounded-lg border-zinc-400 ps-3 "/>

    <div className="flex mt-4 gap-16">
        <div className="flex gap-2">
          <input type="checkbox" className=" w-6 cursor-pointer"/>
          <p>Agent</p>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" className="w-6 cursor-pointer"/>
          <p>User</p>
        </div>
    
    </div>
    <button className="bg-[#FFC107] text-white w-[462px] h-[74px] border-2 border-black text-2xl mt-4 rounded-xl">Sign Up</button>
    <p className="mt-4 text-lg cursor-pointer text-[#1E4AE9]">Forgot Password?</p>
    <div className='w-full gap-4 mt-4 items-center flex '>
         <div className='h-[1px] w-[200px] bg-[#D6DADD]'></div>
         <p className='font-normal text-[#A39F9F] text-sm'>OR</p>
         <div className='h-[1px] w-[200px] bg-[#D6DADD]'></div>
        </div>
        <button className='w-[462px] mt-4 h-12   rounded-xl border p-[10px] gap-[10px] bg-[#eff7fa] justify-center items-center flex '>
       <span className='text-lg'><FcGoogle /></span> <span className='font-semibold text-base leading-5'>Sign in with Google</span>
        </button>
        <p className="mt-4 text-xl ">Don't have an account?   <Link to="/">  <span className="text-[#1E4AE9] cursor-pointer"> Sign in</span> </Link></p>
    </div>
    
    )
}