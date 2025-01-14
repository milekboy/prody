import SideImage from "../components/SideImage";
import { Link } from "react-router-dom";
export default function AccountSuccesful(){
return(
    <div className="lg:flex lg:px-0 px-4 gap-20 ">
       <div className="py-32  lg:ps-56">
          <div className="flex justify-center ">
          <img className="h-48" src="Images/Verify.png" alt="" />
          </div>
          <div>
             <h1 className="text-[#4D4D4D] font-bold text-3xl text-center mt-8">Account Created Successfully</h1>
             <p className="text-2xl mt-8 text-center">Kindly Login to Update your business information</p>
          </div>
          <Link to="/"> 
          <button className="bg-[#FFC107] text-white lg:w-[462px] h-[74px] w-full   text-2xl mt-8 rounded-xl">Back to Login</button>
          </Link>
       </div>
       <div>
        <SideImage/>
       </div>
    </div>
)
}