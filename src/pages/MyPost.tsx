import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/authContext";
import { Link } from "react-router-dom";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  image?: string | null;
  is_featured: boolean;
}

interface Message {
  type: "success" | "error";
  text: string;
}

const MyPosts: React.FC = () => {
  const { user } = useAuth();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [message, setMessage] = useState<Message | null>(null);

  // Fetch posts of logged-in author
  const fetchMyPosts = async () => {
    if (!user) return;
    try {
      const res = await axios.get<{ data: BlogPost[] }>(
        `http://localhost:4000/api/v1/blog/author/${user.id}`
      );
      setPosts(res.data.data || []);
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "Failed to load your posts." });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyPosts();
  }, [user]);

  // Delete Post
  const handleDelete = async (id: number) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;

    try {
      await axios.delete(`http://localhost:4000/api/v1/blog/${id}`);
      setMessage({ type: "success", text: "Post deleted successfully." });

      // Remove from UI
      setPosts((prev) => prev.filter((p) => p.id !== id));
    } catch (error: any) {
      console.error(error);
      setMessage({
        type: "error",
        text: error.response?.data?.message || "Something went wrong.",
      });
    }
  };

  if (!user) return <p className="text-center mt-20 text-xl">Please login first.</p>;
  if (loading) return <p className="text-center mt-20 text-xl">Loading your posts...</p>;

  return (
    <div className="max-w-5xl mx-auto mt-12 px-4">
                <h1 className="text-center text-3xl font-bold text-gray-800">My Posts</h1>

      <div className="flex justify-between items-center  mb-6">
      
      </div>

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

      {posts.length === 0 ? (
        <p className="text-gray-600 mt-10 text-lg text-center">
          You haven't created any posts yet.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded shadow p-4 flex flex-col gap-3"
            >
              {post.image && (
                <img
                  src={`http://localhost:4000/uploads/${post.image}`}
                  className="w-full h-48 object-cover rounded"
                  alt="Post"
                />
              )}

              <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>

              {post.is_featured && (
                <span className="px-3 py-1 bg-yellow-300 text-sm rounded w-fit text-gray-800 font-medium">
                  ⭐ Featured
                </span>
              )}

              <p className="text-gray-600 line-clamp-3">{post.description}</p>

              <div className="flex justify-between mt-3">
                <Link
                  to={`/edit-post/${post.id}`}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Edit
                </Link>

                <button
                  onClick={() => handleDelete(post.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyPosts;
