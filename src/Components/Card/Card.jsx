import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareGithub,
  faLinkedin,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import profilePicture from "../../assets/images/Mazen Rashad.png";

export default function Card(props) {
  return (
    <main className="mainLayout">
      <div className="cardBox">
        <img src={profilePicture} alt="Mazen Rashad" />
        <div className="mainInfo">
          <span className="fullName">{props.fullName}</span>
          <span className="occupation">{props.occupation}</span>
          <a
            className="businessEmail"
            href={`mailto:${props.email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.email}
          </a>
        </div>
        <div className="contactButtonsSection">
          <a
            href={props.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="githubButton">
              <FontAwesomeIcon
                icon={faSquareGithub}
                style={{ color: "#1E1F26", marginRight: "9px" }}
              />
              GitHub
            </button>
          </a>
          <a
            href={props.linkedinLink}
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
            {props.aboutParagraph}
          </p>
        </div>
        <div className="interestsSection">
          <span>Interests</span>
          <p>
            {props.interestsParagraph}
          </p>
        </div>
        <div className="footerSection">
          <a
            href={props.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="fontAwesomeIcon"
              icon={faLinkedin}
              style={{ fontSize: "35px", color: "#918E9B" }}
            />
          </a>
          <a
            href={props.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="fontAwesomeIcon"
              icon={faSquareGithub}
              style={{ fontSize: "35px", color: "#918E9B" }}
            />
          </a>
          <a
            href={`mailto:${props.email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="fontAwesomeIcon"
              icon={faSquareEnvelope}
              style={{ fontSize: "35px", color: "#918E9B" }}
            />
          </a>
          <a
            href={props.discordLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="DiscordfontAwesomeIcon"
              icon={faDiscord}
              style={{
                fontSize: "22px",
                backgroundColor: "#918E9B",
                color: "#161619",
                borderRadius: "4px",
                padding: "4px 3px",
                marginLeft: "-1px",
              }}
            />
          </a>
        </div>
      </div>
    </main>
  );
}
