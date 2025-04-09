import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkEmailAndPassword } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR, BG_IMG_URL, IMG_URL_CDN } from "../utils/constants";

const Login = () => {
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
          updateProfile(user, {
            displayName: firstName.current.value + " " + lastName.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { displayName, email, uid, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
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
      <div
        className="h-screen flex justify-center items-center"
        style={{ backgroundImage: `url(${BG_IMG_URL})` }}
      >
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
