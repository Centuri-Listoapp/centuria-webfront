import React from "react";
import "./skeleton.css";

type SkeletonProps = {
  variant?: "text" | "cicle" | "rect";
};

const Skeleton = (props: SkeletonProps) => {
  const variantClass = {
    text: "skeleton-text",
    cicle: "skeleton-circle",
    rect: "",
  }[props.variant ?? "rect"];

  return <div className={"skeleton " + variantClass}></div>;
};

export default Skeleton;
