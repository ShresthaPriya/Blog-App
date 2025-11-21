import React, { useState } from "react";
import type { SubmitHandler } from "react-hook-form"; 
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import InputForm from "../components/FormInput";
import Button from "../components/Button";
import Alert from "../components/Alert";

interface RegisterInputs {
  name: string;
  email: string;
  password: string;
  role: string;
}

const Register: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterInputs>();
  const [apiError, setApiError] = useState<string | null>(null);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<RegisterInputs> = async (data) => {
    setApiError(null);
    try {
      const response = await axios.post("http://localhost:4000/api/v1/user/register/", data);
      if (response.data === "Already registered") {
        setApiError("E-mail already registered! Please login.");
      } else {
        alert("Registered successfully! Please login.");
        navigate("/login");
      }
    } catch (err: any) {
      setApiError(err.response?.data?.message || "Something went wrong!");
    }
  };

  return (
  <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center bg-white p-8 rounded-xl w-full max-w-md shadow-lg">
  <h2 className="text-2xl font-semibold text-blue-600 mb-6">Register</h2>

  {apiError && <Alert message={apiError} type="error" />}

  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
    <div className="flex flex-col gap-2"></div>
    <InputForm
      label="Name"
      id="name"
      placeholder="Enter your name"
      className="w-full border border-gray-300 rounded-md pl-1 pr-3 mt-2 py-2 focus:outline-none"
      {...register("name", { required: "Name is required" })}
    />
    {errors.name && <Alert message={errors.name.message || ""} type="error" />}

    <InputForm
      label="Email"
      id="email"
      type="email"
      placeholder="Enter your email"
      className="w-full border border-gray-300 rounded-md pl-1  mt-2 pr-3 py-2 focus:outline-none"
      {...register("email", { required: "Email is required" })}
    />
    {errors.email && <Alert message={errors.email.message || ""} type="error" />}

    <InputForm
      label="Password"
      id="password"
      type="password"
      placeholder="Enter your password"
      className="w-full border border-gray-300 rounded-md pl-1 mt-2 pr-3 py-2 focus:outline-none"
      {...register("password", {
        required: "Password is required",
        minLength: { value: 6, message: "Password must be at least 6 characters" }
      })}
    />
    {errors.password && <Alert message={errors.password.message || ""} type="error" />}
    <div className="mb-4 text-start">
  <label htmlFor="role" className="form-label font-semibold">
    Role
  </label>
  <select
    id="role"
    {...register("role", { required: "Role is required" })}
    className="w-full border border-gray-300 rounded-md pl-3 pr-3 mt-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    defaultValue=""
  >
    <option value="">--Please choose an option--</option>
    <option value="author">Author</option>
    <option value="user">User</option>
  </select>
  {errors.role && (
    <span className="text-red-500 text-sm mt-1">{errors.role.message}</span>
  )}
</div>
   

    <Button
      type="submit"
      text="Register"
      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
    />
  </form>

  <div className="flex flex-col gap-3 mt-4 w-full">
    <p className="text-gray-600 text-center">Already have an account?</p>
    <Button
      text="Login"
      onClick={() => navigate("/login")}
      className="w-full bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 rounded-lg transition duration-200"
    />
  </div>
</div>
</div>

  );
};

export default Register;
