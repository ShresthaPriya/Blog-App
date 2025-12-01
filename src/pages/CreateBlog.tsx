import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface FormInputs {
  title: string;
  description: string;
  image: FileList;
  is_featured: boolean;
}

const CreatePost: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [preview, setPreview] = useState<string | null>(null);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm<FormInputs>();

  // Watch Image to Show Preview
  const watchImage = watch("image");

  React.useEffect(() => {
    if (watchImage && watchImage.length > 0) {
      const file = watchImage[0];
      setPreview(URL.createObjectURL(file));
    }
  }, [watchImage]);

  const onSubmit = async (data: FormInputs) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("author_id", String(user?.id));
    formData.append("is_featured", String(data.is_featured));

    if (data.image && data.image.length > 0) {
      formData.append("image", data.image[0]);
    }

    try {
        const token =localStorage.getItem("token");
      await axios.post("http://localhost:4000/api/v1/blog", formData, {
        headers: { 
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data" },
      });

      toast.success("Post created successfully!");

      reset();
      setPreview(null);

      setTimeout(() => navigate("/my-posts"), 1200);
    } catch (error: any) {
     
       
      toast.error(error.response?.data?.message || "Something went wrong.");
  
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Create New Post</h1>

      {message && (
        <div
          className={`p-3 rounded mb-4 ${
            message.type === "success"
              ? "bg-green-200 text-green-800"
              : "bg-red-200 text-red-800"
          }`}
        >
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 bg-white p-6 rounded shadow">
        
        {/* Title */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Title</label>
          <input
            type="text"
            className="w-full p-2 rounded border"
            placeholder="Enter post title..."
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Description</label>
          <textarea
            className="w-full p-2 rounded border h-32"
            placeholder="Write your blog content..."
            {...register("description", { required: "Description is required" })}
          ></textarea>

          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        {/* Upload Image */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Upload Image</label>
          <input type="file" accept="image/*" {...register("image")} />

          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mt-3 w-40 h-40 object-cover rounded border"
            />
          )}
        </div>

        {/* Featured */}
        <div className="flex items-center gap-2">
          <input type="checkbox" id="featured" {...register("is_featured")} />
          <label htmlFor="featured" className="text-gray-700">
            Set as Featured Post
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Creating..." : "Create Post"}
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
