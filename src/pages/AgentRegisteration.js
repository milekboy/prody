import { useRef, useState, useEffect } from "react";
import { Link  } from "react-router-dom";
import SideImage from "../components/SideImage";
import {  useNavigate } from "react-router-dom";
import NetworkInstance from "../api/NetworkInstance";
const NAME_REGEX = /^[a-zA-Z][a-zA-Z]{3,23}$/;
const PWD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export default function AgentRegisteration(){
  const networkInstance = NetworkInstance();
  const navigate = useNavigate();
  const nameRef= useRef();
  const errRef = useRef();
  
  const [first, setFirst]= useState('');
  const [validFirst, setValidFirst]= useState(false);

  const [last, setLast]= useState('');
  const [validLast, setValidLast]= useState(false);


  const [email, setEmail]= useState('');


  const [pwd, setPwd]= useState('');
  const [validPwd, setValidPwd]= useState(false);


  const [pwdMatch, setPwdMatch]= useState('');
  const [validMatch, setValidMatch]= useState(false);


  const [errMessage, setErrMessage]=useState('');

  useEffect(()=>{
setValidFirst(NAME_REGEX.test(first))
  },[first])

  useEffect(()=>{
    setValidLast(NAME_REGEX.test(last))
      },[last])

      useEffect(()=>{
       setValidPwd(PWD_REGEX.test(pwd));
       setValidMatch( pwd === pwdMatch);
      },[pwd, pwdMatch])

      useEffect(()=>{
       setErrMessage('');
      },[first, last,email, pwd, pwdMatch])


      const signUp = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
      
        try {
          const response = await networkInstance.post('/api/auth/register', {
            firstName: first,
            lastName: last, 
            email: email.toLowerCase(),
            password: pwd,
            confirmPassword: pwdMatch,
          })
      if (response?.status=== 200 || response?.status=== 201){
    console.log('successful')
        setFirst('');
        setLast('');
        setEmail('');
        setPwdMatch('');
        setPwd('')
        setTimeout(() => {
          navigate("/successful")
        }, 2000)
      }
         
      } catch (err) {
      
        console.log(err)
         
      }
        }


    return(
      <div className="lg:flex lg:px-0 px-4 gap-20">
        <p ref={errRef} className={errMessage? 'block': 'hidden'} aria-live="assertive">{errMessage}</p>
        <div className="lg:ps-56 py-32">
        <p className="text-4xl font-semibold">
        Become an agent!
        </p>
        <p className="text-xl mt-4 tracking-wide">
        Register to become an agent today
        </p>
        <form onSubmit={signUp}>
          
      <div className="lg:flex gap-4 mt-8 ">
      <label htmlFor="firstname" className="hidden">
              Firstname
          </label>
      <input 
       type="text"
       id="firstname"
       ref={nameRef}
       onChange={(e) => setFirst(e.target.value)}
       value={first}
       required
       aria-invalid={validFirst ? "false" : "true"}
      placeholder="First Name" 
      className=" h-24 w-full lg:w-[229px] z-0 placeholder:focus:-translate-y-8 placeholder:z-30 transition ease-in-out border-2 rounded-lg border-zinc-400 ps-3 "/>
    
      <label htmlFor="lastname" className="hidden">
              Lastname
          </label>
    <input
    type="text"
    id="lastname"
    ref={nameRef}
    onChange={(e) => setLast(e.target.value)}
    value={last}
    required
    aria-invalid={validLast ? "false" : "true"}
     placeholder="Last Name" className=" h-24 w-full lg:w-[229px] z-0  placeholder:focus:-translate-y-8 placeholder:z-30 transition ease-in-out border-2 rounded-lg border-zinc-400 ps-3 "/>
      </div>
      <div>
      <label htmlFor="email" className="hidden">
             Email
          </label>
      <input 
      type="email"
      id="email"
      onChange={(e) => setEmail(e.target.value)}
      value={email}
      required
     placeholder="Email Address" className=" h-24 mt-8 w-full lg:w-[470px] z-0 placeholder:focus:-translate-y-8 placeholder:z-30 transition ease-in-out border-2 rounded-lg border-zinc-400 ps-3 "/>
    
      <label htmlFor="password" className="hidden">
             password
          </label>
    <input 
    type="text"
    id="password"
    onChange={(e) => setPwd(e.target.value)}
    value={pwd}
    required
    aria-invalid={validPwd ? "false" : "true"}
   placeholder="Password" className=" h-24 mt-4 w-full lg:w-[470px] z-0 placeholder:focus:-translate-y-8 placeholder:z-30 transition ease-in-out border-2 rounded-lg border-zinc-400 ps-3 "/>

    <label htmlFor="confirmpwd" className="hidden">
              confirmpwd
          </label>
    <input 
        type="text"
        id="confirm"
        onChange={(e) => setPwdMatch(e.target.value)}
        value={pwdMatch}
        required
        aria-invalid={validMatch ? "false" : "true"}

   placeholder="Confirm Password" className=" h-24 mt-4 w-full lg:w-[470px] z-0 placeholder:focus:-translate-y-8 placeholder:z-30 transition ease-in-out border-2 rounded-lg border-zinc-400 ps-3 "/>
      </div>
      <button
     disabled={!validFirst || !validLast|| !validPwd || !validMatch ? true : false}
      className="bg-[#FFC107] text-white lg:w-[462px] w-full h-[74px] border-2 border-black text-2xl mt-4 rounded-xl"
      
      >Sign Up</button>
     </form>
          
     
    <Link to="/"> 
        <button className="bg-[#162D3A] text-white lg:w-[462px] w-full h-[74px] border-2 border-black text-2xl mt-4 rounded-xl">Back to Login</button>
        </Link>
        <div className=' justify-center gap-4 mt-4 items-center flex lg:w-[462px]'>
            <p className="font-semibold">Terms and conditions</p>
             <p className='font-bold mb-2 text-sm'>.</p>
            <p>Privacy policy</p>
            </div>
           
          
        </div>
        <SideImage/>
        </div>
    )
}