import "./Card.css";
import profilePicture from "../../assets/images/Mazen Rashad.jpg"

export default function Card() {
  return (
    <main className = "mainLayout">
      <div className="cardBox">
        <img src={profilePicture} alt="Profile Picture" />
        <div className="mainInfo">
            <h2 className="fullName">Mazen Rashad</h2>
            <span>MERN Stack Developer</span>
        </div>
      </div>
    </main>
  );
}
