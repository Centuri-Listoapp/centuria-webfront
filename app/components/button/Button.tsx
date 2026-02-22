import React from "react";
import "./button.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: "primary" | "secondary" | "text";
  fullWidth?: boolean;
  icon?: boolean;
  myClass?: string;
}

const Button = ({ fullWidth, icon, myClass, ...props }: Props) => {
  const colorClass = {
    primary: "text-white bg-primary",
    secondary: "text-white bg-secondary",
    text: "bg-text",
  }[props.color ?? "secondary"];

  return (
    <button
      style={{
        fontSize: "14px",
        width: fullWidth ? "100%" : "auto",
      }}
      data-icon={icon ? "true" : undefined}
      className={
        "button-root py-2 px-4 rounded-full cursor-pointer disabled:!bg-gray-400 " +
        colorClass +
        " " +
        myClass
      }
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
