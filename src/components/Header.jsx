import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGPTSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => {
        navigate("/error");
      });
  };
  const handleGPTClick = () => {
    dispatch(toggleGPTSearchView());
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="app-logo" />
      {user && (
        <div className="flex items-center">
          {showGPTSearch && (
            <select
              onChange={handleLanguageChange}
              className="m-2 p-2 text-white bg-gray-500/50 rounded-lg cursor-pointer hover:bg-gray-700"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.value} value={lang.value}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGPTClick}
            className="m-2 bg-gray-500/50 text-white p-2 rounded-lg cursor-pointer hover:bg-gray-700"
          >
            {showGPTSearch ? "Homepage" : "GPT Search"}
          </button>
          <img className="h-10 w-10" src={user.photoURL} alt="user-icon" />
          <button
            onClick={handleSignOut}
            className="m-2 p-2 border rounded-lg font-bold text-white h-12 border-black cursor-pointer"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
