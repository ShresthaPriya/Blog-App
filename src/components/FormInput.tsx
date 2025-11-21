import React from "react";
import type { InputHTMLAttributes } from "react";

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

const InputForm: React.FC<InputFormProps> = ({ label, id, ...props }) => {
  return (
    <div className="mb-4 text-start">
      <label htmlFor={id} className="form-label">
        <strong>{label}</strong>
      </label>
      <input id={id} className="form-control" {...props} />
    </div>
  );
};

export default InputForm;
