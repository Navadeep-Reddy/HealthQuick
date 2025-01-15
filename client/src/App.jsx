import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import GoogleLogin from "./pages/GoogleLogin";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { auth } from "./auth/config";
import UserProvider from './context/UserContext'

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={user ? <Navigate to="/" /> : <GoogleLogin />}
            />
          </Routes>
        </BrowserRouter>
    </UserProvider>
  );
}

export default App;
