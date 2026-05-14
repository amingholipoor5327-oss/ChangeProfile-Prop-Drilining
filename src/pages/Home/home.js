import "./Home.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProfileContext } from "../../App";
export const Home = (props) => {
  const {name, follower, project}= useContext(ProfileContext)
  return (
    <div className="dashboard">
      <div className="welcome-card">
        <h2>سلام { name} 👋</h2>
        <p>خوش برگشتی! امروز چیکار می‌خوای انجام بدی؟</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span>📁</span>
          <h3>{project}</h3>
          <p>پروژه</p>
        </div>
        <div className="stat-card">
          <span>👥</span>
          <h3>{follower}</h3>
          <p>دنبال‌کننده</p>
        </div>
        <div className="stat-card">
          <span>⭐</span>
          <h3>۸۹</h3>
          <p>امتیاز</p>
        </div>
      </div>

      <div className="action-buttons">
        <Link to="/profile">
          <button>مشاهده پروفایل</button>
        </Link>
        <Link to="/change">
          <button>ویرایش اطلاعات</button>
        </Link>
      </div>
    </div>
  );
};