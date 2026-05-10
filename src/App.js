import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom"; 
import { Home } from "./pages/Home/home";
import { About } from "./pages/About/about";
import { Profile } from "./pages/Profile/profile";
import { Nav } from "./Nav/Nav";
import { Change } from "./Change-prof/ChangeProfile";
 function App() {
  const [name , setName] = useState("amin-gholipour")
  const [email , setEmail]= useState("amingholipoor5327@gmail.com")
  const [addres , setAddres]= useState(" Iran-Tehran-Fars ")
  const [github , setGithub] = useState( "https://github.com/amingholipoor5327-oss")

   return (
    <div className="App">
       <Router>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home UserName={name} ></Home>}></Route>
          <Route path="/About" element={<About></About>}></Route>

          <Route path="/Profile" element={
            <Profile 
            UserName={name}
            Email={email}
            Addres={addres}
            Github = {github}
            
            ></Profile>}>
            </Route>

          <Route path="/change" element={
            <Change 
            UserName={name} 
            setName={setName}
            Email={email}
            setEmail={setEmail}
            Addres={addres}
            setAddres={setAddres}
            Github={github}
            setGithub={setGithub}
            ></Change>}>
          </Route>

        </Routes>
       </Router>
    </div>
  );
}

export default App;