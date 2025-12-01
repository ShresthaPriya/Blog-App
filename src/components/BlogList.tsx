import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import type { CardProps } from "../types/card";

const BlogList = () => {
  const [blogs, setBlogs] = useState<CardProps[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/v1/blog");
        const rows = res.data?.data?.rows || [];
        setBlogs(rows);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
        {blogs.map((blog) => (
          <Card key={blog.id} data={blog} />
        ))}
      </div>

      <button className="border border-[#696A75] text-[#696A75] p-2 rounded-md block mx-auto">
        Load More
      </button>
    </>
  );
};

export default BlogList;
