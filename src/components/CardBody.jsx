import React, { Component } from "react";

const CardBody = () => {
  return (
    <div className="card-body">
      <h1 className="card-body-header">Le Quang Nghi</h1>
      <p>Frontend Developer</p>

      <div className="btn-group">
        <button type="button" className="btn btn-primary">
          <i className="fa-solid fa-envelope"></i> Email
        </button>
        <button type="button" className="btn btn-light">
          <i className="fa-brands fa-linkedin"></i> LinkedIn
        </button>
      </div>

      <div className="card-body-text-content">
        <h5>About</h5>
        <p>
          I'm a self-taught programmer with solid foundation of Web Development
          who looking for an opportunity to sharpen my skills
        </p>

        <h5>Skills</h5>
        <p>
          HTML, CSS, JavaScript, jQuery, Boostrap, JSON, ReactJS, NodeJS, AJAX,
          AXIOS
        </p>
      </div>
    </div>
  );
};

export default CardBody;
