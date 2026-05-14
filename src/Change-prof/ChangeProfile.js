import { useState } from "react";
import { Link } from "react-router-dom";
import "./change.css";
import { ProfileContext } from "../App";
import { useContext } from "react";
export const Change = () => {
const { setName , setEmail , setAddres ,setGithub , setFollow , setFollower, setAvatar , setProject }
 = useContext(ProfileContext)
  const [changename, setChangename] = useState("");
  const [changeemail, setChangeemail] = useState("");
  const [changeaddres, setChangeaddres] = useState("");
  const [changegit, setChangegit] = useState("");
  const [changefollow, setChangefollow] = useState("");
  const [changefollower, setChangefollower] = useState("");
  const [changeproject, setChangeproject] = useState("");
  const [tempAvatar, setTempAvatar] = useState(null);
  return (
    <div className="change-container">
      <div className="form-group">
        <input type="text" placeholder="name..." onChange={(event) => setChangename(event.target.value)} />
        <button onClick={() => setName(changename)}>ویرایش اسم</button>
      </div>

      <div className="form-group">
        <input type="email" placeholder="email..." onChange={(event) => setChangeemail(event.target.value)} />
        <button onClick={() =>  setEmail(changeemail)}>ویرایش ایمیل</button>
      </div>

      <div className="form-group">
        <input type="text" placeholder="address..." onChange={(event) => setChangeaddres(event.target.value)} />
        <button onClick={() => setAddres(changeaddres)}>ویرایش آدرس</button>
      </div>

      <div className="form-group">
        <input type="text" placeholder="github..." onChange={(event) => setChangegit(event.target.value)} />
        <button onClick={() =>  setGithub(changegit)}>ویرایش گیت</button>
      </div>

      <div className="form-group">
        <input type="text" placeholder="follow..." onChange={(event) => setChangefollow(event.target.value)} />
        <button onClick={() => setFollow(changefollow)}>ویرایش دنبال شونده</button>
      </div>

      <div className="form-group">
        <input type="text" placeholder="follower..." onChange={(event) => setChangefollower(event.target.value)} />
        <button onClick={() =>  setFollower(changefollower)}>ویرایش دنبال کننده</button>
      </div>

      <div className="form-group">
        <input type="text" placeholder="project..." onChange={(event) => setChangeproject(event.target.value)} />
        <button onClick={() => setProject(changeproject)}>ویرایش پروژه</button>
      </div>
      
      <div className="form-group">
  <input 
    type="file" 
    accept="image/*"
    onChange={(event) => {
      const file = event.target.files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setTempAvatar(imageUrl);
      }
    }}
  />
  <button onClick={() => {
    if (tempAvatar) {
     setAvatar(tempAvatar);
    }
  }}>تغییر عکس</button>
</div>
        
      <Link to={"/"} className="close-link">close</Link>
    </div>
  );
};