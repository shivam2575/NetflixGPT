import React from "react";

const GPTSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12 text-white rounded-lg"
        action="submit"
      >
        <input
          className="m-4 p-4 col-span-9"
          placeholder="What would you like to watch today?"
          type="text"
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 rounded-lg cursor-pointer">
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
