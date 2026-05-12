import { useState } from "react";
import { Link } from "react-router-dom";
import "./change.css";

export const Change = (props) => {
  const [changename, setChangename] = useState("");
  const [changeemail, setChangeemail] = useState("");
  const [changeaddres, setChangeaddres] = useState("");
  const [changegit, setChangegit] = useState("");
  const [changefollow, setChangefollow] = useState("");
  const [changefollower, setChangefollower] = useState("");
  const [changeproject, setChangeproject] = useState("");

  return (
    <div className="change-container">
      <div className="form-group">
        <input type="text" placeholder="name..." onChange={(event) => setChangename(event.target.value)} />
        <button onClick={() => props.setName(changename)}>ویرایش اسم</button>
      </div>

      <div className="form-group">
        <input type="email" placeholder="email..." onChange={(event) => setChangeemail(event.target.value)} />
        <button onClick={() => props.setEmail(changeemail)}>ویرایش ایمیل</button>
      </div>

      <div className="form-group">
        <input type="text" placeholder="address..." onChange={(event) => setChangeaddres(event.target.value)} />
        <button onClick={() => props.setAddres(changeaddres)}>ویرایش آدرس</button>
      </div>

      <div className="form-group">
        <input type="text" placeholder="github..." onChange={(event) => setChangegit(event.target.value)} />
        <button onClick={() => props.setGithub(changegit)}>ویرایش گیت</button>
      </div>

      <div className="form-group">
        <input type="text" placeholder="follow..." onChange={(event) => setChangefollow(event.target.value)} />
        <button onClick={() => props.setFollow(changefollow)}>ویرایش دنبال شونده</button>
      </div>

      <div className="form-group">
        <input type="text" placeholder="follower..." onChange={(event) => setChangefollower(event.target.value)} />
        <button onClick={() => props.setFollower(changefollower)}>ویرایش دنبال کننده</button>
      </div>

      <div className="form-group">
        <input type="text" placeholder="project..." onChange={(event) => setChangeproject(event.target.value)} />
        <button onClick={() => props.setProject(changeproject)}>ویرایش پروژه</button>
      </div>
      <Link to={"/"} className="close-link">close</Link>
    </div>
  );
};