import { useState } from "react"

export default function ContinueReg(){
    const [toggle, setToggle]= useState(1)
    function updateToggle(id){
        setToggle(id)
    }
    return(
        <div className="lg:px-28 px-4 py-20">
            <div>
            <p className="text-[#4D4D4D] text-5xl font-bold">
        Welcome Back 👋
    </p>
    <p className="text-[#AEAEAE] mt-3 text-base font-semibold">Kindly finish up your registration</p>
            </div>
            <div className="mt-16">
                <div className="flex gap-7 text-lg font-medium">
                  <p onClick={()=>updateToggle(1)} className={toggle === 1 ? "cursor-pointer text-[#FEC70D] underline" : "cursor-pointer"}>Bio-Data</p>
                  <p onClick={()=>updateToggle(2)} className={toggle === 2 ? "cursor-pointer text-[#FEC70D] underline" : "cursor-pointer"}>Qualification</p>
                  <p onClick={()=>updateToggle(3)}  className={toggle === 3 ? "cursor-pointer text-[#FEC70D] underline" : "cursor-pointer"}>Next of Kin</p>
                </div>
                <div className={toggle === 1 ? "block": "hidden"}>
                <p className="mt-10 text-2xl font-semibold text-[#4D4D4D]">Bio-Data</p>
                <p className="text-[#AEAEAE] mt-3 text-base font-semibold">They are personal details</p>
                <div className="flex gap-7">
                <input type="text" placeholder="First Name" className=" h-16 mt-8 w-full lg:w-[470px] z-0 placeholder:focus:-translate-y-5 placeholder:z-30 transition ease-in-out border-2 rounded-lg border-zinc-400 ps-3 "/>
                <input type="text" placeholder="Middle Name" className=" h-16 mt-8 w-full lg:w-[470px] z-0 placeholder:focus:-translate-y-5 placeholder:z-30 transition ease-in-out border-2 rounded-lg border-zinc-400 ps-3 "/>
                <input type="text" placeholder="Last Name" className=" h-16 mt-8 w-full lg:w-[470px] z-0 placeholder:focus:-translate-y-5 placeholder:z-30 transition ease-in-out border-2 rounded-lg border-zinc-400 ps-3 "/>
                </div>
                <div className="flex justify-center">
                <div className="flex gap-7">
                <input type="number" placeholder="Phone Number" className=" h-16 mt-8 w-full lg:w-[470px] z-0 placeholder:focus:-translate-y-5 placeholder:z-30 transition ease-in-out border-2 rounded-lg border-zinc-400 ps-3 "/>
                <input type="email" placeholder="Email Address" className=" h-16 mt-8 w-full lg:w-[470px] z-0 placeholder:focus:-translate-y-5 placeholder:z-30 transition ease-in-out border-2 rounded-lg border-zinc-400 ps-3 "/>
                </div>
                </div>
                <div className="flex justify-center">
                <div className="flex gap-7">
                <input type="text" placeholder="Address" className=" h-16 mt-8 w-full lg:w-[470px] z-0 placeholder:focus:-translate-y-5 placeholder:z-30 transition ease-in-out border-2 rounded-lg border-zinc-400 ps-3 "/>
                <input type="text" placeholder="Date of birth" className=" h-16 mt-8 w-full lg:w-[470px] z-0 placeholder:focus:-translate-y-5 placeholder:z-30 transition ease-in-out border-2 rounded-lg border-zinc-400 ps-3 "/>
                </div>
                </div>
                <div className="flex justify-center">
                <div className="flex gap-7">
                <input type="number" placeholder="NIN" className=" h-16 mt-8 w-full lg:w-[470px] z-0 placeholder:focus:-translate-y-5 placeholder:z-30 transition ease-in-out border-2 rounded-lg border-zinc-400 ps-3 "/>
                <input type="number" placeholder="BVN" className=" h-16 mt-8 w-full lg:w-[470px] z-0 placeholder:focus:-translate-y-5 placeholder:z-30 transition ease-in-out border-2 rounded-lg border-zinc-400 ps-3 "/>
                </div>
                </div>
          
            <div className="relative">
            <button onClick={()=>updateToggle(2)} className="bg-[#FFC107] text-white lg:w-80 h-[74px] w-full   text-2xl mt-8 rounded-xl right-0 absolute">Continue</button>
            </div>
            </div>
            <div className={toggle === 2 ? "block": "hidden"}>
            <p className="mt-10 text-2xl font-semibold text-[#4D4D4D]">Qualification</p>
            <p className="text-[#AEAEAE] mt-3 text-base font-semibold">They are personal details</p>
            <div className="flex gap-7">
                <input type="text" placeholder="Name of Institution" className=" h-16 mt-8 w-full lg:w-[470px] z-0 placeholder:focus:-translate-y-5 placeholder:z-30 transition ease-in-out border-2 rounded-lg border-zinc-400 ps-3 "/>
                <input type="text" placeholder="Course Studied" className=" h-16 mt-8 w-full lg:w-[470px] z-0 placeholder:focus:-translate-y-5 placeholder:z-30 transition ease-in-out border-2 rounded-lg border-zinc-400 ps-3 "/>
                </div>
                <div className="flex gap-7">
                <input type="text" placeholder="Degree Obtained" className=" h-16 mt-8 w-full lg:w-[470px] z-0 placeholder:focus:-translate-y-5 placeholder:z-30 transition ease-in-out border-2 rounded-lg border-zinc-400 ps-3 "/>
                <input type="text" placeholder="Professional Degree Obtained" className=" h-16 mt-8 w-full lg:w-[470px] z-0 placeholder:focus:-translate-y-5 placeholder:z-30 transition ease-in-out border-2 rounded-lg border-zinc-400 ps-3 "/>
                </div>
                <div className="lg:relative mt-8 ">
                    <div className="lg:right-0 gap-7 flex lg:absolute">
                    <p onClick={()=>updateToggle(1)} className="text-2xl font-bold mt-4 cursor-pointer underline">
                        Back
                    </p>
            <button onClick={()=>updateToggle(3)} className="bg-[#FFC107] text-white lg:w-80 h-[74px] w-full   text-2xl rounded-xl ">Continue</button>
            </div>
            </div>
            </div>
            <div className={toggle === 3 ? "block": "hidden"}>
            <p className="mt-10 text-2xl font-semibold text-[#4D4D4D]">Next of Kin</p>
                <p className="text-[#AEAEAE] mt-3 text-base font-semibold">They are personal details</p>
                <div className="flex gap-7">
                <input type="text" placeholder="Full Name" className=" h-16 mt-8 w-full lg:w-[470px] z-0 placeholder:focus:-translate-y-5 placeholder:z-30 transition ease-in-out border-2 rounded-lg border-zinc-400 ps-3 "/>
                <input type="number" placeholder="Phone Number" className=" h-16 mt-8 w-full lg:w-[470px] z-0 placeholder:focus:-translate-y-5 placeholder:z-30 transition ease-in-out border-2 rounded-lg border-zinc-400 ps-3 "/>
                </div>
                <div className="flex gap-7">
                <input type="email" placeholder="Email Address" className=" h-16 mt-8 w-full lg:w-[470px] z-0 placeholder:focus:-translate-y-5 placeholder:z-30 transition ease-in-out border-2 rounded-lg border-zinc-400 ps-3 "/>
                <input type="text" placeholder="Home Address" className=" h-16 mt-8 w-full lg:w-[470px] z-0 placeholder:focus:-translate-y-5 placeholder:z-30 transition ease-in-out border-2 rounded-lg border-zinc-400 ps-3 "/>
                </div>
                <div className="flex gap-7">
                <input type="text" placeholder="Relationship" className=" h-16 mt-8 w-full lg:w-[470px] z-0 placeholder:focus:-translate-y-5 placeholder:z-30 transition ease-in-out border-2 rounded-lg border-zinc-400 ps-3 "/>
                <input type="text" placeholder="Occupation" className=" h-16 mt-8 w-full lg:w-[470px] z-0 placeholder:focus:-translate-y-5 placeholder:z-30 transition ease-in-out border-2 rounded-lg border-zinc-400 ps-3 "/>
                </div>
                <div className="lg:relative mt-8 ">
                    <div className="lg:right-0 gap-7 flex lg:absolute">
                    <p onClick={()=>updateToggle(2)} className="text-2xl font-bold mt-4 cursor-pointer underline">
                        Back
                    </p>
            <button  className="bg-[#FFC107] text-white lg:w-80 h-[74px] w-full   text-2xl rounded-xl ">Submit</button>
            </div>
            </div>
            </div>
            </div>
        </div>
    )
}