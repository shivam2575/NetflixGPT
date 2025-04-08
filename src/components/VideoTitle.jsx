import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute text-white w-screen aspect-video pt-[18%] px-14 bg-gradient-to-r from-black">
      <h1 className="font-bold text-5xl">{title}</h1>
      <p className="text-md w-1/3 py-6">{overview}</p>
      <div>
        <button className="bg-white text-black p-4 px-12 rounded-lg cursor-pointer text-xl hover:bg-white/80">
          ▶️ Play
        </button>
        <button className="mx-2 bg-gray-500/50 text-white  p-4 px-12 rounded-lg cursor-pointer text-xl hover:bg-gray-700">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
