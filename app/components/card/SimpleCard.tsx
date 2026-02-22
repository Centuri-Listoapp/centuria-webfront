import React from "react";
import "./sinpleCard.css";

export type SimpleCardProps = {
  children: any;
};

const SimpleCard = ({ children }: SimpleCardProps) => {
  return <div className="simpleCard-root">{children}</div>;
};

export default SimpleCard;
