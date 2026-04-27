import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom"; 
import { Home } from "./pages/Home/home";
import { About } from "./pages/About/about";
import { Profile } from "./pages/Profile/profile";
import { Nav } from "./Nav/Nav";
 function App() {
  const [name , setName] = useState("amin-gholipour")
   return (
    <div className="App">
       <Router>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home UserName={name} ></Home>}></Route>
          <Route path="/About" element={<About></About>}></Route>
          <Route path="/Profile" element={<Profile UserName={name}></Profile>}></Route>
        </Routes>
       </Router>
    </div>
  );
}

export default App;