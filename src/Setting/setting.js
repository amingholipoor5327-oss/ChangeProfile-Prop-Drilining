import { useState, useContext } from "react";
import { ProfileContext } from "../App";
import { Link, useNavigate } from "react-router-dom";
import "./Settings.css";

export const Settings = () => {
  const { name, email } = useContext(ProfileContext);
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState("fa");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

   const handleSave = () => {
    localStorage.setItem("darkMode", darkMode);
    localStorage.setItem("notifications", notifications);
    localStorage.setItem("language", language);
    alert("تنظیمات ذخیره شد ✅");
  };

   const handleLogout = () => {
    if (window.confirm("آیا از خروج خود مطمئن هستید؟")) {
      navigate("/");
    }
  };

   const handleDeleteAccount = () => {
    if (window.confirm("⚠️ این اقدام غیرقابل بازگشت است! مطمئنی؟")) {
      alert("حساب کاربری حذف شد");
      navigate("/");
    }
  };

  return (
    <div className={`settings-container ${darkMode ? "dark" : ""}`}>
      <div className="settings-card">
        <h1>⚙️ تنظیمات</h1>

        
        <div className="setting-item">
          <div className="setting-info">
            <span>🌙</span>
            <span>حالت تاریک</span>
          </div>
          <button 
            className={`toggle-btn ${darkMode ? "active" : ""}`}
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "فعال" : "غیرفعال"}
          </button>
        </div>

         <div className="setting-item">
          <div className="setting-info">
            <span>🔔</span>
            <span>اعلان‌ها</span>
          </div>
          <button 
            className={`toggle-btn ${notifications ? "active" : ""}`}
            onClick={() => setNotifications(!notifications)}
          >
            {notifications ? "فعال" : "غیرفعال"}
          </button>
        </div>

         <div className="setting-item">
          <div className="setting-info">
            <span>🌍</span>
            <span>زبان</span>
          </div>
          <select 
            className="language-select"
            value={language} 
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="fa">فارسی</option>
            <option value="en">English</option>
          </select>
        </div>

        { }
        <div className="setting-item info">
          <div className="setting-info">
            <span>👤</span>
            <span>نام کاربری</span>
          </div>
          <span className="info-value">{name}</span>
        </div>

        <div className="setting-item info">
          <div className="setting-info">
            <span>📧</span>
            <span>ایمیل</span>
          </div>
          <span className="info-value">{email}</span>
        </div>

         <div className="setting-item">
          <div className="setting-info">
            <span>🔒</span>
            <span>تغییر رمز عبور</span>
          </div>
          <button className="secondary-btn">تغییر</button>
        </div>

         <div className="setting-item danger">
          <div className="setting-info">
            <span>🗑️</span>
            <span>حذف حساب کاربری</span>
          </div>
          <button className="danger-btn" onClick={handleDeleteAccount}>
            حذف
          </button>
        </div>

         <div className="setting-actions">
          <button className="save-btn" onClick={handleSave}>
            💾 ذخیره تنظیمات
          </button>
          <button className="logout-btn" onClick={handleLogout}>
            🚪 خروج
          </button>
          <Link to="/profile">
            <button className="back-btn">↩️ بازگشت</button>
          </Link>
        </div>

         {showDeleteConfirm && (
          <div className="modal-overlay">
            <div className="modal">
              <h3>⚠️ تأیید حذف حساب</h3>
              <p>آیا از حذف حساب خود مطمئن هستید؟ این کار غیرقابل بازگشت است.</p>
              <button onClick={handleDeleteAccount}>بله، حذف کن</button>
              <button onClick={() => setShowDeleteConfirm(false)}>انصراف</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};