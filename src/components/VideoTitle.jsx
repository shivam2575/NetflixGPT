import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute text-white w-screen aspect-video pt-[20%] px-14 bg-gradient-to-r from-black">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="text-lg w-1/2 py-6">{overview}</p>
      <div>
        <button className="bg-white text-black border p-4 px-12 rounded-lg cursor-pointer text-xl hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="mx-2 bg-gray-500 text-white border p-4 px-12 rounded-lg cursor-pointer bg-opacity-50 text-xl hover:bg-gray-700">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
