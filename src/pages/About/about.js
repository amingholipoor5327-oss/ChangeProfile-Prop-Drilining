import "./About.css";

export const About = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1>  درباره ما</h1>
        
        <div className="about-content">
          <p>
          ساخته شده است<strong> React.js </strong>  این یک پروژه پروفایل کاربری است که با 
             
           
          </p>

          <p>
            در این پروژه، کاربر می‌تواند اطلاعات شخصی خود مانند 
            نام، ایمیل، آدرس، لینک گیت‌هاب و حتی عکس پروفایل خود را 
            ویرایش کند.
          </p>

          <p>
           :هدف از ساخت این پروژه، آشنایی با مفاهیمی مانند    
          </p>

          <ul>
            <li>✅ کامپوننت‌ها در React</li>
            <li>✅ useState و Props</li>
            <li>✅ React Router DOM</li>
            <li>✅ مدیریت فرم‌ها و ورودی کاربر</li>
            <li>✅ کار با فایل و آپلود عکس</li>
            <li>✅ Usecontext</li>
            <li>✅ Localstorge</li>
           </ul>

          <p>
            این پروژه توسط 
            <strong> محمدامین قلی‌پور </strong> 
            توسعه یافته است.
          </p>
        </div>

        <div className="info-box">
          <p>📧 ارتباط با ما: amingholipoor5327@gmail.com</p>
          <p>🐱 گیت‌هاب: https://github.com/amingholipoor5327-oss</p>
        </div>
      </div>
    </div>
  );
};