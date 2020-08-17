import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faLinkedin,
    faTwitter,
    faGithub,
    faMedium,
    faYoutube
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div class="social-container">
      <h3 className = "heading">Created by Anjali Sharma</h3>
        <a href="https://www.linkedin.com/in/ivankatliarchuk/"
            className="linkedin social">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://github.com/ivankatliarchuk" className="github social">
            <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://medium.com/@ivan.katliarchuk" className="medium social">
            <FontAwesomeIcon icon={faMedium} size="2x" />
      </a>
      <a href="https://www.youtube.com/channel/UCukj_3OqMoCVHCSFLAX0a1A" className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
    </div>
  );
}
