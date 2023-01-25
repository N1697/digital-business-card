import React, { Component } from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";

const Card = () => {
  return (
    <div className="card">
      <CardHeader />
      <CardBody />
      <CardFooter />
    </div>
  );
};

export default Card;
