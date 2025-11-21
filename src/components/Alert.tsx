import React from "react";

interface AlertProps {
  type: "success" | "error" | "info";
  message: string;
}

const Alert: React.FC<AlertProps> = ({ type, message }) => {
  const bgColor =
    type === "success" ? "alert-success" :
    type === "error" ? "alert-danger" :
    "alert-info";

  return (
    <div className={`alert ${bgColor} text-center`} role="alert">
      {message}
    </div>
  );
};

export default Alert;
