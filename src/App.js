import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Landing from "./pages/Landing.jsx"
import {Routes,Route} from "react-router-dom"



function App(){
  const [users,setusers]=useState([{username:"kishor",password:"123"}])
  return (
    <div>
    <BrowserRouter>
   
    <Routes>
    <Route path='/login' element={<Login users={users} setusers={setusers}/>}></Route>
    <Route path='/signup' element={<Signup users={users} setusers={setusers}/>}></Route>
    <Route path="/landing" element={<Landing></Landing>}></Route>
  
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
