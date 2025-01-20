import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../auth/config";
import { useNavigate } from "react-router-dom";
import Human from "../assets/Health.json";
import Lottie from "lottie-react";
import { useUser } from "../context/UserContext";
import { motion } from "framer-motion";

const GoogleLogin = () => {
  const navigate = useNavigate();
  const { updateUserDetails } = useUser();

  const handleGoogleLogin = async () => {
    try {
      const response = await signInWithPopup(auth, googleProvider);
      const user = response.user; // Getting user object from the Firebase auth response
      updateUserDetails({
        name: user.displayName,
        email: user.email,
        id: user.uid,
        photo: user.photoURL,
      });

      navigate("/");
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      alert("Failed to sign in with Google.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="mx-auto h-[100vh] flex flex-col items-center justify-center bg-gradient-to-b from-BWhite to-LGreen"
    >
      {/* Header Section */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center mb-10"
      >
        <h1 className="text-6xl font-extrabold text-DGreen mb-4">HealthQuick</h1>
        <p className="text-xl text-TBlack">
          Your go-to platform for tracking nutrients in your meals. Log your
          meals, get detailed insights on carbs, proteins, and more, and climb
          the leaderboard to become the healthiest!
        </p>
      </motion.header>

      {/* Main Content Section */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex items-center justify-center gap-10"
      >
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Lottie animationData={Human} className="w-[500px] h-[500px]" />
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="h-[400px] w-[400px] flex flex-col items-center justify-center bg-gradient-radial from-BWhite to-LGreen  rounded-lg"
        >
          <h1 className="font-bold mb-4 text-TBlack text-4xl">Login with Google</h1>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleGoogleLogin}
            className="px-6 py-2 bg-DGreen text-white rounded hover:bg-LGreen hover:text-TBlack transition-all duration-300"
          >
            Sign in with Google
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default GoogleLogin;
