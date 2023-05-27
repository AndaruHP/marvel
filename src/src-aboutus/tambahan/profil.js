import React from "react";
import backgroundImg from "../assets/gambare.jpg";
import andaru from "../assets/andaru.jpeg";
import andre from "../assets/andre.jpeg";
import ligat from "../assets/ligat.jpeg";
import sammy from "../assets/sammy.jpeg";

const CardProfile = () => {
  return (
    <div
      className="background"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <h1>About Us</h1>
      <div className="card-container">
        <div className="card">
          <div className="circle"></div>
          <img src={andaru} alt="Profile" className="profile-image" />
          <div className="content">
            <h2>Andaru Hymawan Primayudha</h2>
            <p>.....................</p>
          </div>
        </div>

        <div className="card">
          <div className="circle"></div>
          <img src={andre} alt="Profile" className="profile-image" />
          <div className="content">
            <h2>Andre Gamalion</h2>
            <p>
              Seorang keturunan China yang tidak terlihat seperti China. Banyak
              lagi mischief yang terjadi pada pemuda ini, seperti namanya yang
              typo di dalam akta lahir.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="circle"></div>
          <img src={ligat} alt="Profile" className="profile-image" />
          <div className="content">
            <h2>Maha Ligat Dewa Cindra</h2>
            <p>......................</p>
          </div>
        </div>

        <div className="card">
          <div className="circle"></div>
          <img src={sammy} alt="Profile" className="profile-image" />
          <div className="content">
            <h2>Sammy Ghoutan Sitompul</h2>
            <p>.......................</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
