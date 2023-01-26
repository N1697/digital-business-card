import React from "react";
import avatar from "../images/avatar.jpeg";

const CardHeader = () => {
  return (
    <div className="card-header">
      <a href={avatar} target="_blank">
        <img src={avatar} alt="avatar" className="card-img-top avatar" />
      </a>
    </div>
    // <div className="card-header click-zoom">

    //   <label>
    //     <input type="checkbox" name="" id="" />
    //     <img src={avatar} alt="avatar" className="card-img-top avatar" />
    //   </label>
    // </div>
  );
};

export default CardHeader;
