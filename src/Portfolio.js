import "./Portfolio.css";
import first from "./heyfood.jpg";
import second from "./mrsool.jpg";

export default function Portfolio() {
  return (
    <div>
      <ProjectOne />
      <ProjectTwo />
    </div>
  );
}

function ProjectOne() {
  return (
    <div className="main-container">
      <div className="image">
        <img src={first} alt="a set table captured with a phone camera lens" />
      </div>

      <div className="heyfood">
        <h1 className="h1">
          {" "}
          HeyFood{" "}
          <span className="sub-h1">
            — Implementing user authentication using email, social media, or
            phone numbers.
          </span>
        </h1>
        <p className="title-of-project">Mobile App Design</p>
      </div>
    </div>
  );
}

function ProjectTwo() {
  return (
    <div className="main-container">
      <div className="image">
        <img src={second} alt="a set table captured with a phone camera lens" />
      </div>

      <div className="heyfood">
        <h1 className="h1-second">
          {" "}
          MrSool{" "}
          <span className="sub-h1">
            — Overseeing the development of key features such as user
            authentication, menu management, order processing, payment
            integration, and real-time tracking.
          </span>
        </h1>
        <p className="title-of-project-second">Development of Key Features</p>
      </div>
    </div>
  );
}
