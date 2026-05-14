import { createContext ,  useState } from "react";
import "./App.css";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom"; 
import { Home } from "./pages/Home/home";
import { About } from "./pages/About/about";
import { Profile } from "./pages/Profile/profile";
import { Nav } from "./Nav/Nav";
import { Change } from "./Change-prof/ChangeProfile"; 
export const ProfileContext = createContext()
 function App() {
  const [name , setName] = useState("amin-gholipour")
  const [email , setEmail]= useState("amingholipoor5327@gmail.com")
  const [addres , setAddres]= useState(" Iran-Tehran-Fars ")
  const [github , setGithub] = useState( "https://github.com/amingholipoor5327-oss")
  const [follow , setFollow] = useState( "356")
  const [follower , setFollower] = useState( "1264")
  const [project , setProject] = useState( "11")
  const [avatar, setAvatar] = useState(null);

   return (
    <div className="App">
      <ProfileContext.Provider value={{
        name , setName , 
        email , setEmail , 
        addres , setAddres ,
        github , setGithub , 
        follow , setFollow , 
        follower , setFollower, 
        project , setProject , 
        avatar , setAvatar  }}>
       <Router>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home ></Home>}></Route>
          <Route path="/About" element={<About></About>}></Route>
          <Route path="/Profile" element={<Profile ></Profile>}></Route>
          <Route path="/change" element={<Change></Change>}></Route>
        </Routes>
       </Router>
       </ProfileContext.Provider>
    </div>
  );
}

export default App;