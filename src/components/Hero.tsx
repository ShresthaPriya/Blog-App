import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import backgroundImg from "../assets/images/backgroundImg.jpg";
import profile from "../assets/images/profile.png";

interface FeaturedPost {
  id: number;
  title: string;
  description: string;
  image?: string | null;
  author_name: string;
  author_profile?: string | null;
  created_at: string;
}

const Hero: React.FC = () => {
  const [post, setPost] = useState<FeaturedPost | null>(null);

  useEffect(() => {
    const fetchFeaturedPost = async () => {
      try {
        // Fetch featured post from backend using query param
        const res = await axios.get("http://localhost:4000/api/v1/blog", {
          params: { is_featured: true, limit: 1 }
        });

        // Take first post from response
        const featured = res.data.data.rows[0];
        setPost(featured || null);
      } catch (err) {
        console.error("No featured post found", err);
        setPost(null);
      }
    };
    fetchFeaturedPost();
  }, []);

  // Fallback if no featured post exists
  const displayPost = post || {
    title: "No Featured Post Yet",
    image: null,
    author_name: "Admin",
    author_profile: null,
    created_at: new Date().toISOString(),
  };

  return (
    <div>
      <h1 className="text-center font-medium text-2xl">Page Title</h1>
      <div className="flex justify-center items-center gap-2 mt-5">
        <Link to="/home">Home</Link>
        <span>|</span>
        <Link to="/link">Link to</Link>
      </div>

      <div className="flex justify-center items-center mt-10 relative">
        <img
          src={displayPost.image ? `http://localhost:4000/uploads/${displayPost.image}` : backgroundImg}
          alt={displayPost.title}
          className="w-400 h-150 rounded-md object-cover"
        />
        <div className="flex-col absolute left-20">
          <button className="bg-[#4B6BFB] top-90 text-white p-2 rounded-md block">
            Featured
          </button>
          <h1 className="text-start font-medium text-2xl top-100 text-white mt-8">
            {displayPost.title}
          </h1>
          <div className="flex justify-between gap-2">
            <div className="flex items-center text-center gap-2 mt-8">
              <img
                src={displayPost.author_profile ? `http://localhost:4000/uploads/${displayPost.author_profile}` : profile}
                alt={displayPost.author_name}
                className="w-8 rounded-full"
              />
              <p className="font-[Work Sans] text-white">{displayPost.author_name}</p>
              <p className="font-[Work Sans] text-white ml-8">
                {new Date(displayPost.created_at).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
