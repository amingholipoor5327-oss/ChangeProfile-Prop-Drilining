import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom"; 
import { Home } from "./pages/Home/home";
import { About } from "./pages/About/about";
import { Profile } from "./pages/Profile/profile";
 function App() {
  const [name , setName] = useState("amin-gholipour")
   return (
    <div className="App">
       <Routes>
        <Router>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/About" element={<About></About>}></Route>
          <Route path="/Profile" element={<Profile></Profile>}></Route>
        </Router>
       </Routes>
    </div>
  );
}

export default App;