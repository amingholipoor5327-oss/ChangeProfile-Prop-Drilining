import './Profile.css';
import { Link } from 'react-router-dom';
import Image from "./image/photo_2025-12-27_10-42-20.jpg"

export const Profile = (props) => {
  return (
    <div className="profile-container">
      <div className="profile-card">
         <div className="profile-avatar">
        <img 
          src={props.avatar || Image} 
           alt="Profile"
        />
        </div>

         <div className="profile-info">
          <h2> {props.UserName}  </h2>
          <p className="username">{props.Github}</p>
          <p className="bio">
            توسعه‌دهنده فرانت‌اند | React و JavaScript
          </p>
          
          <div className="details">
            <p>📧{props.Email} </p>
            <p>📍{props.Addres}  </p>
           </div>

           <div className="stats">
            <div>
              <span className="num">{props.Follower}</span>
              <span>دنبال‌کننده</span>
            </div>
            <div>
              <span className="num">{props.Follow}</span>
              <span>دنبال‌شونده</span>
            </div>
            <div>
              <span className="num">{props.Project}</span>
              <span>پروژه</span>
            </div>
          </div>

           <div className="buttons">
            <Link to={"/change"}> <button className="btn-edit">ویرایش پروفایل</button></Link>
            <button className="btn-setting">تنظیمات</button>
          </div>
        </div>
      </div>
    </div>
  );
};