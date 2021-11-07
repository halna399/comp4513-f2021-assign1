import React from "react";
import "../styles/template.css";
import "../styles/About.css";

const About = (props) => {
  return (
    <div className="aboutBox">
      <ul>
        <li>
          Heart Logos from
          <a href="https://fonts.google.com/icons?selected=Material+Icons+Outlined:assignment_returned&icon.query=heart">
            Google Icons
          </a>
        </li>
        <li>
          Some button Styling
          <a href="https://moderncss.dev/css-button-styling-guide/">from</a>
        </li>
        <li>
          Icons made by
          <a href="https://www.freepik.com" title="Freepik">
            Freepik
          </a>
          from
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </li>
        <li>
          Scroll bar styles from
          <a href="https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp">
            here
          </a>
        </li>
        <li>
          <a href="link">LINK</a>
        </li>
        <li>
          <a href="link">LINK</a>
        </li>
      </ul>
      <button className="buttonSolid buttonThin" onClick={props.onRequestClose}>
        Close
      </button>
    </div>
  );
};

export default About;
