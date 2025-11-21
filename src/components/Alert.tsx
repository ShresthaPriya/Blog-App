import React from "react";

interface AlertProps {
  type: "success" | "error" | "info";
  message: string;
}

const Alert: React.FC<AlertProps> = ({ type, message }) => {
  const bgColor =
    type === "success" ? "alert-success" :
    type === "error" ? "alert-error" :
    "alert-info";

  return (
    <div className={`alert ${bgColor} text-center text-red-500 text-sm mt-1`} role="alert">
      {message}
    </div>
  );
};

export default Alert;
