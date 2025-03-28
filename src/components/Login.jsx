import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkEmailAndPassword } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const firstName = useRef(null);
  const lastName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleValidation = () => {
    const response = checkEmailAndPassword(
      email.current.value,
      password.current.value
    );
    setErrorMsg(response);
    if (response) return;
    if (!isSignInForm) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: firstName.current.value + " " + lastName.current.value,
            photoURL:
              "https://yt3.ggpht.com/yti/ANjgQV_Fq3P48RVaNyOlo84LwavWVZ0uY1FsKUT_Jk3pn7pcOQaI=s88-c-k-c0x00ffffff-no-rj",
          })
            .then(() => {
              const { displayName, email, uid, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMsg(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " - " + errorMessage);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " - " + errorMessage);
        });
    }
  };
  const toggleSignIn = () => {
    setSignInForm(!isSignInForm);
  };
  return (
    <div className="flex flex-col">
      <Header />
      <div className="h-screen flex justify-center items-center bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web/IN-en-20250317-TRIFECTA-perspective_26f87873-6014-460d-a6fb-1d96d85ffe5f_large.jpg')]">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="text-white rounded-lg w-3/12 p-2 bg-black/80 flex justify-center"
          action="submit"
        >
          <div className="w-3/4">
            <h1 className="font-bold text-3xl w-full my-4 py-2">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && (
              <>
                <input
                  ref={firstName}
                  className="my-2 p-2 w-full rounded-lg bg-black border-white border"
                  type="text"
                  placeholder="First name"
                  required
                />
                <input
                  ref={lastName}
                  className="my-2 p-2 w-full rounded-lg bg-black border-white border"
                  type="text"
                  placeholder="Last name"
                  required
                />
              </>
            )}
            <input
              ref={email}
              className="my-2 p-2 w-full rounded-lg bg-black border-white border"
              type="email"
              placeholder="Email"
              required
            />
            <input
              ref={password}
              className="my-2 p-2 rounded-lg w-full bg-black border-white border"
              type="password"
              placeholder="Password"
              required
            />
            {!isSignInForm && (
              <>
                <input
                  className="my-2 p-2 rounded-lg w-full bg-black border-white border"
                  type="password"
                  placeholder="Confirm Password"
                  required
                />
              </>
            )}
            <p className="m-2 p-2 font-light text-red-600">{errorMsg}</p>
            <button
              type="submit"
              onClick={handleValidation}
              className="bg-red-600 my-4 p-2 w-full rounded-lg cursor-pointer"
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p onClick={toggleSignIn} className="py-4 my-2 cursor-pointer">
              {isSignInForm
                ? "New to Netflix? Sign Up now"
                : "Already a user? Sign In now"}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
