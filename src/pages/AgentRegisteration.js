import { Link } from "react-router-dom";
export default function AgentRegisteration(){
    return(
        <div className="px-56 py-32">
        <p className="text-4xl font-semibold">
        Become an agent!
        </p>
        <p className="text-xl mt-4 tracking-wide">
        Register to become an agent today
        </p>
      <div className="flex gap-4 mt-8 ">
      <input type="text" placeholder="First Name" className=" h-24  w-[229px] z-0 placeholder:focus:-translate-y-8 placeholder:z-30 transition ease-in-out border-2 rounded-lg border-zinc-400 ps-3 "/>
    
    <input type="text" placeholder="Last Name" className=" h-24 w-[229px] z-0 placeholder:focus:-translate-y-8 placeholder:z-30 transition ease-in-out border-2 rounded-lg border-zinc-400 ps-3 "/>
      </div>
        <input type="email" placeholder="Email Address" className=" h-24 mt-8 w-[470px] z-0 placeholder:focus:-translate-y-8 placeholder:z-30 transition ease-in-out border-2 rounded-lg border-zinc-400 ps-3 "/>
    
        <input type="email" placeholder="Password" className=" h-24 mt-4 w-[470px] z-0 placeholder:focus:-translate-y-8 placeholder:z-30 transition ease-in-out border-2 rounded-lg border-zinc-400 ps-3 "/>
    
        <input type="email" placeholder="Confirm Password" className=" h-24 mt-4 w-[470px] z-0 placeholder:focus:-translate-y-8 placeholder:z-30 transition ease-in-out border-2 rounded-lg border-zinc-400 ps-3 "/>

           <button className="bg-[#FFC107] text-white w-[462px] h-[74px] border-2 border-black text-2xl mt-4 rounded-xl">Sign Up</button>
     
    <Link to="user-login"> 
        <button className="bg-[#162D3A] text-white w-[462px] h-[74px] border-2 border-black text-2xl mt-4 rounded-xl">Back to Login</button>
        </Link>
        <div className=' justify-center gap-4 mt-4 items-center flex w-[462px]'>
            <p className="font-semibold">Terms and conditions</p>
             <p className='font-bold mb-2 text-sm'>.</p>
            <p>Privacy policy</p>
            </div>
           
           
        </div>
    )
}