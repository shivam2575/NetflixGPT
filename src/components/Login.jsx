import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="h-screen flex justify-center items-center bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web/IN-en-20250317-TRIFECTA-perspective_26f87873-6014-460d-a6fb-1d96d85ffe5f_large.jpg')]">
        <form
          className="text-white rounded-lg w-3/12 h-1/2 p-2 bg-black/80 flex justify-center"
          action="submit"
        >
          <div className="w-3/4">
            <h1 className="font-bold text-3xl w-full my-4 py-2">Sign In</h1>
            <input
              className="my-2 p-2 w-full rounded-lg bg-black border-white border"
              type="email"
              placeholder="Email"
            />
            <input
              className="my-2 p-2 rounded-lg w-full bg-black border-white border"
              type="password"
              placeholder="Password"
            />
            <button className="bg-red-600 my-4 p-2 w-full rounded-lg ">
              Sign In
            </button>
            <p className="py-4">
              New to Netflix? <a href="/">Sign up now</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
