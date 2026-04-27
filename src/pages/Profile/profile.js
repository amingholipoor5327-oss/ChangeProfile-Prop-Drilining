import './Profile.css';
import Image from "./image/photo_2025-12-27_10-42-20.jpg"

export const Profile = (props) => {
  return (
    <div className="profile-container">
      <div className="profile-card">
         <div className="profile-avatar">
          <img 
            src={Image} 
            alt="Profile"
          />
        </div>

         <div className="profile-info">
          <h2> {props.UserName}  </h2>
          <p className="username">https://github.com/amingholipoor5327-oss</p>
          <p className="bio">
            توسعه‌دهنده فرانت‌اند | React و JavaScript
          </p>
          
          <div className="details">
            <p>📧 amingholipoor1@gmail.com</p>
            <p>📍 Iran-Tehran-Fars  </p>
           </div>

           <div className="stats">
            <div>
              <span className="num">۱,۲۴۷</span>
              <span>دنبال‌کننده</span>
            </div>
            <div>
              <span className="num">۳۵۶</span>
              <span>دنبال‌شونده</span>
            </div>
            <div>
              <span className="num">12</span>
              <span>پروژه</span>
            </div>
          </div>

           <div className="buttons">
            <button className="btn-edit">ویرایش پروفایل</button>
            <button className="btn-setting">تنظیمات</button>
          </div>
        </div>
      </div>
    </div>
  );
};