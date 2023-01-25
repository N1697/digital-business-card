import React, { Component } from "react";
import avatar from "../images/avatar.jpeg";

const CardHeader = () => {
  return (
    <div className="card-header">
      <img src={avatar} alt="avatar" className="card-img-top avatar" />
    </div>
  );
};

export default CardHeader;
