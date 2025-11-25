import type { CardProps } from "../types/card";

const Card = ({ data }: { data: CardProps }) => {
  return (
    <div className="flex flex-col gap-4 border border-[#E8E8EA] rounded-2xl m-10 p-4">

      {/* Blog Image */}
      <img
        src={`http://localhost:4000/uploads/${data.image}`}
        alt="blog"
        className="w-200 h-50 rounded-xl object-cover"
      />

      <div className="flex flex-col gap-4">
        <span className="bg-[#4B6BFB0D] text-[#4B6BFB] p-2 rounded-md w-30">
          Technology
        </span>

        {/* Blog Title */}
        <h1 className="text-start font-medium text-2xl text-black">
          {/* {data.description?.slice(0, 20)}... */}
          {data.title}
        </h1>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">

            {/* Author Profile */}  
            <img
              src={
                data.author_profile
                  ? `http://localhost:4000/uploads/${data.author_profile}`
                  : "/default-profile.png"
              }
              alt="profile"
              className="w-8 h-8 rounded-full"
            />

            <p className="text-base font-normal text-[#696A75]">
              {data.author_name}
            </p>
          </div>

          {/* Created Date */}
          <p className="text-base font-normal text-[#696A75] ml-8">
            {new Date(data.created_at).toDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
