import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: "primary" | "secondary";
}

const Button = (props: Props) => {
  return (
    <button
      style={{ fontSize: "14px" }}
      className="text-white py-2 px-8 rounded-full cursor-pointer mt-5 disabled:!bg-gray-400 bg-secondary"
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
