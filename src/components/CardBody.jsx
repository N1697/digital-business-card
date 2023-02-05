import React, { Component } from "react";
import CV from "../images/Front-End Developer Internship - Lê Quang Nghị.png";

const CardBody = () => {
  return (
    <div className="card-body">
      <h1 className="card-body-header">Le Quang Nghi</h1>

      <div className="card-body-phone-number">
        <span>Frontend Developer</span>
        <a href="tel: 0369-848-090">
          <i className="fa-solid fa-phone"></i> 0369-848-090
        </a>
      </div>

      <div className="btn-group">
        <button type="button" className="btn btn-primary btn-email">
          <a href="mailto: lequangnghi16797@gmail.com" className="email-link">
            <i className="fa-solid fa-envelope"></i> Email
          </a>
        </button>
        <button type="button" className="btn btn-light btn-cv">
          <a href={CV} target="_blank" className="cv-link">
            <i className="fa-solid fa-file"></i> CV
          </a>
        </button>
      </div>

      <div className="card-body-text-content">
        <h5>About</h5>
        <p>
          I'm a programmer with solid foundation of Web Development who looking
          for an <strong>Internship</strong> to sharpen my skills
        </p>

        <h5>Skills</h5>
        <ul>
          <li>Main Skills: HTML, CSS, JavaScript, ReactJS</li>
          <li>Other Skills: jQuery, Boostrap, JSON, NodeJS, AJAX, AXIOS</li>
        </ul>
      </div>
    </div>
  );
};

export default CardBody;
