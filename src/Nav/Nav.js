import { Link } from "react-router-dom";

export const Nav = ()=>{
    return<div>
        <Link to={"/"}>Home</Link>
        <Link to={"/Profile"}>Profile</Link>
        <Link to={"/About"}>About</Link>
    </div>
}