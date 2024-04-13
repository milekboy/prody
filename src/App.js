import { BrowserRouter, Routes, Route } from "react-router-dom"
import AgentRegisteration from "./pages/AgentRegisteration";
import UserLogin from "./pages/UserLogin";
import AccountSuccesful from "./pages/AccountSuccessful";
import ContinueReg from "./pages/ContinueReg";
import Otp from "./pages/Otp";
import ResetPassword from "./pages/ResetPassword";
import ResetPassword2 from "./pages/ResetPassword2";
import PasswordResetSuccessful from "./pages/PasswordResetSuccessful";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AgentRegisteration />}/>
      <Route path="user-login" element={<UserLogin />}/>
      <Route path="successful" element={<AccountSuccesful/>}/>
      <Route path="continue-reg" element={<ContinueReg/>}/>
      <Route path="otp-verification" element={<Otp/>}/>
      <Route path="reset-password2" element={<ResetPassword2/>}/>
      <Route path="reset-password" element={<ResetPassword/>}/>
      <Route path="reset-password-successful" element={<PasswordResetSuccessful/>}/>
      <Route path="dashboard" element={<Dashboard/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
