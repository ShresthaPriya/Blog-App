import React, { useState } from 'react';
import axios from 'axios';
import InputForm from '../components/FormInput';
import Button from '../components/Button';
import Alert from '../components/Alert';
import type { SubmitHandler } from "react-hook-form"; 
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import type { LoginInput } from '../validator/userValidator';
import { loginSchema } from '../validator/userValidator';
import { zodResolver } from '@hookform/resolvers/zod';


const Login: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema)
  });
  const [apiError, setApiError] = useState<string | null>(null);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginInput> = async (data: LoginInput) => {
    setApiError(null);
    try {
      const response = await axios.post("http://localhost:4000/api/v1/user/login", data);

      if (response.data?.message === "Invalid credentials") {
        setApiError("Invalid crendential!");
      } else {
        alert("Login successful!");
        navigate("/home"); 
      }
    } catch (err: any) {
      setApiError(err.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col justify-center items-center bg-white p-8 rounded-xl w-full max-w-md shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">Login</h2>

        {apiError && <Alert message={apiError} type="error" />}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
          <InputForm
            label="Email"
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-md pl-3 pr-3 mt-2 py-2 focus:outline-none"
            {...register("email")}
          />
          {errors.email && <Alert message={errors.email.message || ""} type="error" />}

          <InputForm
            label="Password"
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded-md pl-3 pr-3 mt-2 py-2 focus:outline-none"
            {...register("password")}
          />
          {errors.password && <Alert message={errors.password.message || ""} type="error" />}

          <Button
            type="submit"
            text="Login"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
          />
        </form>

        <p className="text-gray-600 mt-4 text-center">
          Don't have an account?{' '}
          <span
            className="text-blue-600 cursor-pointer hover:underline"
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
