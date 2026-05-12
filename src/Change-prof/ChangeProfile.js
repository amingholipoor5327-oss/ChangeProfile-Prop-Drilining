import { useState } from "react";
import { Link } from "react-router-dom";
import "./change.css";

export const Change = (props) => {
  const [changename, setChangename] = useState("");
  const [changeemail, setChangeemail] = useState("");
  const [changeaddres, setChangeaddres] = useState("");
  const [changegit, setChangegit] = useState("");

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

      <Link to={"/"} className="close-link">close</Link>
    </div>
  );
};