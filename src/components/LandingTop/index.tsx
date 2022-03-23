import React from "react";
// import {
//   EnvelopeFill,
//   FileArrowDownFill,
//   ArrowDownCircleFill,
// } from "react-bootstrap-icons";
import bioInterface from "src/lib/Types";

interface LandingTopProps extends bioInterface {
  scrollToExperience: () => void;
}

const LandingTop = ({
  bio: { firstName, nationality, aboutMe, email, resumeLink, social },
  scrollToExperience,
}: LandingTopProps) => {
  return (
    <section className="landing-top position-relative" id="landing-top">
      <div className="container landing-top__text">
        <div className="landing-block">
          <h1 className="landing-title">
            Hey, I’m {firstName} - A Software <br />
            Engineer from {nationality}.
          </h1>
          <p className="mt-4">{aboutMe}</p>
          <div className="d-flex mt-4 landing-block__item">
            <div className="landing-block__icon">
              <i className="fa fa-envelope-open-text" />
            </div>
            <a className="email-link" href={`mailto:${email}`}>
              {email}
            </a>
          </div>
          <div className="d-flex mt-2 landing-block__item">
            <div className="landing-block__icon">
              <i className="fa fa-file-arrow-down" />
            </div>
            <a
              className="download-link d-block"
              href={resumeLink}
              target="__blank"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
      <div className="landing-top__foot" onClick={scrollToExperience}>
        <i className="fa fa-circle-arrow-down fa-beat" />
      </div>
      <ul className="landing-top__side">
        {social.map(({ name, url }, key) => (
          <li key={key}>
            <a href={url} target="__blank">
              <i className={`fa fa-${name.toLocaleLowerCase()}`} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LandingTop;
