import './Profile.css';
import { Link } from 'react-router-dom';
import Image from "./image/photo_2025-12-27_10-42-20.jpg"
import { ProfileContext } from '../../App';
import { useContext } from 'react';
export const Profile = () => {
  const {name, email, addres, github, follow , follower, project ,avatar} = useContext(ProfileContext)

  return (
    <div className="profile-container">
      <div className="profile-card">
         <div className="profile-avatar">
        <img 
          src={ avatar || Image} 
           alt="Profile"
        />
        </div>

         <div className="profile-info">
          <h2> {name}  </h2>
          <p className="username">{github}</p>
          <p className="bio">
            توسعه‌دهنده فرانت‌اند | React و JavaScript
          </p>
          
          <div className="details">
            <p>📧{email} </p>
            <p>📍{addres}  </p>
           </div>

           <div className="stats">
            <div>
              <span className="num">{follower}</span>
              <span>دنبال‌کننده</span>
            </div>
            <div>
              <span className="num">{follow}</span>
              <span>دنبال‌شونده</span>
            </div>
            <div>
              <span className="num">{project}</span>
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