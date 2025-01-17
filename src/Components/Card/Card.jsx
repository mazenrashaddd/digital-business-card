import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareGithub,
  faLinkedin,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import profilePicture from "../../assets/images/Mazen Rashad.png";

export default function Card() {
  return (
    <main className="mainLayout">
      <div className="cardBox">
        <img src={profilePicture} alt="Profile Picture" />
        <div className="mainInfo">
          <span className="fullName">Mazen Rashad</span>
          <span className="occupation">MERN Stack Developer</span>
          <a className="businessEmail">mazenrashadd@gmail.com</a>
        </div>
        <div className="contactButtonsSection">
          <button className="githubButton">
            <FontAwesomeIcon
              icon={faSquareGithub}
              style={{ color: "#1E1F26", marginRight: "9px" }}
            />
            GitHub
          </button>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="linkedInButton">
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ color: "#FFFFFF", marginRight: "9px" }}
              />
              LinkedIn
            </button>
          </a>
        </div>
        <div className="aboutSection">
          <span>About</span>
          <p>
            I am a MERN Stack Developer passionate about creating efficient
            solutions and automating workflows. I prioritize security, follow
            best practices, and am always eager to explore and learn new
            technologies.
          </p>
        </div>
        <div className="interestsSection">
          <span>Interests</span>
          <p>
            MERN Stack Developer. AI enthusiast. Problem solver. Tech explorer.
            Automation advocate. React wizard. Data science learner. Car guy.
            Music head.
          </p>
        </div>
        <div className="footerSection">
          <a href="" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="fontAwesomeIcon"
              icon={faLinkedin}
              style={{ fontSize: "35px", color: "#918E9B" }}
            />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="fontAwesomeIcon"
              icon={faSquareGithub}
              style={{ fontSize: "35px", color: "#918E9B" }}
            />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="fontAwesomeIcon"
              icon={faSquareEnvelope}
              style={{ fontSize: "35px", color: "#918E9B" }}
            />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="DiscordfontAwesomeIcon"
              icon={faDiscord}
              style={{
                fontSize: "22px",
                backgroundColor: "#918E9B",
                color: "#161619",
                borderRadius: "4px",
                padding: "4px 3px",
                marginLeft: "-1px"
              }}
            />
          </a>
        </div>
      </div>
    </main>
  );
}
