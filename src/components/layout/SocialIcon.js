import React from "react";

const SocialIcon = () => {
  return (
    <div className="social">
      <a href="mailto:sanskruti.gunde@gmail.com" className="mail">
        <i className="far fa-envelope"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/sanskrutigunde/"
        target="_blank"
        rel="noreferrer"
        className="linkedin"
      >
        <i className="fa fa-linkedin"></i>
      </a>
      <a
        href="https://github.com/SanskrutiGunde"
        target="_blank"
        rel="noreferrer"
        className="github"
      >
        <i className="fa fa-github"></i>
      </a>
    </div>
  );
};

export default SocialIcon;
