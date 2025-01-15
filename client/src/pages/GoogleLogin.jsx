import {React, useState} from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../auth/config";
import { useNavigate } from "react-router-dom";
import Human from '../assets/Health.json';
import Lottie from 'lottie-react';
import { useUser } from "../context/UserContext";

const GoogleLogin = () => {
  const navigate = useNavigate();

  const {updateUserDetails} = useUser();

  const handleGoogleLogin = async () => {
    try {
      const response = await signInWithPopup(auth, googleProvider);
      const user = response.user // getting user object from the firebase auth response
      updateUserDetails({
        name: user.displayName,
        email: user.email,
        id: user.uid,
        photo: user.photoURL
      })

      navigate("/"); 
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      alert("Failed to sign in with Google.");
    }
  };

  return (
    <div className="mx-auto h-[100vh] flex flex-col items-center justify-center bg-gradient-to-b from-BWhite to-LGreen">
      {/* Header Section */}
      <header className="text-center mb-10">
        <h1 className="text-6xl font-extrabold text-DGreen mb-4">HealthQuick</h1>
        <p className="text-xl text-TBlack">
          Your go-to platform for tracking nutrients in your meals. Log your meals, 
          get detailed insights on carbs, proteins, and more, and climb the leaderboard to become the healthiest!
        </p>
      </header>
      
      {/* Main Content Section */}
      <div className="flex items-center justify-center gap-10">
        <Lottie animationData={Human} className="w-[500px] h-[500px]" />
        <div className="h-[400px] w-[400px] flex flex-col items-center justify-center bg-gradient-radial from-BWhite to-LGreen ">
          <h1 className="font-bold mb-4 text-TBlack text-4xl">Login with Google</h1>
          <button 
            onClick={handleGoogleLogin}
            className="px-6 py-2 bg-DGreen text-white rounded hover:bg-LGreen hover:text-TBlack transition-all duration-300"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoogleLogin;
