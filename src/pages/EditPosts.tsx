import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/authContext";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

interface Post {
  id: number;
  title: string;
  description: string;
  image?: string | null;
  is_featured: boolean;
}

const EditPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [post, setPost] = useState<Post | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isFeatured, setIsFeatured] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchPost = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/v1/blog/${id}`);
        const data = res.data.data;

        setPost(data);
        setTitle(data.title);
        setDescription(data.description);
        setIsFeatured(data.is_featured);
        setPreview(data.image ? `http://localhost:4000/uploads/${data.image}` : null);
      } catch (err) {
        toast.error("Failed to load post details.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!post) return;

    if (!title || !description) {
      toast.error("Title and description are required.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("author_id", String(user?.id));
    formData.append("is_featured", String(isFeatured));
    if (image) formData.append("image", image);

    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      await axios.put(`http://localhost:4000/api/v1/blog/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Post updated successfully!");
      setTimeout(() => navigate("/my-posts"), 1000);
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p className="text-center mt-20 text-xl">Loading post...</p>;

  if (!post) return <p className="text-center mt-20 text-xl text-red-500">Post not found</p>;

  return (
    <div className="max-w-3xl mx-auto mt-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Edit Post</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5 bg-white p-6 rounded shadow">

        {/* Title */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Title</label>
          <input
            type="text"
            className="w-full p-2 rounded border"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Description</label>
          <textarea
            className="w-full p-2 rounded border h-32"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        {/* Image */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Upload Image</label>
          <input type="file" accept="image/*" className="block" onChange={handleImageChange} />
          {preview && <img src={preview} alt="Preview" className="mt-3 w-40 h-40 object-cover rounded border" />}
        </div>

        {/* Featured */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="featured"
            checked={isFeatured}
            onChange={(e) => setIsFeatured(e.target.checked)}
          />
          <label htmlFor="featured">Set as Featured Post</label>
        </div>

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white py-2 rounded font-semibold"
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Post"}
        </button>
      </form>
    </div>
  );
};

export default EditPost;
