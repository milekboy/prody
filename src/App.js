
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AgentRegisteration from "./pages/AgentRegisteration";
import UserLogin from "./pages/UserLogin";



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AgentRegisteration />}/>
      <Route path="user-login" element={<UserLogin />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
